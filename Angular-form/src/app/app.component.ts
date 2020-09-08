import { Component } from '@angular/core';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friends book';
  urlGet = 'http://localhost:9100/allFriends';
  allFriends = this.friendService.getAllFriends(this.urlGet);

  constructor(private friendService: FriendService) {
  }

}
