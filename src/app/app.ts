import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySelector } from './components/city-selector/city-selector';
import { WeatherDisplay } from './components/weather-display/weather-display';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, CitySelector, WeatherDisplay, CitySelector],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedCity: string = '';
}
