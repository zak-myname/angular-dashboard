import { Component, OnInit } from '@angular/core';
import { SerService } from '../../../../../services/user/ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public ser: SerService, private router: Router) { }

  user = {
    email: "",
    pass: "",
    cin: "",
    name: "",
    role: "",
    pf: ""
  };

  create() {
    this.ser.sign(this.user)
      .subscribe(
        res => {
          this.user = {
            email: "",
            pass: "",
            cin: "",
            name: "",
            role: "",
            pf: ""
          };
          this.router.navigate(['dashboard/access'],{queryParams: {id:res}});
        },
        err => {
          console.log(err);
        }
      )
  };
  usr: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if (!(this.usr.role == 'admin')) {
      this.router.navigate(["dashboard"]);
    }
  }
}
