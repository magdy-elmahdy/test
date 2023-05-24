import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProposalService } from '../../services/proposal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proposal9',
  templateUrl: './proposal9.component.html',
  styleUrls: ['./proposal9.component.scss']
})
export class Proposal9Component implements OnInit {

  alcoholCheck:any;
  id:any
  responseProposal9:any
  flag:boolean=false;
  isValid:boolean=false

  // message:string= "tahya Masr"

  tobacco:any;
  familyCancer:any;
  askDoctorAboutCancer:any;
  treatmentOrFollowUpOrGrowthCancer:any;
  screeningWithCancer:any;
  admissionOrSurgeryCancer:any;
  applicationsAboutCancer:any;
  firstEndorsement:any;
  secondEndorsement:any;
  pro9Form:FormGroup = new FormGroup({
      "weight" : new FormControl('',[Validators.required , Validators.minLength(2), Validators.maxLength(3)]),
      "height" : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      "tobacco" : new FormControl(''),
      "cigarettesOrECigarettes" : new FormControl(''),
      "shisha" : new FormControl(''),
      "vape" : new FormControl(false),
      "alcohol" : new FormControl(''),
      "familyCancer" : new FormControl(false),
      "askDoctorAboutCancer" : new FormControl(false),
      "treatmentOrFollowUpOrGrowthCancer" : new FormControl(false),
      "screeningWithCancer" : new FormControl(false),
      "admissionOrSurgeryCancer" : new FormControl(false),
      "applicationsAboutCancer" : new FormControl(false),
      "firstEndorsement" : new FormControl('', [Validators.required]),
      "secondEndorsement" : new FormControl('', [Validators.required]),
  })
 
  constructor( private _ProposalService:ProposalService , public _ActivatedRoute:ActivatedRoute,public _Router:Router){
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }
  ngOnInit(): void {
    
    
  }

  getTobacco(event:any){
    this.tobacco = event.value;
    this.pro9Form.get("vape")?.setValue(false);
    this.pro9Form.get("cigarettesOrECigarettes")?.setValue('');
    this.pro9Form.get("shisha")?.setValue('');
  }

  getVape(event:any){
    this.pro9Form.get("vape")?.setValue(event.value=="true");
  }

  getCigarettesOrECigarettes(event:any){
    this.pro9Form.get("cigarettesOrECigarettes")?.setValue(event.value);
  }
  getShisha(event:any){
    this.pro9Form.get("cigarettesOrECigarettes")?.setValue(event.value);
  }
  alcoholChechFun(event:any){
    this.alcoholCheck=event.value
    this.pro9Form.get("alcohol")?.setValue('');
  }
  getAlcohol(event:any){
    this.pro9Form.get("alcohol")?.setValue(event.value);

  }


  getFamilyCancer(event:any){
    this.familyCancer = event.value 
  }
  getAskDoctorAboutCancer(event:any){
    this.askDoctorAboutCancer = event.value 
  }
  getTreatmentOrFollowUpOrGrowthCancer(event:any){
    this.treatmentOrFollowUpOrGrowthCancer = event.value 
  }
  getScreeningWithCancer(event:any){
    this.screeningWithCancer = event.value 
  }
  getAdmissionOrSurgeryCancer(event:any){
    this.admissionOrSurgeryCancer = event.value 
  }
  getApplicationsAboutCancer(event:any){
    this.applicationsAboutCancer = event.value 
  }

                 // Submit proposal 9
  submitPro9Form(){
    let Model ={
      weight:this.pro9Form.get("weight")?.value,
      height:this.pro9Form.get("height")?.value,
      tobacco:this.tobacco=="true",
      vape:this.pro9Form.get("vape")?.value,
      shisha:this.pro9Form.get("cigarettesOrECigarettes")?.value,
      cigarettesOrECigarettes:this.pro9Form.get("cigarettesOrECigarettes")?.value,
      alcohol:this.pro9Form.get("alcohol")?.value,
      familyCancer:this.familyCancer=="true",
      askDoctorAboutCancer:this.askDoctorAboutCancer=="true",
      treatmentOrFollowUpOrGrowthCancer:this.treatmentOrFollowUpOrGrowthCancer=="true",
      screeningWithCancer:this.screeningWithCancer=="true",
      admissionOrSurgeryCancer:this.admissionOrSurgeryCancer=="true",
      applicationsAboutCancer:this.applicationsAboutCancer=="true",
      firstEndorsement:this.pro9Form.get("firstEndorsement")?.value,
      secondEndorsement:this.pro9Form.get("secondEndorsement")?.value
    } 
    console.log(Model);
    console.log(this.pro9Form); 

      this._ProposalService.proposal9(Model , this.id).subscribe( res=>{
      console.log(res); 
      this.responseProposal9= res;
      this._Router.navigate(['/quotationDetails']);
      localStorage.setItem("qoutDetails9",JSON.stringify(this.responseProposal9));


    }, error=>{
      if(error.status==400 ||error.status==0){
        console.log(error);
        
        this.flag=true;
      }  
    })
  }
  
}
