import { Component } from '@angular/core';

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

  constructor() {}

  ngOnInit() {

  }

  handleLogin() {
    if (this.username === 'pete' && this.password === 'snowman') {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
