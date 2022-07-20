import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  loginForm! :FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      email:[''],
      password:['']  
    }) 
  }
  logIn(){    
    this._http.get<any>("http://localhost:3000/signin").subscribe(res=>{
      console.log(res);      
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.Password === this.loginForm.value.password
           });
           console.log(user);           
           if(user){
            alert('login success');  
           this.loginForm.reset(); 
           this.router.navigate(['signin'])
           }else{
            alert("Users Not Found")            
           }
    }) 
  }
}
