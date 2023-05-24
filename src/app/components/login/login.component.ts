import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/services/auth.service';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    
    res:any;
    errorEsist:boolean =false;
    constructor(private _AuthService:AuthService, private _Router:Router){
      if(this._AuthService.isLoggedIn()){
        this.redirectTo("treaty/");
      }
      
    }


      loginForm:FormGroup =new FormGroup({
        'userName':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(22)]),
        'password':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(22)])
      });


      redirectTo(uri: string) {
        this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this._Router.navigate([uri]));
     }
      submitLoginForm(){
        let Model = {
          userName:this.loginForm.get('userName')?.value,
          password:this.loginForm.get('password')?.value,
        }
        this._AuthService.logInForm(Model).subscribe(res =>{
          this.res=res
          if(this.res.isAuth==true){
            localStorage.setItem('adminToken', this.res.token);
            

            this._Router.navigate(["/treaty"])
            window.location.reload()
            

          }
        },error=>{
          this.errorEsist =true;
          
        })
      }


  contact:AnimationOptions={
    path:'assets/imgs/signup.json'
  }
  inputt(){
    $("#contact input").css("border-color" , "none")
    $("#contact input").css("backgroundColor" , "none")

  }  






      //Test

  submitQualificationForm(){
    // console.log(this.qualificationForm);
    let Model = {
      certificationName :"helli",
      certificationDescription :"fgfd"
  }
    console.log(Model);
    this._AuthService.addNewQualifications(Model).subscribe(data=>{
      console.log(data);
      
    })

  }

  ngOnInit(): void {
    this.submitQualificationForm()
  }
}
