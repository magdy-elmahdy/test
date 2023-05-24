import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { MaterialsModule } from './materials/materials.module';
import { Treaty1Component } from './components/treaty1/treaty1.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { SlipComponent } from './components/slip/slip.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { Proposal9Component } from './components/proposal9/proposal9.component';
import { Proposal12Component } from './components/proposal12/proposal12.component';
import { RouterModule } from '@angular/router';
import { QoutationDetailsComponent } from './components/qoutation-details/qoutation-details.component';
import { PolicesComponent } from './components/polices/polices.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { PropasalFormsComponent } from './components/propasal-forms/propasal-forms.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppFormObliskyComponent } from './components/obelisky/app-form-oblisky/app-form-oblisky.component';
import { Pro9ObeliskyComponent } from './components/obelisky/pro9-obelisky/pro9-obelisky.component';
import { Pro12ObeliskyComponent } from './components/obelisky/pro12-obelisky/pro12-obelisky.component';
import { QouDetailsObeliskyComponent } from './components/obelisky/qou-details-obelisky/qou-details-obelisky.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckOutCiComponent } from './components/obelisky/check-out-ci/check-out-ci.component';

export function playerFactory(){
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    Treaty1Component,
    ApplicationFormComponent,
    SlipComponent,
    ReportsComponent,
    Proposal9Component,
    Proposal12Component,
    QoutationDetailsComponent,
    PolicesComponent,
    QuotationsComponent,
    PropasalFormsComponent,
    LoginComponent,
    FooterComponent,
    AppFormObliskyComponent,
    Pro9ObeliskyComponent,
    Pro12ObeliskyComponent,
    QouDetailsObeliskyComponent,
    NotFoundComponent,
    CheckOutComponent,
    CheckOutCiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    LottieModule.forRoot({player:playerFactory}),
    FontAwesomeModule,
    PdfViewerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
