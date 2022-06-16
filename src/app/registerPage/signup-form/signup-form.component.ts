import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBulider: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBulider.group({
      name: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.form.getRawValue())
  }
}
