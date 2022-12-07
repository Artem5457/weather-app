import {createFeatureSelector, createSelector} from "@ngrx/store";
import {WEATHER_APP_KEIES} from "../keys";
import { ForecastState } from "../reducers/forecast.reducer";

const getForecastState = createFeatureSelector<ForecastState>(
  WEATHER_APP_KEIES.FORECAST
);

export const getTodayForecast = createSelector(
  getForecastState,
  (state) => state.todayForecst
);

export const setIsCelcius = createSelector(
  getForecastState,
  (state) => state.isCelsius
);

export const getFiveDaysFullForecast = createSelector(
  getForecastState,
  (state) => state.fiveDaysForecast
);

export const getFiveDaysForecast = createSelector(
  getFiveDaysFullForecast,
  (state) => {
    const periodForecast = state?.list;
    const currentDate = new Date().getDate();
    let calcMaxTempForFifthDay;

    const tomorrowDay = periodForecast?.findIndex(el => new Date(el.dt_txt).getDate() === currentDate + 1);
    if (periodForecast) {
      calcMaxTempForFifthDay = tomorrowDay + 36 <= periodForecast.length - 1
      ? periodForecast[tomorrowDay + 36]
      : periodForecast[tomorrowDay + 28];
    }

    if (tomorrowDay) {
      return [
        {
          min: periodForecast[tomorrowDay],
          max: periodForecast[tomorrowDay + 4],
          curTemp: periodForecast[tomorrowDay + 4].main.temp - 1
        },
        {
          min: periodForecast[tomorrowDay + 8],
          max: periodForecast[tomorrowDay + 12],
          curTemp: periodForecast[tomorrowDay + 12].main.temp - 1.5
        },
        {
          min: periodForecast[tomorrowDay + 16],
          max: periodForecast[tomorrowDay + 20],
          curTemp: periodForecast[tomorrowDay + 20].main.temp - 2
        },
        {
          min: periodForecast[tomorrowDay + 24],
          max: periodForecast[tomorrowDay + 28],
          curTemp: periodForecast[tomorrowDay + 28].main.temp - 1.5
        },
        {
          min: periodForecast[tomorrowDay + 32],
          max: calcMaxTempForFifthDay,
          curTemp: calcMaxTempForFifthDay.main.temp - 1
        }
      ];
    }

    return [];
  }
);
