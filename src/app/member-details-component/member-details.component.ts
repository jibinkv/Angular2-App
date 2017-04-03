import { Component, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'member-details-form',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent {

	memberDetailsForm = {};
	
	@Input() member;

	contructor(){}
 }