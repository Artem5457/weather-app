import { CountryFlagPipe } from './country-flag.pipe';
import {City} from "../interfaces/geolocation.interface";

describe('CountryFlagPipe', () => {
  let countryFlagPipe: CountryFlagPipe;

  beforeEach(() => {
    countryFlagPipe = new CountryFlagPipe();
  })

  it('create an instance', () => {
    expect(countryFlagPipe).toBeTruthy();
  });

  it('should return correct url to get needed country flag', () => {
    const city: City = {
      country: 'uk'
    } as City;

    const countryFlag = countryFlagPipe.transform(city);
    expect(countryFlag).toBe(
      'https://countryflagsapi.com/svg/uk'
    );
  });
});
