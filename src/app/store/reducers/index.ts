import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { currentLocationReducer, CurrentLocationState } from './location.reducer';
import {WEATHER_APP_KEIES} from "../keys";
import { forecastReducer, ForecastState } from './forecast.reducer';

export interface State {
  [WEATHER_APP_KEIES.LOCATION]: CurrentLocationState
  [WEATHER_APP_KEIES.FORECAST]: ForecastState
}

export const reducers: ActionReducerMap<State> = {
  [WEATHER_APP_KEIES.LOCATION]: currentLocationReducer,
  [WEATHER_APP_KEIES.FORECAST]: forecastReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
