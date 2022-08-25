import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { LngLat, City } from "src/app/shared/interfaces/geolocation.interface";
import {
  setLocationCoordsError,
  getLocationCoordsSuccess, setMyCityError,
  getMyCitySuccess
} from "../actions/weather-app.action";

export interface CurrentLocationState {
  locationCoords: LngLat,
  currentCity: City,
  isCoordsError: boolean,
  isMyCityError: boolean
}

const initialState: CurrentLocationState = {
  locationCoords: {
    lon: null,
    lat: null
  },
  isCoordsError: false,
  currentCity: {
    name: null,
    country: null,
    lat: null,
    lon: null,
    state: null
  },
  isMyCityError: false
}

const defineLocationCoordsReducer = (
  state: CurrentLocationState,
  {type, ...payload}: TypedAction<string> & LngLat
): CurrentLocationState => {
  return {
    ...state,
    locationCoords: payload
  };
}

const getMyCityReducer = (
  state: CurrentLocationState,
  {type, ...payload}: TypedAction<string> & City
): CurrentLocationState => {
  return {
    ...state,
    currentCity: payload
  }
}

const getCoordsErrorReducer = (state: CurrentLocationState): CurrentLocationState => {
  return {
    ...state,
    isCoordsError: true
  }
}

const getMyCityErrorReducer = (state: CurrentLocationState): CurrentLocationState => {
  return {
    ...state,
    isMyCityError: true
  }
}


export const currentLocationReducer = createReducer(
  initialState,
  on(getLocationCoordsSuccess, defineLocationCoordsReducer),
  on(setLocationCoordsError, getCoordsErrorReducer),
  on(getMyCitySuccess, getMyCityReducer),
  on(setMyCityError, getMyCityErrorReducer)
)
