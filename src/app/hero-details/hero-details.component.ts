import { Component, OnInit } from '@angular/core';
import { users } from './user';
import { StudentT } from '../models/student.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  public users: Array<StudentT>;
  public tableHeader: Array<string>;

  constructor() { }

  ngOnInit(): void {

    this.users = users;
    this.tableHeader = [
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
