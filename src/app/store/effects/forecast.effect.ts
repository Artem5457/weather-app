import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, switchMap, map} from 'rxjs';
import { FiveDaysForecast, Forecast } from 'src/app/shared/interfaces/forecast.interface';
import { LngLat } from 'src/app/shared/interfaces/geolocation.interface';
import { GetForecastService } from 'src/app/shared/services/get-forecast.service';
import {
  getFiveDaysForecastSuccess,
  getForecast,
  getForecastSuccess
} from '../actions/weather-app.action';

@Injectable()
export class ForecastEffect {
  getTodayForecast$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getForecast),
      switchMap((coords: LngLat) =>
        this.getForecastService.getForecastByCoords(coords).pipe(
          map((forecast: Forecast) => getForecastSuccess(forecast))
        )
      )
  ));

  getFiveDaysForecast$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getForecast),
      switchMap((coords: LngLat) =>
        this.getForecastService.getFiveDayForecast(coords).pipe(
          map((forecast: FiveDaysForecast) => getFiveDaysForecastSuccess(forecast))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getForecastService: GetForecastService
  ) {
  }
}