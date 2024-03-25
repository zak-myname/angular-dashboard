import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './layout/component/products/products.component';
import { StatisticsComponent } from './layout/component/statistics/statistics.component';
import { CoupensComponent } from './layout/component/coupens/coupens.component';
import { PagesComponent } from './layout/component/pages/pages.component';
import { MediaComponent } from './layout/component/media/media.component';
import { SettingsComponent } from './layout/component/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { AuthGuard } from './guard/auth.guard';
import { NotComponent } from './not/not.component';
import { ForgetComponent } from './login/forget/forget.component';

import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { VoitureComponent } from './layout/component/vecules/voiture/voiture.component';
import { CamionComponent } from './layout/component/vecules/camion/camion.component';
import { ListComponent } from './layout/component/administration/list/list.component';
import { CreateComponent } from './layout/component/administration/list/create/create.component';
import { AccessComponent } from './layout/component/administration/access/access.component';
import { ParamsComponent } from './layout/component/params/params.component';
import { ProductsModule } from './layout/component/products/products.module';




const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "forget", component: ForgetComponent },
  { path: "sign", component: SignupComponent },

  // layout 
  {
    path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent, children: [

      { path: 'voiture', component: VoitureComponent },
      { path: 'params', component: ParamsComponent },
      { path: 'camion', component: CamionComponent },
      { path: 'utilisateur', component: ListComponent },
      { path: 'access', component: AccessComponent },
      { path: 'create', component: CreateComponent },

      { path: 'products', loadChildren: () => import('./layout/component/products/products.module').then(m => m.ProductsModule) },
      { path: 'statistics', component: StatisticsComponent },
      { 
        path: 'coupens',
        loadChildren: () => import('./layout/component/coupens/coupens.module').then(m => m.CoupensModule) },
      { path: 'pages', component: PagesComponent },
      { path: 'media', component: MediaComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

  { path: "**", component: NotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
