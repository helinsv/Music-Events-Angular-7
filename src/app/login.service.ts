import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor() { }

  LogIn(username: string, password: string){
    if (username && password) {
      this.user = new User (username, password);
      console.log('user:' + this.user.username);
    }
  }

  LogOut() {
    this.user = undefined;
  }

  GetUser(): User {
    return this.user;
  }
}
