import { WeatherQuery } from "./interfaces/forecast.interface";

export enum WEATHER_MAIN {
  THUNDERSTORM = 'Thunderstorm',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
}

export enum MAIN_ICONS {
  THUNDERSTORM = 'thunderstorm',
  SNOW = 'snow',
  SLEET = 'sleet',
  SHOWER = 'shower',
  LIGHT_RAIN = 'light_rain',
  LIGHT_CLOUD = 'light_cloud',
  HEAVY_RAIN = 'heavy_rain',
  HEAVY_CLOUD = 'heavy_cloud',
  HAIL = 'hail',
  CLEAR = 'clear',
  ATMOSPHERE = 'atmosphere'
}

export enum FORCE {
  LIGHT = 'light',
  HEAVY = 'heavy',
  EXTREME = 'extreme',
}

export enum LIGHT_CLOUDS {
  FEW = 'few clouds: 11-25%',
  SCATTERED = 'scattered clouds: 25-50%'
}

export const lightClouds: string[] = [
  LIGHT_CLOUDS.FEW,
  LIGHT_CLOUDS.SCATTERED
];

export const weatherQuery: WeatherQuery = {
  sleet: 'sleet',
  hail: 'freezing rain',
  shower: 'shower'
}

export const Breakpoints = {
  Mobile: '(max-width: 505px)',
}
