import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestService {
  constructor(private http: Http) {}

  getUserDetails(username: string) {
    return this.makeHttpRequest(`users/${username}`);
  }

  getUserRepos(username: string) {
    return this.makeHttpRequest(`users/${username}/repos`);
  }

  private makeHttpRequest(path: string) {
    let params = new URLSearchParams();
    params.set('format', 'json');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((response) => response.json());
  }
}