import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from 'src/app/services/user/ser.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public ser:SerService,private router:Router) { }
  usr: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if(!(this.usr.role=='admin' || this.usr.role=='simpleUser')){
      this.router.navigate(["dashboard"]);
    }
  }
}
