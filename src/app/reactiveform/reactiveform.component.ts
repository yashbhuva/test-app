import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {

  title = 'Angular Reactive Form';

  loginform = new FormGroup({

    user: new FormControl(''),
    password: new FormControl(''),

  })
  onSubmit() {
    console.log(this.loginform.value);
  
    localStorage.setItem('form-data',JSON.stringify(this.loginform.value));
  } 
  
  Submit() {
    alert(this.Message);
  }
  Message = 'Login Success';
}
