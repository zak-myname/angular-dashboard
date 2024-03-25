import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from 'src/app/services/user/ser.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {

  constructor(public ser:SerService,private router:Router) { }

  usr: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if(!(this.usr.role=='user' || this.usr.role=='validateur')){
      this.router.navigate(["dashboard"]);
    }
  }

}
