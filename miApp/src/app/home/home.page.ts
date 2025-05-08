import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
})
export class HomePage {
  latitude: number | null = null;
  longitude: number | null = null;

  constructor(private geoService: GeolocationService) {}

  async obtenerUbicacion() {
    try {
      const position = await this.geoService.obtenerUbicacion();
      this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        } catch (error) {
          console.error('Error obtaining location:', error);
              }
          }
      }
