import { TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('Testing AboutComponent', () => {

	beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [
	    AboutComponent
	  ],
	}).compileComponents();
	}));

	it('should create the Component', async(() => {
		const fixture = TestBed.createComponent(AboutComponent);
		const comp = fixture.debugElement.componentInstance;
		expect(comp).toBeTruthy();
	}));
	
	describe('Testing DOM rendered', () => {
	let compiled;
		beforeEach(async(() => {
			const fixture = TestBed.createComponent(AboutComponent);
		    fixture.detectChanges();
		    compiled = fixture.debugElement.nativeElement;
		}));	

		it(`should have h1 tag as 'About' in it`, async(() => {
			expect(compiled.querySelector('h1').textContent).toContain('About');
		}));

		it('should have blurb', async(() => {
			let blurb = 'Hello world this is about page!';
			expect(compiled.querySelector('div').textContent).toContain(blurb);
		}));

	});


});