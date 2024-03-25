import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverLay(window.innerWidth)
  }
  selectedLanguage: any;
  languages = Languages;
  notifications = notifications;
  userItems = userItems

  ngOnInit(): void {
    this.checkCanShowSearchAsOverLay(window.innerWidth);
    this.selectedLanguage = this.languages[0]
  }
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  
  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }


  checkCanShowSearchAsOverLay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false
    }
  }
}
