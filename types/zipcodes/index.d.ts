// Type definitions for zipcodes 6.0
// Project: https://github.com/davglass/zipcodes
// Definitions by: Brayden Lopez <https://github.com/headdetect>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ZipCode {
  zip: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
}

export namespace ZipCodes {
  function lookup(zip: any): ZipCode;

  function lookupByName(city: string, state: string): ZipCode[];

  function lookupByState(state: string): ZipCode[];

  function distance(zipA: ZipCode, zipB: ZipCode): number;

  function radius(zip: ZipCode, miles: number, full: boolean): string | ZipCode[];

  function toMiles(kilos: number): number;

  function toKilometers(miles: number): number;

  function lookupByCoords(lat: number, lon: number): ZipCode;
}
