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

  constructor() {}

  ngOnInit() {

  }

  handleLogin() {
    console.log(this.username)
  }
}
