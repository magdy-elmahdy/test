import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  // baseUrl="https://fe47-45-241-18-248.ngrok-free.app/api/";
  baseUrl="http://97.74.82.75:4033/api/";
  
  
  constructor(public _HttpClient:HttpClient) {}

        // Get All Treaties
  getAllTreaies(){
    var t = localStorage.getItem("adminToken");
    console.log(t)
    let httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +t
    })
  };
    return this._HttpClient.get(this.baseUrl+'Treaties/GetAll',httpOptions)
  }

  
      //Proposal 9 
  proposal9(keyWord:any , id:any)
  {
    // var t = localStorage.getItem("adminToken");
    var t ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb3JkYW4gWFlaIiwianRpIjoiN2FmZmI5OWUtNzA4Ni00MTQyLWFiNDItMmE4MjQ2OWIyOWZiIiwidWlkIjoiMDQ4MjcwYzYtMTZmZC00ZTZiLTg5NjgtNjNhZjM5ZGU5NzYzIiwibmFtZSI6IkpvcmRhbiBYWVoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb21wYW55IiwiZXhwIjoxNzE1NzY4NzI3LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.3z7QulsrQ3OzHzfNQGRGwzT-A_FsqTHyXlPDTyH6p64'

    let httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' +t
      })
    };
    return this._HttpClient.post(this.baseUrl+'CI-QS/Proposals/SubmitProposal9?quotationId='+id ,keyWord,httpOptions)
  }
  
      //Proposal 12 
  proposal12(keyWord:any , id:any)
  {
    // var t = localStorage.getItem("adminToken");
    var t ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb3JkYW4gWFlaIiwianRpIjoiN2FmZmI5OWUtNzA4Ni00MTQyLWFiNDItMmE4MjQ2OWIyOWZiIiwidWlkIjoiMDQ4MjcwYzYtMTZmZC00ZTZiLTg5NjgtNjNhZjM5ZGU5NzYzIiwibmFtZSI6IkpvcmRhbiBYWVoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb21wYW55IiwiZXhwIjoxNzE1NzY4NzI3LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.3z7QulsrQ3OzHzfNQGRGwzT-A_FsqTHyXlPDTyH6p64'
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' +t
      })
    };
    return this._HttpClient.post(this.baseUrl+'CI-QS/Proposals/SubmitProposal12?quotationId='+id ,keyWord,httpOptions)
  }

            // Get All Reports 
GetReports(keyWord:any,filters?:any){
  var t = localStorage.getItem("adminToken");
  let httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +t
    })
  };
    let url=this.baseUrl+"CI-QS/Quotations/GetReports?reportType="+keyWord+"&treatyId=3"
    if(filters.search!=null){
      url = url+"&searchKey="+filters.search+"&"
    }
    if(filters.start!=null){
      url = url+"startDate="+filters.start+"&"
    }
    if(filters.end!=null){
      url = url+"endDate="+filters.end
    }
    return this._HttpClient.get(url,httpOptions)
}

          //Get Exported File
exportdFile(keyWord:any, filters:any){
  var t = localStorage.getItem("adminToken");
  let httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +t
    })
  };
  
  let url = this.baseUrl+"CI-QS/Quotations/GenerateFile?reportType="+keyWord+"&treatyId=3"
  if(filters.search!=null){
    url = url+"&searchKey="+filters.search+"&"
  }
  if(filters.start!=null){
    url = url+"startDate="+filters.start+"&"
  }
  if(filters.end!=null){
    url = url+"endDate="+filters.end
  }
  return this._HttpClient.get(url ,{observe:'response',
  responseType:'blob',headers:httpOptions.headers})        //  3 Argument

}



      // Get Treaty By ID
gitTreatyById(id:any){
  var t = localStorage.getItem("adminToken");
  console.log(t);
  let httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' +t
  })
};
  return this._HttpClient.get(this.baseUrl+"Treaties/GetById?treatyId="+id ,httpOptions)
}

   // Get Token
    getTOKEN(){
      return localStorage.getItem('adminToken')
    }

}