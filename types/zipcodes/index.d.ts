// Type definitions for zipcodes 6.1
// Project: https://github.com/davglass/zipcodes#readme
// Definitions by: Brayden Lopez <https://github.com/headdetect>, Dobes Vandermeer <https://github.com/dobesv>
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

export function lookup(zip: string|number): ZipCode | undefined;

export function lookupByName(city: string, state: string): ZipCode[];

export function lookupByState(state: string): ZipCode[];

export function distance(zipA: string|number, zipB: string|number): number | null;

export function radius(zip: string|number, miles: number, full: boolean): string[] | ZipCode[];

export function toMiles(kilos: number): number;

export function toKilometers(miles: number): number;

export function lookupByCoords(lat: number, lon: number): string | null;
