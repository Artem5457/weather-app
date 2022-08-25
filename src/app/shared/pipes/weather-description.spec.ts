import { Forecast } from "../interfaces/forecast.interface";
import { WeatherIconPipe } from "./weather-description.pipe"
import {MAIN_ICONS} from "../shared.consts";

describe('WeatherIconPipe', () => {
  let weatherIconPipe: WeatherIconPipe;

  beforeEach(() => {
    weatherIconPipe = new WeatherIconPipe();
  })

  it('create an instance', () => {
    expect(weatherIconPipe).toBeTruthy();
  });

  it('should return "clear" if weather is clear', () => {
    const weatherClear: Forecast = {
      weather: [
        {
          main: 'Clear',
          description: 'clear sky'
        }
      ]
    } as Forecast;

    const weatherIcon = weatherIconPipe.transform(weatherClear);
    expect(weatherIcon).toBe(MAIN_ICONS.CLEAR);
  });

  it('should return "thunderstorm" if it is thunderstorm', () => {
    const weatherThunderstorm: Forecast = {
      weather: [
        {
          main: 'Thunderstorm'
        }
      ]
    } as Forecast;

    const weatherIcon = weatherIconPipe.transform(weatherThunderstorm);
    expect(weatherIcon).toBe(MAIN_ICONS.THUNDERSTORM);
  });

  describe('SNOW', () => {
    it('should return "sleet" if it is sleet', () => {
      const weatherSnow: Forecast = {
        weather: [
          {
            main: 'Snow',
            description: 'Shower sleet'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherSnow);
      expect(weatherIcon).toBe(MAIN_ICONS.SLEET);
    });

    it('should return "snow" for other occasions', () => {
      const weatherSnow: Forecast = {
        weather: [
          {
            main: 'Snow',
            description: 'Heavy snow'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherSnow);
      expect(weatherIcon).toBe(MAIN_ICONS.SNOW);
    });
  });

  describe('CLOUDS', () => {
    it('should return "light_cloud" if it is light cloud', () => {
      const weatherClouds: Forecast = {
        weather: [
          {
            main: 'Clouds',
            description: 'few clouds: 11-25%'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherClouds);
      expect(weatherIcon).toBe(MAIN_ICONS.LIGHT_CLOUD);
    });

    it('should return "heavy_cloud" if it is heavy cloud', () => {
      const weatherClouds: Forecast = {
        weather: [
          {
            main: 'Clouds',
            description: 'broken clouds: 51-84%'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherClouds);
      expect(weatherIcon).toBe(MAIN_ICONS.HEAVY_CLOUD);
    });
  });

  describe('RAIN', () => {
    it('should return "hail" if it is hail', () => {
      const weatherHail: Forecast = {
        weather: [
          {
            main: 'Rain',
            description: 'freezing rain'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherHail);
      expect(weatherIcon).toBe(MAIN_ICONS.HAIL);
    });

    it('should return "shower" if it is shower', () => {
      const weatherShower: Forecast = {
        weather: [
          {
            main: 'Rain',
            description: 'light intensity shower rain'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherShower);
      expect(weatherIcon).toBe(MAIN_ICONS.SHOWER);
    });

    it('should return "heavy_rain" if it is heavy rain', () => {
      const weatherExtremeRain: Forecast = {
        weather: [
          {
            main: 'Rain',
            description: 'extreme rain'
          }
        ]
      } as Forecast;
      const weatherHeavyRain: Forecast = {
        weather: [
          {
            main: 'Rain',
            description: 'heavy intensity rain'
          }
        ]
      } as Forecast;

      expect(weatherIconPipe.transform(weatherExtremeRain)).toBe(
        MAIN_ICONS.HEAVY_RAIN
      );
      expect(weatherIconPipe.transform(weatherHeavyRain)).toBe(
        MAIN_ICONS.HEAVY_RAIN
      );
    });

    it('should return "light_rain" if it is light rain', () => {
      const weatherLightRain: Forecast = {
        weather: [
          {
            main: 'Rain',
            description: 'moderate rain' // or 'light rain'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherLightRain);
      expect(weatherIcon).toBe(MAIN_ICONS.LIGHT_RAIN);
    });
  });

  describe('DRIZZLE', () => {
    it('should return "light_rain" if it is light drizzle', () => {
      const weatherDrizzle: Forecast = {
        weather: [
          {
            main: 'Drizzle',
            description: 'light intensity drizzle rain'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherDrizzle);
      expect(weatherIcon).toBe(MAIN_ICONS.LIGHT_RAIN);
    });

    it('should return "heavy_rain" if it is heavy drizzle', () => {
      const weatherDrizzle: Forecast = {
        weather: [
          {
            main: 'Drizzle',
            description: 'shower rain and drizzle'
          }
        ]
      } as Forecast;

      const weatherIcon = weatherIconPipe.transform(weatherDrizzle);
      expect(weatherIcon).toBe(MAIN_ICONS.HEAVY_RAIN);
    });
  });

  it('should return "atmosphere" if it is not one of previous cases', () => {
    const weatherAtmosphere: Forecast = {
      weather: [
        {
          main: 'Sand'
        }
      ]
    } as Forecast;

    const weatherIcon = weatherIconPipe.transform(weatherAtmosphere);
    expect(weatherIcon).toBe(MAIN_ICONS.ATMOSPHERE);
  });
});
