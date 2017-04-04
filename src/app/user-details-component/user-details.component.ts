import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiRequestService } from '../shared-components/api-requests.service/api-requests.service'

@Component({
  selector: 'git-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  private user: Observable<any>;
  private noUserResults: Boolean = false;

  constructor(private apiRequestService: ApiRequestService) {
  }

  showUserDetails(username: string){
    this.apiRequestService.getUserDetails(username)
        .subscribe(
          data => {
                    this.user = data;
                    this.noUserResults = false;
                  },
          err => {
                    this.user = null;
                    this.noUserResults = true;
                 },
          () => {
                  console.log('finished')
                }
        );
  }

  }
