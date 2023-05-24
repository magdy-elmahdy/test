import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProposalService } from 'src/app/services/proposal.service';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
  // @ViewChild('paginator') paginator! :MatPaginator;
  roports:any;
  file:any;
  flag:boolean = false;

  search:string='';
  start:string='';
  end:string='';
  selectedValue:String ="Bordereau" ;

  Form:FormGroup=new FormGroup({
    'start':new FormControl(),
    'end':new FormControl(),
    'search':new FormControl(),
  })
  


  displayedColumns:string[]=['Product'  , 'DOB', 'FullName',
                            'SI', 'EM', 'ReinsuranceRate', 'ReinsurancePremium', 'Loading',
                              'NetRate', 'NetPremium','Gros']
                           
  constructor(private _ProposalService:ProposalService){}

            //Git Selected Value of select
  GetSelectValue(e:any){
    console.log(e.target.value);
    this.selectedValue = e.target.value;
    if(this.selectedValue=='Quotations'){
      this.flag = true;
      this.displayedColumns.push('proposalSubmitted','paymentDone', 'inceptionDate')
    }else{
      this.flag = false;
      this.displayedColumns.pop()
      this.displayedColumns.pop()
      this.displayedColumns.pop()
    }
   
    this.applyFilter();
  }

            //Apply Filter
  applyFilter(){
    let filters ={
      start:this.Form.get("start")?.value,
      end:this.Form.get("end")?.value,
      search:this.Form.get("search")?.value
    } 
    this._ProposalService.GetReports(this.selectedValue,filters).subscribe (res =>{
      this.roports=res;
      console.log(res);
      
      
    })

    
  }

       //get File
  exportFile(){
    let filters ={
      start:this.Form.get("start")?.value,
      end:this.Form.get("end")?.value,
      search:this.Form.get("search")?.value
    } 
    this._ProposalService.exportdFile(this.selectedValue,filters).subscribe(res=>{
      console.log(res);
      
   
      let blob:Blob = res.body as Blob
      let url =window.URL.createObjectURL(blob);
      window.open(url)
      
    })
  }

      //Rest Filter
  resetFilter(){
    this.Form.get("start")?.setValue('');
    this.Form.get("end")?.setValue('');
    this.Form.get("search")?.setValue('');

  }

  ngOnInit(): void {
    this.applyFilter();
    this.roports=new MatTableDataSource(this.roports)
    // this.roports.paginator=this.paginator
  }
  
}
