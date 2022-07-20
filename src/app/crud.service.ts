import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private _http:HttpClient) { }

  CreateUser(user : any){
    return this._http.post("http://localhost:3000/crud", user);
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/crud");
  }
  updateUser(user : any){
    return this._http.put("http://localhost:3000/crud/"+user.id, user);
  }
  deleteUser(user : any){
    return this._http.delete("http://localhost:3000/crud/"+user.id);
  }
}
