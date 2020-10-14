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
  public userRecord: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
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
      'name',
      'username',
      'email',
      'city',
      'zipcode',
      'phone',
      'website'
    ];
  }

  public onDeleteUser(user: any): void {
    const userRecordIndex = this.users.findIndex(data => data.id === user.id);
    const isDeleteUser = confirm('Are you sure to delete this user?');
    if (isDeleteUser) {
      this.users.splice(userRecordIndex, 1);
    }
  }
}
