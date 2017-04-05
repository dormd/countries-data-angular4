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

  nativeCountryName: string;
  commonCountryName: string;
  capital: string;
  continents: string;
  subRegion: string;
  callingCode: string;
  area: number;
  populationCount: number;
  populationPrecentage: number;
  languages: string;
  wikiLinkSuffix: string;
  anthemLink: string;

  constructor(private _dataAccessService: DataAccessService) { }

  ngOnInit() {
    this.countriesA2s = this._dataAccessService.getCountriesA2s();

    this.onA2Changed(this.selectedA2);
  }

  onA2Changed(a2) {
    this.selectedA2 = a2;

    this.nativeCountryName = this._dataAccessService.getNativeCountryName(this.selectedA2);
    this.commonCountryName = this._dataAccessService.getCommonCountryName(this.selectedA2);
    this.capital = this._dataAccessService.getCapital(this.selectedA2);
    this.continents = this._dataAccessService.getContinents(this.selectedA2);
    this.subRegion = this._dataAccessService.getSubRegion(this.selectedA2);
    this.callingCode = this._dataAccessService.getCallingCodePrefix(this.selectedA2);
    this.area = this._dataAccessService.getArea(this.selectedA2);
    this.populationCount = this._dataAccessService.getPopulationCount(this.selectedA2);
    this.populationPrecentage = this._dataAccessService.getPopulationPrecentage(this.selectedA2);
    this.languages = this._dataAccessService.getLanguages(this.selectedA2);
    this.anthemLink = this._dataAccessService.getAnthemLink(this.selectedA2);
    this.wikiLinkSuffix = this._dataAccessService.getWikiSuffix(this.selectedA2);
  }
}
