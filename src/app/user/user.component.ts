import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-11-18
   * @memberof UserComponent
   */
  public getUser(): void {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.userList = data;
        console.log('this.userList', this.userList);
      }
    });
  }

}
