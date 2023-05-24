import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-qoutation-details',
  templateUrl: './qoutation-details.component.html',
  styleUrls: ['./qoutation-details.component.scss']
})
export class QoutationDetailsComponent{
  
  qouteDetails:any
  constructor(private _location:Location){
    
    this.getQoutationDetails();
  }
  back(){
    this._location.back()
  }
  getQoutationDetails(){
    if('qoutDetails9' in localStorage){
      this.qouteDetails =JSON.parse(localStorage.getItem("qoutDetails9")!)
      console.log(this.qouteDetails);
      
      }
  }
}
