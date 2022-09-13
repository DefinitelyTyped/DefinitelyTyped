// Type definitions for google-polyline 1.0
// Project: https://github.com/jhermsmeier/node-google-polyline
// Definitions by: Babette Stam <https://github.com/Babettestam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function encode(latLng: Array<[number, number]>): string;
export function decode(encoded: string): Array<[number, number]>;
