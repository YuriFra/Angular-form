import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../form.service';
import {Friend} from '../friend';

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

  constructor(private builder: FormBuilder, private form: FormService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8,10}$')]),
      language: new FormControl('', [Validators.required])
    });
  }
}
