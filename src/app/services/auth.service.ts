import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="http://97.74.82.75:4033/api/";
  constructor(public _httpClient:HttpClient) { }


              //Applicaion Form 

  applicationForm(keyWord:any){
    // var t = localStorage.getItem("adminToken");
    var t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb3JkYW4gWFlaIiwianRpIjoiN2FmZmI5OWUtNzA4Ni00MTQyLWFiNDItMmE4MjQ2OWIyOWZiIiwidWlkIjoiMDQ4MjcwYzYtMTZmZC00ZTZiLTg5NjgtNjNhZjM5ZGU5NzYzIiwibmFtZSI6IkpvcmRhbiBYWVoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb21wYW55IiwiZXhwIjoxNzE1NzY4NzI3LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.3z7QulsrQ3OzHzfNQGRGwzT-A_FsqTHyXlPDTyH6p64'
    let httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +t
    })
  };
    return this._httpClient.post(this.baseUrl+'CI-QS/Quotations/AddNewQuotation',JSON.parse(keyWord) ,httpOptions )
  }


  // download Files

  saveFile(fileName:any){
    var t = localStorage.getItem("adminToken");
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' +t
      })
    };

    return this._httpClient.get("file:///E:/"+fileName,{observe:'response',
  responseType:'blob',headers:httpOptions.headers})
  }


    //LOG IN FORM
    logInForm(keyWord:any){
      return this._httpClient.post(this.baseUrl+'Auth/Admin/Login' ,keyWord );      
    }

    // Check Admin Logging 
    isLoggedIn(){
      return !!localStorage.getItem('adminToken')
    }
    // Get Token
    getTOKEN(){
      return localStorage.getItem('adminToken')
    }


    addNewQualifications(Model:any){
      let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
      headers.append('Access-Control-Allow-Credentials', 'true');
      
      // const config = { //get
      //   headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")
      // }
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this._httpClient.post('https://c464-197-36-247-88.eu.ngrok.io/Certification/CreateCertification', Model,config)
    }
}
