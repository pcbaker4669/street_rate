import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: false,
  
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage = 'An Error Occured!  Contact Petey Boy for Support...'

  constructor() {

  }

  ngOnInit() {
    
  }
  
}
