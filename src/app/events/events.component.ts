import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public uname: string;
  public message: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getMessage(): void {
      this.message = `Welcome to ${this.uname}`;
  }

}
