import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'pete'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  handleLogin() {
    if (this.username === 'pete' && this.password === 'snowman') {
      this.router.navigate(['map', this.username])
      this.invalidLogin = false
      console.log("Success")
    } else {
      this.invalidLogin = true
    }
  }
}
