import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  login() {
    this.authService.login("alan@gmail.com", "123456")
      .then(
        data => this.user = data.user
      )
      .catch(
        error => {
          console.error('no logueado');
          console.error(error);
        }
      );
    // this.authService.getCurrentUser().subscribe(
    //   data => {
    //     this.user = data;
    //     console.log('logueado');
    //   },
    //   error => {
    //     console.error('no logueado');
    //     console.error(error);
    //   }
    // );
  }
}
