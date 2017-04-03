import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopNavComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

   it('should create the Component', async(() => {
    const fixture = TestBed.createComponent(TopNavComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  describe('testing topNav DOM components', () => {
  	let compiled;
  	beforeEach(async(() => {
  		const fixture = TestBed.createComponent(TopNavComponent);
	    fixture.detectChanges();
	    compiled = fixture.debugElement.nativeElement;
  	}));

  	it('should render Logo', async(() => {
  		expect(compiled.querySelector('h2').textContent).toContain('Angular2.0 App');
  	}));

  	it('should render navigation menu to DOM', async(() => {
	    let navigations = compiled.querySelectorAll('li');
	    expect(navigations.length).toBeGreaterThan(1);
	    expect(compiled.querySelector('ul').textContent).toContain('Home');
	    expect(compiled.querySelector('ul').textContent).toContain('About');
	    expect(compiled.querySelector('ul').textContent).toContain('Member');
	    expect(compiled.querySelector('ul').textContent).toContain('Contact');
  	}));
  });

});
