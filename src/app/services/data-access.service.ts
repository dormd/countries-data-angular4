import { Injectable, Inject } from '@angular/core';
import { Countries, ICountry, Anthems, IAnthem } from 'countries-data';

import { COUNTRIES_DATA, ANTHEMS_DATA } from '../tokens/countries.tokens';

@Injectable()
export class DataAccessService {

  constructor(@Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
              @Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

  public getCapital(a2: string) {
    return this._countriesData[a2.toUpperCase()].capital;
  }
}
