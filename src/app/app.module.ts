import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './layout/body/body.component';
import { SidenavComponent } from './layout/component/sidenav/sidenav.component';

import { StatisticsComponent } from './layout/component/statistics/statistics.component';
import { PagesComponent } from './layout/component/pages/pages.component';
import { MediaComponent } from './layout/component/media/media.component';
import { SettingsComponent } from './layout/component/settings/settings.component';
import { SublevelMenuComponent } from './layout/component/sidenav/sublevel-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotComponent } from './not/not.component';
import { ForgetComponent } from './login/forget/forget.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './layout/dashboard/dashboard.component';



import { VoitureComponent } from './layout/component/vecules/voiture/voiture.component';
import { CamionComponent } from './layout/component/vecules/camion/camion.component';

import { ListComponent } from './layout/component/administration/list/list.component';
import { CreateComponent } from './layout/component/administration/list/create/create.component';
import { AccessComponent } from './layout/component/administration/access/access.component';
import { ParamsComponent } from './layout/component/params/params.component';
import { HeaderComponent } from './layout/header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    LoginComponent,
    SignupComponent,
    NotComponent,
    ForgetComponent,
    DashboardComponent,
    ListComponent,
    VoitureComponent,
    CamionComponent,
    CreateComponent,
    AccessComponent,
    ParamsComponent,
    HeaderComponent,
    


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OverlayModule,
    CdkMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


