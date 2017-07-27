import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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
	constructor(private weatherSvc: WeatherService) {
		this.innerWidth = (window.screen.width);
	}

	options: any;
	chart: any;

	Data: any;
	tick = 0;

	innerWidth: any;

	ngOnInit() {
		this.options = {
			title : { text : '' },
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					second: '%I:%M:%S %P'
				}
			},
			chart: {
				width: this.innerWidth - 50,
				backgroundColor: 'lightgray'
			},
			series: [{
				name: 'Temperature',
				data: [],
				allowPointSelect: true
			},{
				name: 'Humidity',
				data: [],
				allowPointSelect: true
			}]
		};		

		setInterval(() => { 
			this.Data = this.weatherSvc.get(this.tick);

			var timestamp = (new Date(Date.now()).getTime() - (14400 * 1000));
			// timestamp.setTime(timestamp.getTime() * timestamp.getTimezoneOffset());
			this.addTempPoint(timestamp, this.Data.temperature);
			this.addHumidityPoint(timestamp, this.Data.humidity);
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
	addTempPoint(timestamp, val) {
		this.chart.series[0].addPoint([timestamp, val]);
	}
	addHumidityPoint(timestamp, val) {
		this.chart.series[1].addPoint([timestamp, val]);
	}
	onPointSelect(point) {
		// display point info?
	}
	onSeriesHide(series) {
		// do something
	}
	// =================== END OF CHART METHODS =================== //

	// =================== LED WATER LEVEL METHOD =================== //
	// RGB transition for water level detector goes from red(255,0,0) to orange(255,255,0) to green(0,255,0)
	// There are 512 different color options along that scale
	// at WaterLevel = 1024 it will be green
	// at WaterLevel = 512 it will be orange
	// at WaterLevel = 0 it will be red
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
