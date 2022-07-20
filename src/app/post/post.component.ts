import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formGrp: FormGroup;
  pinCode: any;
  result:any=[];


  constructor( formBuilder : FormBuilder, private http : HttpClient) { 

    this.pinCode = 0;
    this.formGrp = formBuilder.group({
      pincdctrl: ['', [Validators.required, Validators.pattern("[0-9]{6}")]]
    })
  }

  ngOnInit(): void {
    
  }
  
  doSubmit() {
    
    this.http.get<any>("https://api.postalpincode.in/pincode/"+ this.formGrp.value.pincdctrl).subscribe(res=>{
      this.result = res[0];
      console.log(this.result.PostOffice,res);
      
      const pinCode = res.find((a:any)=>{
        return a.pinCode === this.formGrp.value.pinCode
           });

           console.log(pinCode);           
           if(pinCode){
          //  alert('valid pin');
           this.formGrp.reset(); 
           }else{
          //  alert("invalid pin")            
           }
    })
  }
}
