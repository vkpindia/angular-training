import { Component, OnInit } from '@angular/core';
import { users } from './user';
import { StudentT } from '../models/student.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  public users: Array<StudentT>;
  public tableHeader: Array<string>;
  public students: Array<any>;
  public userRecord: any;
  public min: number;
  public max: number;

  public startIndex: number;
  public endIndex: number;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
    this.students = [
      { name: 'Smith', sex: 'Male'},
      { name: 'Kelly', sex: 'Female'}
    ];
    this.startIndex = 0;
    this.endIndex = 5;
    /* this.userRecord = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org'
    };
    [['id', '1'], ['name', 'Lean Graham']]
    console.log(' this.userRecord', this.userRecord);

    for (const userKey in this.userRecord) {
      console.log('key', userKey);
      console.log('value', this.userRecord[userKey]);
    } */

    this.users = users;
    this.tableHeader = [
      'ID',
      'Name',
      'User Name',
      'Email',
      'Salary',
      'City',
      'Pincode',
      'Mobile',
      'Website'
    ];
  }

  public onDeleteUser(user: any): void {
    const userRecordIndex = this.users.findIndex(data => data.id === user.id);
    const isDeleteUser = confirm('Are you sure to delete this user?');
    if (isDeleteUser) {
      this.users.splice(userRecordIndex, 1);
    }
  }

  public showRecord(): void {
    this.startIndex = this.startIndex + 5;
    this.endIndex = this.endIndex + 5;
    if (this.startIndex >= this.users.length) {
      this.startIndex = 0;
      this.endIndex = 5;
    }
  }
}
