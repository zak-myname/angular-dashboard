import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from 'src/app/services/user/ser.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(public ser:SerService,private router:Router) { }

  usr: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if(!(this.usr.role=='admin')){
      this.router.navigate(["dashboard"]);
    }
  }



}
