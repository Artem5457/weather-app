import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { IconConfig } from "../interfaces/icon-config.interface";

@Injectable(
  {providedIn: 'root'}
)
export class IconService {
  icons: IconConfig[] = [
    {url: 'assets/kinds_of_weather/Thunderstorm.svg', name: 'thunderstorm'},
    {url: 'assets/kinds_of_weather/Snow.svg', name: 'snow'},
    {url: 'assets/kinds_of_weather/Sleet.svg', name: 'sleet'},
    {url: 'assets/kinds_of_weather/Shower.svg', name: 'shower'},
    {url: 'assets/kinds_of_weather/LightRain.svg', name: 'light_rain'},
    {url: 'assets/kinds_of_weather/LightCloud.svg', name: 'light_cloud'},
    {url: 'assets/kinds_of_weather/HeavyRain.svg', name: 'heavy_rain'},
    {url: 'assets/kinds_of_weather/HeavyCloud.svg', name: 'heavy_cloud'},
    {url: 'assets/kinds_of_weather/Hail.svg', name: 'hail'},
    {url: 'assets/kinds_of_weather/Clear.svg', name: 'clear'},
    {url: 'assets/kinds_of_weather/Atmosphere.svg', name: 'atmosphere'},
    {url: 'assets/icons/target.svg', name: 'target'},
    {url: 'assets/icons/location-marker.svg', name: 'location-marker'},
    {url: 'assets/icons/close.svg', name: 'close'}
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,

  ) {
    this.icons.forEach((icon) => this.iconRegistry.addSvgIcon(icon.name, this.getIconUrl(icon)));
  }

  private getIconUrl(icon: IconConfig): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(icon.url);
  }
}
