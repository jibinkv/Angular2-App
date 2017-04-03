import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared-components/shared.module';
import { HomeComponent } from './home-component/home.component';
import { MemberComponent } from './member-component/member.component';
import { MemberDetailsComponent } from './member-details-component/member-details.component';
import { ContactComponent } from './contact-component/contact.component';
import { AboutComponent } from './about-component/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberComponent,
    ContactComponent,
    AboutComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
