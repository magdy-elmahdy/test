import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Treaty1Component } from './components/treaty1/treaty1.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { SlipComponent } from './components/slip/slip.component';
import { ReportsComponent } from './components/reports/reports.component';
import { Proposal9Component } from './components/proposal9/proposal9.component';
import { Proposal12Component } from './components/proposal12/proposal12.component';
import { QoutationDetailsComponent } from './components/qoutation-details/qoutation-details.component';
import { PolicesComponent } from './components/polices/polices.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { PropasalFormsComponent } from './components/propasal-forms/propasal-forms.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AppFormObliskyComponent } from './components/obelisky/app-form-oblisky/app-form-oblisky.component';
import { Pro9ObeliskyComponent } from './components/obelisky/pro9-obelisky/pro9-obelisky.component';
import { Pro12ObeliskyComponent } from './components/obelisky/pro12-obelisky/pro12-obelisky.component';
import { QouDetailsObeliskyComponent } from './components/obelisky/qou-details-obelisky/qou-details-obelisky.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckOutCiComponent } from './components/obelisky/check-out-ci/check-out-ci.component';


const routes: Routes = [
  {path:"", redirectTo:"CiApplicationForm", pathMatch: 'full'},
  {path:"CiApplicationForm",  component:AppFormObliskyComponent},
  {path:"pro9OCi/:id", component:Pro9ObeliskyComponent},
  {path:"pro12Ci/:id", component:Pro12ObeliskyComponent},
  {path:"quoDetailsCi", component:QouDetailsObeliskyComponent},
  {path:"checoutCi", component:CheckOutCiComponent},
  {path:"treaty/:id",canActivate:[AuthGuard] , component:Treaty1Component},
  {path:"treaty",canActivate:[AuthGuard] , component:Treaty1Component},
  {path:"application-form/:id",canActivate:[AuthGuard] , component:ApplicationFormComponent},
  {path:"slip",canActivate:[AuthGuard] , component:SlipComponent},
  {path:"reports",canActivate:[AuthGuard] , component:ReportsComponent},
  {path:"proposal9/:id",canActivate:[AuthGuard] ,  component:Proposal9Component},
  {path:"proposal12/:id",canActivate:[AuthGuard] , component:Proposal12Component},
  {path:"quotationDetails",canActivate:[AuthGuard] , component:QoutationDetailsComponent},
  {path:"chechOut",canActivate:[AuthGuard] , component:CheckOutComponent},
  {path:"quotations",canActivate:[AuthGuard] , component:QuotationsComponent},
  {path:"polices",canActivate:[AuthGuard] , component:PolicesComponent},
  {path:"proposalForms",canActivate:[AuthGuard] , component:PropasalFormsComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
