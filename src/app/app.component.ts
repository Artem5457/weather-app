import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, map, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from './shared/shared.consts';
import { IconService } from './shared/services/icon.service';
import { getFiveDaysForecast } from './store/selectors/forecast.selector';
import { GetForecastService } from './shared/services/get-forecast.service';
import {
  getForecast,
  getLocationCoords,
} from './store/actions/weather-app.action';
import { DefineCurrentLocationService } from './shared/services/define-current-location-weather.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('story', { read: ElementRef }) story: ElementRef;

  isShowPanel: boolean = false;

  story$ = this.store.select(getFiveDaysForecast);
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Mobile)
    .pipe(map((res) => res.matches));
  isInfoBlockScrolled$ = new BehaviorSubject<boolean>(false);

  private subscription = new Subscription();

  constructor(
    private store: Store,
    private getForecastService: GetForecastService,
    private iconService: IconService,
    private breakpointObserver: BreakpointObserver,
    private locationService: DefineCurrentLocationService
  ) {}

  @HostListener('window: resize')
  onResize(): void {
    const element = this.story.nativeElement;
    element.scrollHeight > element.clientHeight
      ? this.isInfoBlockScrolled$.next(true)
      : this.isInfoBlockScrolled$.next(false);
  }

  ngOnInit() {
    // this.subscription.add(
    //   this.locationService.defineIp().subscribe(data => console.log(data))
    // );
    // this.store.dispatch(getLocationCoords());
    //   this.store.dispatch(getForecast({
    //     lon: -43.2093727,
    //     lat: -22.9110137
    //   }));
    // this.subscription.add(
    //   this.story$.subscribe(story => console.log('Tomorrow day:', story))
    // );
    // this.getForecastService.getFiveDayForecast(
    //   {
    //     lon: -43.2093727,
    //     lat: -22.9110137
    //   }
    // ).subscribe(
    //   (fiveDayForecast) => console.log('5 day forecast: ', fiveDayForecast)
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
