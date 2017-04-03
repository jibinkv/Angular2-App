import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
	menuItems = [
		{
			name:'Home',
			url: 'home'
		},
		{
			name: 'About',
			url: 'about'
		},
		{
			name: 'Member',
			url: 'member'
		},
		{
			name: 'Contact',
			url: 'contact'
		},
	];

	ngOnInit() {}

	constructor() {}
	
}
