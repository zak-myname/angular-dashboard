import { Component, OnInit } from '@angular/core';
import { SerService } from '../services/user/ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user ={
    email : "",
    pass : "",
    cin : "" ,
    name : "",
    role : "",
    pf : ""
  };
  sign(){
    console.log(this.user)
    this.ser.sign(this.user)
    .subscribe(
      res=>{
        this.user ={
          email : "",
          pass : "",
          cin : "" ,
          name : "",
          role : "" ,
          pf : ""
        };
        this.router.navigate(['login']);
      },
      err=>{
        console.log(err);
      }
      )
  };


  constructor(public ser:SerService , private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigate(["dashboard"]);
    }
  }

}
