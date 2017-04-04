import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { ApiRequestService } from './api-requests.service/api-requests.service';
import { RepoSearchComponent } from '../repo-search-component/repo-search.component'
import { UserDetailsComponent } from '../user-details-component/user-details.component'

@NgModule({
	imports: [ CommonModule, RouterModule ],
	exports: [ 
				TopNavComponent, 
				RepoSearchComponent,
				UserDetailsComponent
			],
	declarations: [ 
					TopNavComponent, 
					RepoSearchComponent,
					UserDetailsComponent
				],
	providers: [ ApiRequestService ]
})

export class SharedModule { }