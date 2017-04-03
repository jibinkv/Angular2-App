import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Testing HomeComponent', () => {

	beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [
	    HomeComponent
	  ],
	}).compileComponents();
	}));

	it('should create the component', async(() => {
		const fixture = TestBed.createComponent(HomeComponent);
		const comp = fixture.debugElement.componentInstance;
		expect(comp).toBeTruthy();
	}));
	
	describe('Testing DOM rendered', () => {
	let compiled;
		beforeEach(async(() => {
			const fixture = TestBed.createComponent(HomeComponent);
		    fixture.detectChanges();
		    compiled = fixture.debugElement.nativeElement;
		}));	

		it(`should have h1 tag as 'Home' in it`, async(() => {
			expect(compiled.querySelector('h1').textContent).toContain('Home');
		}));

		it('should have blurb', async(() => {
			let blurb = 'Hello world this is home page!';
			expect(compiled.querySelector('div').textContent).toContain(blurb);
		}));

	});


});