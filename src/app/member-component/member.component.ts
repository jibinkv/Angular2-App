import { Component, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'member-form',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
	currentMember = {
		"Id": "1",
        "Address": "2334 East St",
        "BirthDate": "03-05-1990",
        "EmailAddress": "abc@abc.com",
        "Gender": "M",
        "Occupation": "Manager",
        "MaritalStatus": "Single",
	    "FirstName": "Foo",
	    "Initials": "F",
	    "LastName": "Blah",
	    "MiddleName": "",
	    "NickName": "",
	    "Prefix": "",
	    "Suffix": "",
	    "Title": "",
	    "Phone": "3454565646"
	}

 }