import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WeatherDisplayMobileComponent } from './weather-display-mobile/weather-display-mobile.component';

declare var require: any;
export function highchartsFactory() {
	return require('highcharts');
}

@NgModule({
	declarations: [
		AppComponent,
		WeatherDisplayComponent,
		NavMenuComponent,
		WeatherDisplayMobileComponent
	],
	imports: [
		BrowserModule, 
		ChartModule, // .forRoot(require('highcharts')),
		AppRoutingModule,
		HttpModule,
		FormsModule
	],
	providers: [
		{
			provide: HighchartsStatic,
			useFactory: highchartsFactory
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
