import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  async obtenerUbicacion(): Promise<Position> {
    const position = await Geolocation.getCurrentPosition();
    return position;
  }
}