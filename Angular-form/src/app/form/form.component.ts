import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FormData: FormGroup;
  languages = [
    'HTML', 'CSS', 'Javascript', 'PHP', 'Python', 'Java'
  ];
  friendModel = new Friend('', '', '', '', '');
  urlGet = 'http://localhost:9100/allFriends';
  allFriends = this.friendService.getAllFriends(this.urlGet);

  constructor(private builder: FormBuilder, private friendService: FriendService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9,10}$')]),
      language: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:typedef
  submitData() {
    this.friendService.addFriend(this.FormData.value).subscribe(data => console.log(this.allFriends), error => console.log(error));
  }
}
