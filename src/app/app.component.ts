import { Component, OnInit } from '@angular/core';
import { ProposalService } from './services/proposal.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { AuthService } from './services/auth.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mcq-exam';
  opened=false;
  allTreaties:any;
  TOKEN=this._AuthService.getTOKEN();
  constructor(private _ProposalService:ProposalService , private _Router:Router,public _AuthService:AuthService){
    AOS.init();
    this.getAllTreaties();
  }
  // Get All Treaties
  getAllTreaties(){
    if(localStorage.getItem('adminToken')!=null){
      this._ProposalService.getAllTreaies().subscribe(data=>{
        this.allTreaties= data;


        
      })
    }
  }
  redirectTo(uri: string) {
    this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this._Router.navigate([uri]));
 }
        //Get Id
  iiiDD(id:any){
    this.redirectTo("treaty/"+id);
  }

    //destroy Token
  destroyTooken(){
  localStorage.removeItem('adminToken');
  this._Router.navigate(['/CiApplicationForm'])
}
  ngOnInit(): void {
    AOS.init();
  }

}
