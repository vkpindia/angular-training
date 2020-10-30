import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Welcome to {{uname}}</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent implements OnInit {

  public uname: string;
  public students: any;
  public studentDetails: Array<any>;
  public tableHeader: Array<any>;
  public empName: string;

  ngOnInit(): void {
    this.uname = 'Scott';
    this.students = {
      name: 'Smith',
      sClass: 'B.tech A',
      course: 'Angular 10'
    };

    this.tableHeader = [
      'Name',
      'Class',
      'Course'
    ];

    this.studentDetails = [
      {
        name: 'Smith',
        sClass: 'B.tech A',
        course: 'Angular 10'
      },
      {
        name: 'Scott',
        sClass: 'B.tech A',
        course: 'Angular 10'
      },
      {
        name: 'Janson',
        sClass: 'B.tech A',
        course: 'Angular 10'
      },
      {
        name: 'Deniel',
        sClass: 'B.tech A',
        course: 'Angular 10'
      },
      {
        name: 'Ashok',
        sClass: 'B.tech A',
        course: 'Angular 10'
      }
    ];
  }
}
