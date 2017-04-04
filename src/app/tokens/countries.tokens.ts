import { InjectionToken } from '@angular/core';
import { CountriesData, AnthemsData, LanguagesData,
         Countries, Anthems, Languages } from 'countries-data';

export const COUNTRIES_DATA = new InjectionToken('CountriesData');
export const LANGUAGES_DATA = new InjectionToken('LanguagesData');
export const ANTHEMS_DATA = new InjectionToken('AnthemsData');

export const TOKENS_PROVIDERS = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },
    { provide: ANTHEMS_DATA, useValue: AnthemsData }
];
