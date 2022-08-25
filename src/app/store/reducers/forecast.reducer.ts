import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { FiveDaysForecast, Forecast } from "src/app/shared/interfaces/forecast.interface";
import {
  getFiveDaysForecastSuccess,
  getForecastSuccess,
  setCelsius,
  setFarengate
} from "../actions/weather-app.action";

export interface ForecastState {
  todayForecst: Forecast,
  isCelsius: boolean,
  fiveDaysForecast: FiveDaysForecast | null,
}

const initialState: ForecastState = {
  todayForecst: null,
  isCelsius: true,
  fiveDaysForecast: null,
}

const getForecastReducer = (
  state: ForecastState,
  {type, ...payload}: TypedAction<string> & Forecast
): ForecastState => {
  return {
    ...state,
    todayForecst: payload
  };
}

const setFarengateReducer = (state: ForecastState): ForecastState => {
  return {
    ...state,
    isCelsius: false
  }
}

const setCelsiusReducer = (state: ForecastState): ForecastState => {
  return {
    ...state,
    isCelsius: true
  }
}

const getFiveDaysForecastReducer = (
  state: ForecastState,
  {type, ...payload}: TypedAction<string> & FiveDaysForecast
): ForecastState => {
  return {
    ...state,
    fiveDaysForecast: payload
  }
}

export const forecastReducer = createReducer(
  initialState,
  on(getForecastSuccess, getForecastReducer),
  on(setFarengate, setFarengateReducer),
  on(setCelsius, setCelsiusReducer),
  on(getFiveDaysForecastSuccess, getFiveDaysForecastReducer)
)
