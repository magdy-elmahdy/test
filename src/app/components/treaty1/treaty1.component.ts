import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/services/proposal.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faFile}from '@fortawesome/free-solid-svg-icons';
import {faEye}from '@fortawesome/free-solid-svg-icons';
import {faBell}from '@fortawesome/free-solid-svg-icons';
import {faUser}from '@fortawesome/free-solid-svg-icons';
import {faTable}from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill}from '@fortawesome/free-solid-svg-icons';
import {faDashboard}from '@fortawesome/free-solid-svg-icons';
import {faFlag}from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-treaty1',
  templateUrl: './treaty1.component.html',
  styleUrls: ['./treaty1.component.scss']
})
export class Treaty1Component implements OnInit{

  fahouse=faHouse;
  faFile=faFile
  faEye=faEye
  faBell=faBell
  faUser=faUser
  faTable=faTable
  faMoneyBill=faMoneyBill
  faDashboard=faDashboard
  faFlag=faFlag
  flag:Boolean=false;
  treatyId:any;
  TheTreaty:any;

  selectFirstTrety:any;
  constructor(private _ProposalService:ProposalService,private _AuthService:AuthService, private _ActivatedRoute:ActivatedRoute, private _Router:Router){
    if(this._AuthService.isLoggedIn()!=true){
      this._Router.navigate(['/login'])
    }
    this.treatyId= this._ActivatedRoute.snapshot.paramMap.get('id');
    if(this.treatyId==null){
      this._ProposalService.getAllTreaies().subscribe(data=>{
        console.log(data);
        this.selectFirstTrety = data
        this.treatyId= this.selectFirstTrety[0].id;
        this.getTreaty()
      })
    }


    // AOS.init();
  }
  getTreaty(){    
      this._ProposalService.gitTreatyById(this.treatyId).subscribe(res=>{
        this.TheTreaty = res;
        this.flag =true; 
               
      })
    
  }
  

ngOnInit(): void {
  if(this.treatyId!=null)
  {this.getTreaty();
  }

}


}
