import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9100/addFriend';

  constructor(public http: HttpClient) { }

  addFriend(friend: Friend): Observable<any> {
    return this.http.post(this.url, friend);
  }
}
