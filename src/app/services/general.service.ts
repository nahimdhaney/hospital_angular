import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  _url ="http://localhost:8081/app"

  constructor(
    private http: HttpClient
  ) { 
    console.log("inicializing")

  }

  getHospital(){
      let header = new HttpHeaders().set('Type-content','application/json')
      
      return this.http.get(this._url+"/hospital",{
        headers:header
      });
  }
  getHospitalById(id: any){
    let header = new HttpHeaders().set('Type-content','application/json')
    
    return this.http.get(this._url+"/hospital/"+id,{
      headers:header
    });
}

  
}
