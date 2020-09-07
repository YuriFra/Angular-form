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
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.compose([Validators.pattern('(32)[0-9]{9}')])])
    });
  }
}
