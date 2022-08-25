import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LngLat, City, appId} from '../interfaces/geolocation.interface';

@Injectable({
  providedIn: 'root'
})

export class GetCityService {
  constructor(
    private http: HttpClient
  ) { }

  fetchCurrentCity(coord: LngLat): Observable<City> {
    return this.http.get<City>(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${coord.lat}&lon=${coord.lon}&limit=${1}&appid=${appId}`);
  }

  getCitiesByName(city: string): Observable<City[]> {
    return this.http.get<City[]>(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appId}`
    );
  }
}
