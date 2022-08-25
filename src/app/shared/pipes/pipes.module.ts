import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFlagPipe } from './country-flag.pipe';
import { WeatherIconPipe } from './weather-description.pipe';

@NgModule({
  declarations: [
    CountryFlagPipe,
    WeatherIconPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryFlagPipe,
    WeatherIconPipe
  ]
})
export class PipesModule { }
