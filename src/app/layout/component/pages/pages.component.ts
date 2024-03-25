import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from 'src/app/services/user/ser.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public ser:SerService,private router:Router) { }

  usr: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if(!(this.usr.role=='simpleUser')){
      this.router.navigate(["dashboard"]);
    }
  }

}
