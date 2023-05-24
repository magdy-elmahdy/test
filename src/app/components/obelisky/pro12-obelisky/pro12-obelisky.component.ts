import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-pro12-obelisky',
  templateUrl: './pro12-obelisky.component.html',
  styleUrls: ['./pro12-obelisky.component.scss']
})
export class Pro12ObeliskyComponent {
  alcoholCheck:any;
  id:any
  responseProposal12:any
  flag:boolean=false;
  isValid:boolean=false

  // message:string= "tahya Masr"

  tobacco:any;
  firstEndorsement:any;
  secondEndorsement:any;
  pro12Form:FormGroup = new FormGroup({
      "weight" : new FormControl('',[Validators.required , Validators.minLength(2), Validators.maxLength(3)]),
      "height" : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      "tobacco" : new FormControl(''),
      "cigarettesOrECigarettes" : new FormControl(''),
      "shisha" : new FormControl(''),
      "vape" : new FormControl(false),
      "alcohol" : new FormControl(''),
      "askDoctorAboutCondition" : new FormControl(false),
      "treatmentOrFollowUpOrGrowthCancer" : new FormControl(false),
      "offWorkOrMedication" : new FormControl(false),
      "hospitalized" : new FormControl(false),
      "familySuffer" : new FormControl(false),
      "disabilityOrPermanentHealth" : new FormControl(false),
      "hospitalOrMedicalChecks" : new FormControl(false),
      "anotherApplications" : new FormControl(false),
      "engageIn" : new FormControl(false),
      "firstEndorsement" : new FormControl('', [Validators.required]),
      "secondEndorsement" : new FormControl('', [Validators.required]),
  })
 
  constructor( private _ProposalService:ProposalService , public _ActivatedRoute:ActivatedRoute,public _Router:Router){
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }
  ngOnInit(): void {}

  getTobacco(event:any){
    this.tobacco = event.value;
    this.pro12Form.get("vape")?.setValue(event.value=="true");
    this.pro12Form.get("cigarettesOrECigarettes")?.setValue('');
    this.pro12Form.get("shisha")?.setValue('');
  }

  getVape(event:any){
    this.pro12Form.get("vape")?.setValue(event.value=="true");
  }

  getCigarettesOrECigarettes(event:any){
    this.pro12Form.get("cigarettesOrECigarettes")?.setValue(event.value);
  }
  getShisha(event:any){
    this.pro12Form.get("getShisha")?.setValue(event.value);
  }
  alcoholChechFun(event:any){
    this.alcoholCheck=event.value
    this.pro12Form.get("alcohol")?.setValue(event.value);
  }
  getAlcohol(event:any){
    this.pro12Form.get("alcohol")?.setValue(event.value);
  }
  getaskDoctorAboutCondition(event:any){
    this.pro12Form.get("askDoctorAboutCondition")?.setValue(event.value=="true");
  }

  getTreatmentOrFollowUpOrGrowthCancer(event:any){
    this.pro12Form.get("treatmentOrFollowUpOrGrowthCancer")?.setValue(event.value=="true");
  }
  offWorkOrMedication(event:any){
    this.pro12Form.get("offWorkOrMedication")?.setValue(event.value=="true");
  }
  gethospitalized(event:any){
    this.pro12Form.get("hospitalized")?.setValue(event.value=="true");
  }
  getfamilySuffer(event:any){
    this.pro12Form.get("familySuffer")?.setValue(event.value=="true");
  }
  getdisabilityOrPermanentHealth(event:any){
    this.pro12Form.get("disabilityOrPermanentHealth")?.setValue(event.value=="true");
  }
  gethospitalOrMedicalChecks(event:any){
    this.pro12Form.get("hospitalOrMedicalChecks")?.setValue(event.value=="true");
  }
  anotherApplications(event:any){
    this.pro12Form.get("anotherApplications")?.setValue(event.value=="true");
  }
  engageIn(event:any){
    this.pro12Form.get("engageIn")?.setValue(event.value=="true");
  }
  getValidInputs(){
    if(this.pro12Form.get("firstEndorsement")?.value!=false && this.pro12Form.get("secondEndorsement")?.value!=false){
      this.isValid= true;
   }
  }
  


                 // Submit proposal 12
  submitPro12Form(){
    let Model ={
      weight:this.pro12Form.get("weight")?.value,
      height:this.pro12Form.get("height")?.value,
      tobacco:this.tobacco=="true",
      vape:this.pro12Form.get("vape")?.value,
      shisha:this.pro12Form.get("cigarettesOrECigarettes")?.value,
      cigarettesOrECigarettes:this.pro12Form.get("cigarettesOrECigarettes")?.value,
      alcohol:this.pro12Form.get("alcohol")?.value,
      askDoctorAboutCondition:this.pro12Form.get("askDoctorAboutCondition")?.value,
      treatmentOrFollowUpOrGrowthCancer:this.pro12Form.get("treatmentOrFollowUpOrGrowthCancer")?.value,
      offWorkOrMedication:this.pro12Form.get("offWorkOrMedication")?.value,
      hospitalized:this.pro12Form.get("hospitalized")?.value,
      familySuffer:this.pro12Form.get("familySuffer")?.value,
      disabilityOrPermanentHealth:this.pro12Form.get("disabilityOrPermanentHealth")?.value,
      hospitalOrMedicalChecks:this.pro12Form.get("hospitalOrMedicalChecks")?.value,
      anotherApplications:this.pro12Form.get("anotherApplications")?.value,
      engageIn:this.pro12Form.get("engageIn")?.value,
      firstEndorsement:this.pro12Form.get("firstEndorsement")?.value,
      secondEndorsement:this.pro12Form.get("secondEndorsement")?.value, 
    } 

      this._ProposalService.proposal12(Model , this.id).subscribe( res=>{
      this.responseProposal12= res;
      this._Router.navigate(['/quoDetailsCi']);
      localStorage.setItem("qoutDetails9",JSON.stringify(this.responseProposal12));


    }, error=>{
      if(error.status==400 ||error.status==0){
        this.flag=true;
      }  
    })
  }
}
