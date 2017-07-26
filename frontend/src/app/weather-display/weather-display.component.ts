import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ChartModule } from 'angular2-highcharts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { WebSocketSubject } from '@reactivex/rxjs/es6/observable/dom/WebSocketSubject.js'
// import { w3cwebsocket } from 'websocket';

import { WeatherService } from 'app/weather.service';

@Component({
	selector: 'app-weather-display',
	templateUrl: './weather-display.component.html',
	styleUrls: ['./weather-display.component.css'],
	providers: [WeatherService]
})
export class WeatherDisplayComponent implements OnInit {
	// RGB transition for water level detector goes from red(255,0,0) to orange(255,255,0) to green(0,255,0)
	// There are 512 different color options along that scale
	// at WaterLevel = 1024 it will be green
	// at WaterLevel = 512 it will be orange
	// at WaterLevel = 0 it will be red

	Data: any;
	tick = 0;

	constructor(private weatherSvc: WeatherService) { }

	options: any;
	chart: any;

	ngOnInit() {
		this.options = {
			title : { text : '' },
			xAxis: {
				type: 'datetime',
				tickPixelInterval: 150
			},
			series: [{
				name: 'Temperature',
				data: (function () {
					var data = [],
						time = (new Date()).getTime();

					return data;
				}()),
				allowPointSelect: true
			},{
                name: 'Humidity',
                data: (function () {
					var data = [],
						time = (new Date()).getTime();

					return data;
				}()),
                allowPointSelect: true
            }]
		};

		setInterval(() => { 
			this.Data = this.weatherSvc.get(this.tick);
			this.addTempPoint(this.Data.temperature);
			this.addHumidityPoint(this.Data.humidity);
			this.setWaterLevelLEDColor(this.Data.waterLevel);
				// .then(resp => this.Data = resp);
			if(this.tick == 9) {
				this.tick = 0;
			} else {
				this.tick++;
			}
		}, 1000);
	}

	saveChart(chart) {
		this.chart = chart;
	}

	addTempPoint(val) {
		this.chart.series[0].addPoint(val);
	}
	addHumidityPoint(val) {
		this.chart.series[1].addPoint(val);
	}

	onPointSelect(point) {
		// display point info?
	}
	onSeriesHide(series) {
		// do something
	}

	setWaterLevelLEDColor(val) {
		if(document.getElementById("Water-Level-LED") != null) {
			if(val > 682.7) {
				document.getElementById("Water-Level-LED").style.backgroundColor = "rgb(0,255,0)";
				document.getElementById("Water-Level-LED").style.boxShadow 
					= "#000000 0 -1px 7px 1px, inset #006600 0 -1px 9px, #00FF00 0 2px 12px";
			} else if(val > 341.4) {
				document.getElementById("Water-Level-LED").style.backgroundColor = "rgb(255,255,0)";
				document.getElementById("Water-Level-LED").style.boxShadow 
					= "#000000 0 -1px 7px 1px, inset #666600 0 -1px 9px, #FFFF00 0 2px 12px";
			} else {
				document.getElementById("Water-Level-LED").style.backgroundColor = "rgb(255,0,0)";
				document.getElementById("Water-Level-LED").style.boxShadow 
					= "#000000 0 -1px 7px 1px, inset #660000 0 -1px 9px, #FF0000 0 2px 12px";
			}
		}
	}

	// checkUpdate(): any {
	// 	this.weatherSvc.get()
	// 		.then(resp => this.Data = resp);
	// 	console.log(this.Data);
	// }
}
