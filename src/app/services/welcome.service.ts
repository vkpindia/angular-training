import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  public getMessage(uname: string): string {
    let message = 'Welcome to ' + uname;
    return message;
  }
}
