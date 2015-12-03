// Type definitions for google-maps 3.1.0
// Project: https://www.npmjs.com/package/google-maps
// Definitions by: Deividas Bakanas <deividas@quatrodev.com>, Giedrius Grabauskas <giedrius@quatrodev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../googlemaps/google.maps.d.ts" />

declare namespace GoogleMapsLoader {
    interface CallBack {
        (google: { maps: { Map: google.maps.Map } }): void;
    }
    export var KEY: string;
    export var CLIENT: string;
    export var VERSION: string;
    export var SENSO: boolean;
    export var LIBRARIES: Array<string>;
    export var LANGUAGE: string;
    export function release(callBack: Function): void;
    export function onLoad(callBack?: CallBack): void;
    export function load(callBack?: CallBack): void;
    export function isLoaded(): boolean;

}
declare module 'google-maps' {
    export = GoogleMapsLoader;
}
