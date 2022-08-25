import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CurrentLocationState} from "../reducers/location.reducer";
import {WEATHER_APP_KEIES} from "../keys";

export const getCurrentLocationState = createFeatureSelector<CurrentLocationState>(
  WEATHER_APP_KEIES.LOCATION
);

export const getCurrentLocation = createSelector(
  getCurrentLocationState,
  (state) => state.locationCoords
);

export const getCurrentCity = createSelector(
  getCurrentLocationState,
  (state) => state.currentCity[0]
)
