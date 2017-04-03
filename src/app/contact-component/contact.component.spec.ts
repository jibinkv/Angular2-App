import { TestBed, async } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('Testing ContactComponent', () => {

	beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [
	    ContactComponent
	  ],
	}).compileComponents();
	}));

	it('should create the component', async(() => {
		const fixture = TestBed.createComponent(ContactComponent);
		const comp = fixture.debugElement.componentInstance;
		expect(comp).toBeTruthy();
	}));
	
	describe('Testing DOM rendered', () => {
	let compiled;
		beforeEach(async(() => {
			const fixture = TestBed.createComponent(ContactComponent);
		    fixture.detectChanges();
		    compiled = fixture.debugElement.nativeElement;
		}));	

		it(`should have h1 tag as 'Contact' in it`, async(() => {
			expect(compiled.querySelector('h1').textContent).toContain('Contact');
		}));

		it('should have blurb', async(() => {
			let blurb = 'Hello world this is contact page!';
			expect(compiled.querySelector('div').textContent).toContain(blurb);
		}));

	});


});