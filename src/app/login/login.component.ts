import { Component, OnInit } from '@angular/core';
import { SerService } from '../services/user/ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user ={
    email : "",
    pass : ""
  };
  r : any;
  add(){
    this.ser.log(this.user)
    .subscribe(
      res=>{
        this.r = res;
        if(this.r.reponse){
          localStorage.setItem("token",JSON.stringify(this.r.token));
          localStorage.setItem("user",JSON.stringify(this.r.user));
          this.router.navigate(["dashboard"]);
        }else{
          alert(this.r.message)
        }
      },
      err=>{
        console.log(err);
      }
      )
  };
  constructor(public ser:SerService ,private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigate(["dashboard"]);
    }
  }
}