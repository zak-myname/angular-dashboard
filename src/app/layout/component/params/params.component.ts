import { Component, OnInit } from '@angular/core';
import { SerService } from 'src/app/services/user/ser.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  constructor(public ser:SerService) { }

  add_type_access(){
    if(this.access_type!=""){
      this.ser.add_type_access(this.access_type);
    }
  }
  access_type = "";
  ngOnInit(): void {
  }

}
