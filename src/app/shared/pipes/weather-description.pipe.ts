import { Pipe, PipeTransform } from '@angular/core';
import { Forecast } from '../interfaces/forecast.interface';
import {
  FORCE,
  lightClouds,
  MAIN_ICONS,
  weatherQuery,
  WEATHER_MAIN
} from '../shared.consts';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  transform(value: Forecast): string {
    const weatherMain = value.weather[0].main;
    const weatherDescription = value.weather[0].description;

    switch(weatherMain) {
      case WEATHER_MAIN.CLEAR:
        return MAIN_ICONS.CLEAR;
      case WEATHER_MAIN.THUNDERSTORM:
        return MAIN_ICONS.THUNDERSTORM;
      case WEATHER_MAIN.SNOW:
        return this.getSnowIcon(weatherDescription);
      case WEATHER_MAIN.CLOUDS:
        return this.getCloudsIcon(weatherDescription);
      case WEATHER_MAIN.RAIN:
        return this.getRainIcon(weatherDescription);
      case WEATHER_MAIN.DRIZZLE:
        return this.getDrizzleIcon(weatherDescription);
      default:
        return MAIN_ICONS.ATMOSPHERE;
    }
  }

  private getSnowIcon(
    description: string
  ): MAIN_ICONS {
    if (description.includes(weatherQuery.sleet)) {
      return MAIN_ICONS.SLEET;
    }
    return MAIN_ICONS.SNOW;
  }

  private getCloudsIcon(description: string):  MAIN_ICONS {
    if (lightClouds.includes(description)) {
      return MAIN_ICONS.LIGHT_CLOUD;
    }
    return MAIN_ICONS.HEAVY_CLOUD;
  }

  private getRainIcon(
    description: string
  ) {
    if (description.includes(weatherQuery.hail)) {
      return MAIN_ICONS.HAIL;
    } else if (description.includes(weatherQuery.shower)) {
      return MAIN_ICONS.SHOWER;
    } else if (
      description.includes(FORCE.HEAVY) ||
      description.includes(FORCE.EXTREME)
    ) {
      return MAIN_ICONS.HEAVY_RAIN;
    }
    return MAIN_ICONS.LIGHT_RAIN;
  }

  private getDrizzleIcon(description: string) {
    if (description.includes(FORCE.LIGHT)) {
      return MAIN_ICONS.LIGHT_RAIN;
    }
    return MAIN_ICONS.HEAVY_RAIN;
  }
}
