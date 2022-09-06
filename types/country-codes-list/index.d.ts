// Type definitions for country-codes-list 1.6
// Project: https://github.com/LucianoGanga/country-codes-list
// Definitions by: LEEJUN KIM <https://github.com/hwanam1111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CountryData {
  countryNameEn: string;
  countryNameLocal: string;
  countryCode: string;
  currencyCode: string;
  currencyNameEn: string;
  tinType: string;
  tinName: string;
  officialLanguageCode: string;
  officialLanguageNameEn: string;
  officialLanguageNameLocal: string;
  countryCallingCode: string;
  region: string;
  flag: string;
}

export type Filter<T> = (element: T, index: number, array: T[]) => T[];

export interface CustomArraySettings {
  sortDataBy?: CountryData;
  sortBy?: any;
  filter?: Filter<CountryData>;
}

export function all(): CountryData[];

export function filter(
  countryProperty: string,
  value: string,
): CountryData[];

export function findOne(
  countryProperty: string,
  value: string,
): CountryData;

export function customArray(
  fields?: { name: string; value: string },
  {
    sortBy,
    sortDataBy,
    filter,
  }?: {
    sortBy: any;
    sortDataBy: any;
    filter: any;
  },
): any[];

export function customList(
  key: string,
  label: string,
  filter?: CustomArraySettings,
): { [key: string]: string };
