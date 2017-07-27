import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherDisplayMobileComponent } from './weather-display-mobile/weather-display-mobile.component';
import { DeviceGuardService } from './device-guard.service';
import { MobileDeviceGuardService } from './mobile-device-guard.service';
import { WeatherService } from './weather.service';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: WeatherDisplayComponent, canActivate: [DeviceGuardService] },
	{ path: 'home-mobile', component: WeatherDisplayMobileComponent, canActivate: [MobileDeviceGuardService] }
];

@NgModule({
	// imports: [ RouterModule.forRoot(routes, { enableTracing: true}) ]
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ DeviceGuardService, MobileDeviceGuardService, WeatherService ]
})

export class AppRoutingModule { }