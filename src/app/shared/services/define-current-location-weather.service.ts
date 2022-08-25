import { Injectable } from '@angular/core';
import { LngLat } from '../interfaces/geolocation.interface';

@Injectable({
  providedIn: 'root'
})

export class DefineCurrentLocationService {

  defineCurrentLocation(): Promise<LngLat> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
    });
  }
}

