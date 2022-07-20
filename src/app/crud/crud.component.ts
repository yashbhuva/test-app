import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  allUser: any;
  isEdit = false;
  userobj={
    Name:'',
    Mobile:'',
    Email:'',
    Password:'',
    id:''
  }

  constructor( private crudservice : CrudService) { }

  ngOnInit(): void{
    this.getLatestUser();
  } 


  addUser(formObj: any){
    console.log(formObj);
    this.crudservice.CreateUser(formObj).subscribe((_Response)=>{
      this.getLatestUser();
      this.userobj={
        Name:'',
        Mobile:'',
        Email:'',
        Password:'',
        id:''
      }
    })
  }


  getLatestUser(){ 
    this.crudservice.getAllUser().subscribe((Response)=>{
      this.allUser = Response
    })
  }

  edituser(user : any){
    this.isEdit = true;
    this.userobj = user;
  }

  deleteuser(user: any){
    this.crudservice.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.crudservice.updateUser(this.userobj).subscribe(()=>{
      this.getLatestUser();
      this.userobj={
        Name:'',
        Mobile:'',
        Email:'',
        Password:'',
        id:''
      }
      
    })
  }
  
  
}
