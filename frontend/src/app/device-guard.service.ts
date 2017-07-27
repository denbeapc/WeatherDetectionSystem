import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { WeatherService } from './weather.service';

@Injectable()
export class DeviceGuardService implements CanActivate {
	constructor(private weatherSvc: WeatherService, private router: Router) { }

	canActivate() {
		if(this.weatherSvc.DeviceScreenWith <= 425) {
			this.router.navigate(['/home-mobile']);
			return false;
		} else {
			return true;
		}
	}
}