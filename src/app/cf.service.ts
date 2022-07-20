import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CfService {


  constructor( private http : HttpClient) { };

  CreateUser(user : any){
    return this.http.post("http://localhost:3000/cf", user);
  }
  getAllUser(){
    return this.http.get("http://localhost:3000/cf");
  }
  updateUser(user : any){
    return this.http.put("http://localhost:3000/cf/"+user.id, user);
  }
  deleteUser(user : any){
    return this.http.delete("http://localhost:3000/cf/"+user.id);
  }
  
  }



