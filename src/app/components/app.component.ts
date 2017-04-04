import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countriesA2s: string[];
  selectedA2 = 'IL';

  capital: string;
  continent: string;
  region: string;
  diallingNationalPrefix: string;
  area: number;
  populationCount: number;
  populationPrecentage: number;

  constructor(private _dataAccessService: DataAccessService) { }

  ngOnInit() {
    this.countriesA2s = this._dataAccessService.getCountriesA2s();

    this.onA2Changed(this.selectedA2);
  }

  onA2Changed(a2) {
    this.selectedA2 = a2;

    this.capital = this._dataAccessService.getCapital(this.selectedA2);
    this.continent = this._dataAccessService.getContinent(this.selectedA2);
    this.region = this._dataAccessService.getRegion(this.selectedA2);
    this.diallingNationalPrefix = this._dataAccessService.getDiallingNationalPrefix(this.selectedA2);
    this.area = this._dataAccessService.getArea(this.selectedA2);
    this.populationCount = this._dataAccessService.getPopulationCount(this.selectedA2);
    this.populationPrecentage = this._dataAccessService.getPopulationPrecentage(this.selectedA2);
  }

  private _setupName() {
  }
}
