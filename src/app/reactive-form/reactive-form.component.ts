import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public empForm: FormGroup;
  public sumbmitted = false;
  public emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public phonePattern: string = '[0-9]{10}';

  constructor() { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(this.phonePattern)]),
      pass: new FormControl(null, Validators.required),
      address: new FormGroup({
      })
    });

    this.empForm.get('name').valueChanges.subscribe(value => {
      console.log('value', value);
    });

    this.empForm.get('name').setValue('Ashok');
    const empDetails = {
      name: 'Ashok',
      email: 'ashok@gmail.com',
      phone: 1020987867,
      pass1: '12345'
    };

    this.empForm.patchValue(empDetails);
  }

  get f() {
    return this.empForm.controls;
  }

  onFormSubmit(): void {
    this.sumbmitted = true;

    if (this.empForm.invalid) {
      return;
    }

    console.log('empForm', this.empForm.value);

  }

}
