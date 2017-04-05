import { Injectable, Inject } from '@angular/core';
import { Countries, ICountry, Anthems, IAnthem, IOfficialCommon } from 'countries-data';
import * as _ from 'lodash';

import { COUNTRIES_DATA, ANTHEMS_DATA } from '../tokens/countries.tokens';

@Injectable()
export class DataAccessService {

  constructor(@Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
              @Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

  getNativeCountryName(a2: string): string {
    const values: IOfficialCommon[] = _.values(this.getCountryObjByA2(a2).name.native);
    if (values.length > 0) {
        return values[0].common;
    }

    return '';
  }

  getCommonCountryName(a2: string): string {
    return this.getCountryObjByA2(a2).name.common;
  }

  getCapital(a2: string): string {
    return this.getCountryObjByA2(a2).capital;
  }

  getContinents(a2: string): string {
    const continentObj = this.getCountryObjByA2(a2).geo.continent;

    // for country over two continents
    return _.values(continentObj).join(', ');
  }

  getSubRegion(a2: string): string {
    return this.getCountryObjByA2(a2).geo.subregion;
  }

  getCallingCodePrefix(a2: string): string {
    const callingCode: string[] | number[] = this.getCountryObjByA2(a2).dialling.calling_code || [''];
    return callingCode.join(', ');
  }

  getArea(a2: string): number {
    return this.getCountryObjByA2(a2).geo.area;
  }

  getPopulationCount(a2: string): number {
    return this.getCountryObjByA2(a2).population.count;
  }

  getPopulationPrecentage(a2: string): number {
    return this.getCountryObjByA2(a2).population.worldPercentage;
  }

  getLanguages(a2: string): string {
    return _.values(this.getCountryObjByA2(a2).languages).join(', ');
  }

  getAnthemLink(a2: string): string {
    const anthemObj: IAnthem = this._anthemsData[a2];
    return anthemObj ? this._anthemsData[a2].link : null;
  }

  getWikiSuffix(a2: string): string {
    return this.getCountryObjByA2(a2).wikiLink; 
  }

  getCountriesA2s(): string[] {
    return _.keys(this._countriesData).sort();
  }

  getCountryObjByA2(a2: string): ICountry {
    return this._countriesData[a2.toUpperCase()];
  }
}
