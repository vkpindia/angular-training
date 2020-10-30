import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  public uname: string;
  public email: string;
  public phone: string;
  public pass: string;

  constructor() { }

  ngOnInit(): void {
  }


  public onFormSubmit(f: NgForm): void {
    console.log('form Data', f.value);
  }
}
