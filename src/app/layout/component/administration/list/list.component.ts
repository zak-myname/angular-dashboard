import { Component, OnInit } from '@angular/core';
import { SerService } from '../../../../services/user/ser.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  hero: any;
  constructor(public ser: SerService, private router: Router) { }

  user1: any;

  create() {
    this.router.navigate(["dashboard/create"]);
  }

  access(id: any) {
    console.log(id)
    this.router.navigate(["dashboard/access"], { queryParams: { id: id } });
  }

  acces: any;
  token: any;
  ngOnInit(): void {

    this.user1 = this.ser.verifi();
    if (this.user1.role == 'admin') {
      this.token = localStorage.getItem("token")

      this.ser.getall({ token: JSON.parse(this.token) }).subscribe((res: HttpResponse<any>) => {
        this.hero = res.body;
      },
        err => {
          console.log(err)
        }
      )
    } else {
      this.router.navigate(["dashboard"]);
    }
    this.acces = this.ser.getAccess(this.user1._id).subscribe(
      res => {
        this.acces = res;
        if (this.acces) {
          this.acces = this.acces.access;
          for (let i = 0; i < this.acces.length; i++) {
            if (this.acces[i].label == "ges de utul") {
              this.acces = this.acces[i];
              break;
            }
          }
        }
      },
      err => {
        console.log(err)
      }
    );
  }

  del(_id: any) {
    this.ser.delId(_id)
      .subscribe(
        res => {
          this.ngOnInit()
        },
        err => {
          console.log(err)
        }
      )
  }

  up(hero: any) {
    this.ser.putId(hero)
      .subscribe(res => {
        this.ngOnInit()
      },
        err => {
          console.log(err)
        })
  }

}
