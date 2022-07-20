import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CfService } from '../cf.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  allUser : any;
  isEdit = false;
  addNewUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    password: new FormControl(''),
    id : new FormControl ('')
  });
  user: any;
  
  
  
  constructor(private cfservice : CfService) { } 

  ngOnInit(): void {
    this.getLatestUser();
  }

  onSubmit(formObj : any){
    console.log(formObj);
    this.cfservice.CreateUser(formObj).subscribe((_Response)=>{
      this.getLatestUser();

      this.addNewUser = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        number: new FormControl(''),
        password: new FormControl(''),
        id : new FormControl('')
      });
    })
  }


  getLatestUser(){ 
    this.cfservice.getAllUser().subscribe((Response)=>{
      this.allUser = Response
    })
  }

  edituser(user : any){
    this.user = user;
    this.isEdit = true;

    this.addNewUser.patchValue({
    name : user.name,
    email : user.email,
    number : user.number,
    password : user.password,
    id : user.id
  })
    }

  deleteuser(user : any){
    this.cfservice.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    console.log(this.addNewUser.value);
    this.cfservice.updateUser(this.addNewUser.value).subscribe(()=>{
      this.getLatestUser();
      this.addNewUser = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        number: new FormControl(''),
        password: new FormControl(''),
        id : new FormControl('')
      });
    })
  }
}
