import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddFriendService } from '../addFriend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  languages = [
    'HTML', 'CSS', 'Javascript', 'PHP', 'Python', 'Java'
  ];
  friendModel = new Friend('', '', '', '', '');

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private addFriend: AddFriendService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8,10}$')]),
      language: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:typedef
  submitData() {
    this.addFriend.addFriend(this.FormData.value).subscribe(data => 'success', error => 'error');
  }
}
