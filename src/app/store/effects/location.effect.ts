import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, switchMap, map, catchError, of} from 'rxjs';
import {LngLat, City} from 'src/app/shared/interfaces/geolocation.interface';
import {DefineCurrentLocationService} from 'src/app/shared/services/define-current-location-weather.service';
import {GetCityService} from 'src/app/shared/services/get-city.service';
import {
  getLocationCoords, setLocationCoordsError,
  getLocationCoordsSuccess, setMyCityError,
  getMyCitySuccess
} from "../actions/weather-app.action";

@Injectable()
export class CurrentLocationEffect {
  getCurrentLocation$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocationCoords),
      switchMap(() =>
        this.getCurLocationService
          .defineCurrentLocation()
          .then((coords) => getLocationCoordsSuccess(coords))
          .catch(() => setLocationCoordsError())
      )
    )
  );

  getCurrentCity$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(getLocationCoordsSuccess),
        switchMap((payload: LngLat) =>
          this.getCurrentCity.fetchCurrentCity(payload).pipe(
            map((location: City) => getMyCitySuccess(location))
          )
        ),
        catchError(() => of(setMyCityError()))
      )
  );

  constructor(
    private actions$: Actions,
    private getCurLocationService: DefineCurrentLocationService,
    private getCurrentCity: GetCityService
  ) {
  }
}
