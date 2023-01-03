import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LngLat } from '../interfaces/geolocation.interface';

const API_KEY = '40d11ca8430f4bd7876bbdf3b81878f2';

@Injectable({
  providedIn: 'root'
})

export class DefineCurrentLocationService {

  constructor(private http: HttpClient) {}

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

  defineIp(): Observable<any> {
    return this.http.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);
  }
}

