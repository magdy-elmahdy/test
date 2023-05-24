import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-qou-details-obelisky',
  templateUrl: './qou-details-obelisky.component.html',
  styleUrls: ['./qou-details-obelisky.component.scss']
})
export class QouDetailsObeliskyComponent {
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
