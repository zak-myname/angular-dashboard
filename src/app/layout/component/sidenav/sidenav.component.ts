import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { SerService } from 'src/app/services/user/ser.service';
import { Router } from '@angular/router';
interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }


  constructor(public ser: SerService, public router: Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }


  toggLeCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

  /*TESTER LE ROLE DE ETULISATEUR AVEC LES ROLES DE MENU*/
  usr = this.ser.verifi();
  test(data: any) {
    if (data.roles) {
      if (data.roles.includes(this.usr.role)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routerlink) ? "active" : "";
  }

  shrinkItems(item: INavbarData): void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded =false;
        }
      }
    }
  }

}
