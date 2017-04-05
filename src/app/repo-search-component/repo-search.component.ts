import { Component, Input } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiRequestService } from '../shared-components/api-requests.service/api-requests.service'

@Component({
  selector: 'repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})

export class RepoSearchComponent implements OnChanges {
  private repos: Observable<any>;
  private noRepoResults: Boolean = false;

  @Input() user;

  ngOnChanges(changes: SimpleChanges) {
      let user = changes['user'].currentValue;
      if(user){
        this.getUserRepos(this.user.login);
      }
  }

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
