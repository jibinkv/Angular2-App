import { TestBed, async } from '@angular/core/testing';

import { MemberDetailsComponent } from './member-details.component';

describe('Testing MemberDetailsComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		  declarations: [
		    MemberDetailsComponent    
		  ],
		}).compileComponents();
	}));

	describe('Testing Component', () => {
		let fixture, compiled, comp;

		const memberMock = {
			"Id": "1",
	        "Address": "2334 East St",
	        "EmailAddress": "abc@abc.com",
		    "FirstName": "Foo",
		    "LastName": "Blah",
		    "Phone": "3454565646"
		};

		beforeEach(async(() => {
			fixture = TestBed.createComponent(MemberDetailsComponent);
			comp = fixture.debugElement.componentInstance;
			comp.member = memberMock;
		    fixture.detectChanges();
		    compiled = fixture.debugElement.nativeElement;
		}));

		it('should create the component', async(() => {
			expect(comp).toBeTruthy();
		}));

		it('should render member details', async (() => {
			let memberDetails = compiled.querySelectorAll('div');
			expect(memberDetails[0].innerText).toContain(memberMock.FirstName);
			expect(memberDetails[2].innerText).toContain(memberMock.LastName);
			expect(memberDetails[4].innerText).toContain(memberMock.Address);
			expect(memberDetails[6].innerText).toContain(memberMock.EmailAddress);
			expect(memberDetails[8].innerText).toContain(memberMock.Phone);
		}));
	});
	


});