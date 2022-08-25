import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LngLat, City} from "./shared/interfaces/geolocation.interface";
import {getLocationCoords, getForecast, setCelsius, setFarengate} from "./store/actions/weather-app.action";
import {getCurrentCity, getCurrentLocation} from "./store/selectors/location.selector";
import {GetCityService} from "./shared/services/get-city.service";
import {GetForecastService} from "./shared/services/get-forecast.service";
import * as moment from 'moment';
import { getFiveDaysForecast } from './store/selectors/forecast.selector';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLocation$: Observable<LngLat> = this.store.select(getCurrentLocation);
  myCity$: Observable<City> = this.store.select(getCurrentCity);
  story$ = this.store.select(getFiveDaysForecast);

  constructor(
    private store: Store,
    public getCity: GetCityService,
    private getForecastService: GetForecastService,
    private iconService: IconService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getLocationCoords());
    this.store.dispatch(getForecast({
      lon: -43.2093727,
      lat: -22.9110137
    }));
    this.getCity.getCitiesByName('Rio').subscribe(
      (cities) => console.log('Cities: ', cities)
    );
     this.getForecastService.getForecastByCoords(
       {
         lon: 20.8283652,
         lat: 13.8280295
       }
     ).subscribe(
       (forecast) => console.log('City forecast: ', forecast)
    );
    this.getForecastService.getFiveDayForecast(
      {
        lon: -43.2093727,
        lat: -22.9110137
      }
    ).subscribe(
      (fiveDayForecast) => console.log('5 day forecast: ', fiveDayForecast)
    );
    console.log(moment("2022-08-14 00:00:00").date());
    this.story$.subscribe(story => console.log('Tomorrow day:', story))
  }

  setCelcius(): void {
    this.store.dispatch(setCelsius());
  }

  setFarengate(): void {
    this.store.dispatch(setFarengate());
  }
}
