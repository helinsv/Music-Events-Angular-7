import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.GetUser().subscribe((user: User) => {
      this.user = user;
    });
  }

Logout() {
  this.loginService.Logout();
}

}
