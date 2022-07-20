import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  title = 'first-web';
  find: any;

  sayMessage() {
    alert(this.message);
  }
  message = 'registration Success';

  ABC = 'my first web page';

  fruits: string[] = ['Apple', 'Orange', 'Banana'];




  clg: any[] = [
    {
      'name': 'lib',
      "option": [{ "name": "CPP" }, { "name": "JAVA" }, { "name": "PHP" }]
    },
    {
      'name': 'course',
      "option": [{ "name": "BSC" }, { "name": "BSC[IT]" }, { "name": "BCA" }]
    },
    {
      'name': 'canteen',
      "option": [{ "name": "Soda" }, { "name": "Pizza" }]
    }
  ]


  myimage: string = "/assets/image";

  image: string = "/assets/image";





}  
