import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../service/weather-service';

@Component({
  selector: 'app-weather-display',
  imports: [CommonModule],
  templateUrl: './weather-display.html',
  styleUrl: './weather-display.scss'
})
export class WeatherDisplay implements OnChanges {
  @Input() city: string = '';
  weather: any;
  dailyForecasts: any[] = [];
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges) {
      if (changes['city'] && this.city) {
        this.fetchWeather(this.city);
      }
  }

  fetchWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weather = data;
        this.error = null;

  // Extract 12:00 PM entries for each day
    this.dailyForecasts = data.list.filter((entry: any) =>
      entry.dt_txt.includes('12:00:00'));
      },
      error: (err) => {
        this.error = 'Could not fetch weather.';
        console.error(err);
      }
    });
  }

getWeatherClass(): string {
  if (!this.weather) return 'weather-default';

  const mainWeather = this.weather.list[0].weather[0].main.toLowerCase();

  switch(mainWeather) {
    case 'clear':
      return 'weather-clear';
    case 'rain':
    case 'drizzle':
      return 'weather-rain';
    case 'clouds':
      return 'weather-clouds';
    case 'snow':
      return 'weather-snow';
    case 'thunderstorm':
      return 'weather-thunderstorm';
    default:
      return 'weather-default';
  }
}



}
