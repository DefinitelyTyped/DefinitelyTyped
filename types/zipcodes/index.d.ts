// Type definitions for zipcodes 6.0
// Project: https://github.com/davglass/zipcodes#readme
// Definitions by: Brayden Lopez <https://github.com/headdetect>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ZipCodes;

export interface ZipCode {
    zip: string;
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    country: string;
}

export function lookup(zip: any): ZipCode;

export function lookupByName(city: string, state: string): ZipCode[];

export function lookupByState(state: string): ZipCode[];

export function distance(zipA: ZipCode, zipB: ZipCode): number;

export function radius(zip: ZipCode, miles: number, full: boolean): string | ZipCode[];

export function toMiles(kilos: number): number;

export function toKilometers(miles: number): number;

export function lookupByCoords(lat: number, lon: number): ZipCode;
