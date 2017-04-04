import { Injectable, Inject } from '@angular/core';
import { Countries, ICountry, Anthems, IAnthem } from 'countries-data';
import * as _ from 'lodash';

import { COUNTRIES_DATA, ANTHEMS_DATA } from '../tokens/countries.tokens';

@Injectable()
export class DataAccessService {

  constructor(@Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
              @Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

  getCountriesA2s(): string[] {
    return _.keys(this._countriesData);
  }

  getCapital(a2: string): string {
    return this._countriesData[a2.toUpperCase()].capital;
  }

  getContinent(a2: string): string {
    return this.getInCommonLanguage(this._countriesData[a2.toUpperCase()].geo.continent);
  }

  getRegion(a2: string): string {
    return this._countriesData[a2.toUpperCase()].geo.region;
  }

  getDiallingNationalPrefix(a2: string): string {
    return this._countriesData[a2.toUpperCase()].dialling.national_prefix;
  }

  getArea(a2: string): number {
    return this._countriesData[a2.toUpperCase()].geo.area;
  }

  getPopulationCount(a2: string): number {
    return this._countriesData[a2.toUpperCase()].population.count;
  }

  getPopulationPrecentage(a2: string): number {
    return this._countriesData[a2.toUpperCase()].population.worldPercentage;
  }

  getInCommonLanguage(values): string {
    return '';
  }
}
