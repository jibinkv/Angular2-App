import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiRequestService } from '../shared-components/api-requests.service/api-requests.service'

@Component({
  selector: 'repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})

export class RepoSearchComponent {
  private repos: Observable<any>;
  private noRepoResults: Boolean = false;

  constructor(private apiRequestService: ApiRequestService) {
  }

  getUserRepos(username: string) {
       this.apiRequestService.getUserRepos(username)
          .subscribe(
          data => {
                    this.repos = data, 
                    this.noRepoResults = false
                  },
          err =>  {
                    this.repos = null,
                    this.noRepoResults = true
                  },
          () => {
                  console.log('finished')
                }
        );
  }

  }
