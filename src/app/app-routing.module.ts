import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';
import { MemberComponent } from './member-component/member.component';
import { ContactComponent } from './contact-component/contact.component';

const appRoutes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }