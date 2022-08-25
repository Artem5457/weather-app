import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../interfaces/geolocation.interface';

@Pipe({
  name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {
  transform(city: City): string {
    const countryCode = city?.country?.toLowerCase();
    
    return `https://countryflagsapi.com/svg/${countryCode}`;
  }
}
