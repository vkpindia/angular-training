import { Component, OnInit } from '@angular/core';
import { StudentT } from '../models/student-record.model';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})

export class PipesDemoComponent implements OnInit {

  public studentRecord: StudentT;

  constructor() { }

  ngOnInit(): void {
    this.studentRecord = {
      name: 'Ravi Kumar',
      course: 'Angular 10',
      email: 'RaVi123@Gmail.com',
      joiningDate: new Date('2018-02-15'),
      fee: 3500
    };
  }
}
