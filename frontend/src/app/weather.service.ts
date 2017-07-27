import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
	url: string = "URL-STRING";

	// Data: any;

	Data: any = [
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 11, 
		"temperature": 77.54, "humidity": 52.4, "waterLevel": 1024 }, 
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 12, 
		"temperature": 77.54, "humidity": 52.2, "waterLevel": 922 },
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 11, 
		"temperature": 77.54, "humidity": 52.3, "waterLevel": 820 }, 
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 12, 
		"temperature": 77.54, "humidity": 52, "waterLevel": 718 },
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 11, 
		"temperature": 77.54, "humidity": 51.9, "waterLevel": 616 }, 
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 12, 
		"temperature": 77.54, "humidity": 51.9, "waterLevel": 514 },
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 11, 
		"temperature": 77.54, "humidity": 51.9, "waterLevel": 412 }, 
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 12, 
		"temperature": 77.54, "humidity": 51.8, "waterLevel": 310 },
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 11, 
		"temperature": 77.54, "humidity": 51.8, "waterLevel": 208 }, 
		{ "deviceId": "Feather HUZZAH ESP8266 WiFi", "messageId": 12, 
		"temperature": 77.54, "humidity": 51.8, "waterLevel": 106 }
	];

	constructor(private http: Http) { }

	get(tick) {
		return this.Data[tick];
		// return this.Data
			// .toPromise()
			// .then(resp => resp.json() || {})
			// .catch(this.handleError);
	}

	// get(): Promise<any> {
	// 	return this.http.get(this.url + 'GetData')
	// 		.toPromise()
	// 		.then(resp => resp.json() || {})
	// 		.catch(this.handleError);
	// }

	// private handleError(error: any): Promise<any> {
	// 	console.error('An error has occurred', error);
	// 	return Promise.reject(error.message || error);
	// }
}
