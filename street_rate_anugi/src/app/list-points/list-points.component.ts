import { Component } from '@angular/core';

@Component({
  selector: 'app-list-points',
  standalone: false,
  
  templateUrl: './list-points.component.html',
  styleUrl: './list-points.component.css'
})
export class ListPointsComponent {
  pntLst = [
    { id: 1, description: 'dog' },
    { id: 2, description: 'cat' },
    { id: 3, description: 'placeholder' }
  ]
  
  constructor() {}

  ngOnInit() {
    this.getUserLocation();
  }
  
   getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          console.log('Latitude: ', position.coords.latitude);
          console.log('Longitude: ', position.coords.longitude);
        }, (error) => {
          console.error('Error getting location: ', error);
        }
      );
   } else {
    console.error('Geolocation is not supported by this browser.');
   }
  }
  
}
