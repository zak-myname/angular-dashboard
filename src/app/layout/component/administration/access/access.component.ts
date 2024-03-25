import { Component, OnInit } from '@angular/core';
import { SerService } from '../../../../services/user/ser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(public ser: SerService, private router: Router, private route: ActivatedRoute) { }
  list() {
    this.router.navigate(["dashboard/utilisateur"]);
  };



  change(data: any, b: any) {
    data.c = b;
    data.r = b;
    data.u = b;
    data.d = b
  }

  accessAdd = {
    idUser: "",
    access: []
  };


  up_access(data: any) {
    if (this.user._id != "65c1fa4a832f59c9f0f6d7f8") {
      if (this.access.idUser == "65c1fa4a832f59c9f0f6d7f8" && this.access.idUser != this.user._id) {
        console.log("add")
        this.accessAdd.idUser = this.id;
        this.accessAdd.access = data;
        this.ser.addAccess(this.accessAdd).subscribe(
          res => {
            this.id = this.user._id
            this.get_usr_ser(this.id)
          },
          err => {
            console.log(err)
          }
        );

      } else if (this.access.idUser == this.user._id) {
        console.log("put")
        this.access.access = data;
        this.ser.putAccess(this.access).subscribe(
          res => {
            this.get_usr_ser(this.id)
          },
          err => {
            console.log(err)
          }
        )
      }
    }
  }

  user: any = {
    _id: ""
  };  // access user
  usr: any;  // utilisateur
  access: any = [{}];
  id: any;
  ngOnInit(): void {
    this.usr = this.ser.verifi();
    if (!(this.usr.role == 'admin')) {
      this.router.navigate(["dashboard"]);
    }

    this.id = this.route.snapshot.queryParams['id'];
    if (this.id == undefined) {
      this.id = "65c1fa4a832f59c9f0f6d7f8";
    }
    this.get_usr_ser(this.id)

  }

  get_usr_ser(id: any) {
    // get user with id
    this.ser.getId(id).subscribe(
      res => {
        this.user = res;
      },
      err => {
        console.log(err)
      }
    );
    // get access of user
    this.ser.getAccess(id).subscribe(
      res => {
        this.access = res;
      },
      err => {
        console.log(err);
      }
    );
  }


}

