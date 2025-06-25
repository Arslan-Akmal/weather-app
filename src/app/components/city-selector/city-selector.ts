import { Component, EventEmitter, Output } from '@angular/core';
import { cities } from '../cities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './city-selector.html',
  styleUrl: './city-selector.scss'
})
export class CitySelector {
cities = cities;
selectedCity = this.cities[0];

@Output() cityChange = new EventEmitter<string>();

onCityChange() {
  this.cityChange.emit(this.selectedCity);
 }
}
