import { createAction, props } from "@ngrx/store";
import { FiveDaysForecast, Forecast } from "src/app/shared/interfaces/forecast.interface";
import { LngLat, City } from "src/app/shared/interfaces/geolocation.interface";

export enum WeatherActionTypes {
  GetLocationCoords = '[CurrentLocation] Get location coordinates',
  GetLocationCoordsSuccess = '[CurrentLocation] Get location coordinates Success',
  GetMyCitySuccess = '[MyCity] Get my city Success',
  SetLocationCoordsError = '[CurrentLocation] Get location coordinates Error',
  SetMyCityError = '[MyCity] Get my city Error',
  GetForecast = '[Forecast] Get a forecast',
  GetForecastSuccess = '[Forecast] Get a forecast Success',
  SetFarengate = '[Temperature] Set Farengate',
  SetCelsius = '[Temperature] Set Celsius',
  GetFiveDaysForecastSuccess = '[Forecast] Get a five days forecast Success',
}

export const getLocationCoords = createAction(WeatherActionTypes.GetLocationCoords);
export const getLocationCoordsSuccess = createAction(
  WeatherActionTypes.GetLocationCoordsSuccess,
  props<LngLat>()
);
export const setLocationCoordsError = createAction(WeatherActionTypes.SetLocationCoordsError);
export const getMyCitySuccess = createAction(
  WeatherActionTypes.GetMyCitySuccess,
  props<City>()
);
export const setMyCityError = createAction(WeatherActionTypes.SetMyCityError);
export const getForecast = createAction(
  WeatherActionTypes.GetForecast,
  props<LngLat>()
);
export const getForecastSuccess = createAction(
  WeatherActionTypes.GetForecastSuccess,
  props<Forecast>()
);
export const setFarengate = createAction(WeatherActionTypes.SetFarengate);
export const setCelsius = createAction(WeatherActionTypes.SetCelsius);
export const getFiveDaysForecastSuccess = createAction(
  WeatherActionTypes.GetFiveDaysForecastSuccess,
  props<FiveDaysForecast>()
);