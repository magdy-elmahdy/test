import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AnimationOptions } from 'ngx-lottie';
import * as AOS from 'aos';
declare var $:any;
@Component({
  selector: 'app-app-form-oblisky',
  templateUrl: './app-form-oblisky.component.html',
  styleUrls: ['./app-form-oblisky.component.scss']
})
export class AppFormObliskyComponent {

  sumInsured:any;
  terms:any;
  ciPlan:any;
  gender:any;
  response:any;
  flag:boolean=false;
  treatyId:any;
  isValid:boolean=false;

  constructor(public _AuthService:AuthService ,public _Router:Router){
    // this.treatyId = this._ActivatedRoute.snapshot.paramMap.get('id')
    // console.log(this.treatyId);
    AOS.init();
  }

  AppForm:FormGroup =new FormGroup ({
    "fullName" : new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(50)]),
    "email" : new FormControl('',[Validators.required,Validators.email, Validators.maxLength(40)]),
    "dateOfBirth" : new FormControl('',[Validators.required]),
    "mobile" : new FormControl('',[Validators.required, Validators.maxLength(20)]),
    "terms" : new FormControl('',[Validators.required]),
    "gender" : new FormControl('',[Validators.required]),
    "ciPlanId" : new FormControl('',[Validators.required]),
    "sumInsured" : new FormControl('',[Validators.required]),

  })
  
  selectSumInsured(e:any){
    this.sumInsured=Number(e.target.value)
  }
  selectterms(e:any){
      this.terms =Number(e.target.value)
    }
  selectCiPlan(e:any){
    this.ciPlan = Number(e.target.value) 
    }
  selectgender(e:any){
    this.gender = Number(e.target.value);      
  }
  
  getValidInputs(){
    if(this.sumInsured!=null&&this.terms!=null&&this.ciPlan!=null&&this.gender!=null){
      this.isValid= true;
    }
  }



  submitForm(){
    let Model ={
      fullName: this.AppForm.get("fullName")?.value,
      email: this.AppForm.get("email")?.value,
      dateOfBirth: this.AppForm.get("dateOfBirth")?.value,
      gender: this.gender,
      mobile: this.AppForm.get("mobile")?.value,
      ciPlanId: this.ciPlan,
      sumInsured:this.sumInsured,
      terms: this.terms,
      // treatyId:Number( this.treatyId)
      treatyId:Number(3)
    }
    // console.log(Model);
    
    this._AuthService.applicationForm(JSON.stringify(Model)).subscribe( res=>{
      this.response =res;
      console.log(this.response);
      if(this.ciPlan==1){
        this._Router.navigate([`/pro9OCi/${this.response.id}`])
      }else{
        this._Router.navigate([`/pro12Ci/${this.response.id}`])
      }
    }, error=>{
      if(error.status==400 ||error.status==0){
        this.flag=true;
        
      }  
    })

   
  }
  
  contact:AnimationOptions={
    path:'assets/imgs/illness.json'
  } 
  inputt(){
    $("#contact input").css("border-color" , "none")
    $("#contact input").css("backgroundColor" , "none")

  }
  ngOnInit(): void {}
}
