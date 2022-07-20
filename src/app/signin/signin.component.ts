import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 public signinForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit( ): void {
    this.signinForm = this.formBuilder.group({ 
      name:[''],
      email:[''],
      username:[''],
      Password:[''],
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signin",this.signinForm.value).subscribe(_res=>{
      alert("Registration Success"); 
      this.signinForm.reset(); 
      this.router.navigate(['login']); 

    })
  }
}


