import { TestBed, async } from '@angular/core/testing';

import { MemberComponent } from './member.component';
import { MemberDetailsComponent } from '../member-details-component/member-details.component';

describe('Testing MemberComponent', () => {

	beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [
	    MemberComponent,
	    MemberDetailsComponent    
	  ],
	}).compileComponents();
	}));

	it('should create the component', async(() => {
		const fixture = TestBed.createComponent(MemberComponent);
		const comp = fixture.debugElement.componentInstance;
		expect(comp).toBeTruthy();
	}));
	
	describe('Testing DOM rendered', () => {
	let compiled;
	beforeEach(async(() => {
		const fixture = TestBed.createComponent(MemberComponent);
	    fixture.detectChanges();
	    compiled = fixture.debugElement.nativeElement;
	}));	

	it(`should have h1 tag as 'Member' in it`, async(() => {
		expect(compiled.querySelector('h1').textContent).toContain('Member');
	}));

	it('should have blurb', async(() => {
		let blurb = 'Hello world this is member page!';
		expect(compiled.querySelector('div').textContent).toContain(blurb);
	}));
	});

});