import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { FiveDaysForecast, Forecast } from '../interfaces/forecast.interface';
import {appId, LngLat} from "../interfaces/geolocation.interface";

@Injectable({
  providedIn: 'root'
})

export class GetForecastService {
  constructor(
    private http: HttpClient
  ) { }

  getForecastByCoords(coords: LngLat): Observable<Forecast> {
    return this.http.get<Forecast>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${appId}`
    );
  }

  getFiveDayForecast(coords: LngLat): Observable<FiveDaysForecast> {
    return this.http.get<FiveDaysForecast>(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${appId}`
    )
  }
}
