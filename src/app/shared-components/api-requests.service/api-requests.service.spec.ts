import { TestBed, getTestBed, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, 
		 Response, ResponseOptions } from '@angular/http';

import { ApiRequestService } from './api-requests.service';
import { mockUserDetails, mockRepos } from './api-requests.data';


describe('Testing ApiRequestsServices', () => {
	let testbed, backend, service;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		  providers: [
		  				MockBackend, 
		  				BaseRequestOptions,
		  				ApiRequestService,
					  	{
				          provide: Http, 
				          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
				            return new Http(backend, defaultOptions);
				          }, 
				          deps: [
				          			MockBackend, 
				          			BaseRequestOptions
				          		]
				        },  
			  ],
			}).compileComponents();

		testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(ApiRequestService);        
        spyOn(service, 'makeHttpRequest').and.callThrough();
	}));

	function setupConnections(url, backend: MockBackend, options: any) {
	    backend.connections.subscribe((connection: MockConnection) => {
	        if (connection.request.url === url) {
	            const responseOptions = new ResponseOptions(options);
	            const response = new Response(responseOptions);
	            connection.mockRespond(response);
	        }
	    });
	}

  it('getUserDetails() should recive github user details', () => {
  		let user: Response;
  		const url: string = 'https://api.github.com/users/jibinkv?format=json';
  		const userName: string = 'jibinkv';

  		setupConnections(url, backend, {
            body: mockUserDetails
        });

        service.getUserDetails(userName).subscribe((response) => {
           user = response;              
        });

        expect(service.makeHttpRequest).toHaveBeenCalled();
        expect(user[0]).toBe(mockUserDetails[0]);
        expect(user[0].login).toBe('jibinkv');
        expect(user[0].name).toBe('Jibin Varghese');
        expect(user[0].html_url).toBe('https://github.com/jibinkv');
  });

  it('getUserRepos() should return repos for the user', () => {
  		let repos: Response;
  		const url: string = 'https://api.github.com/users/jibinkv/repos?format=json';
  		const userName: string = 'jibinkv';

  		setupConnections(url, backend, {
            body: mockRepos
        });

        service.getUserRepos(userName).subscribe((response) => {
           repos = response;              
        });

        expect(service.makeHttpRequest).toHaveBeenCalled();
        expect(repos[0]).toBe(mockRepos[0]);
        expect(repos[0].name).toBe('Angular1.5ComponentApp');
        expect(repos[0].full_name).toBe('jibinkv/Angular1.5ComponentApp');
        expect(repos[0].html_url).toBe('https://github.com/jibinkv/Angular1.5ComponentApp');	
  });
});