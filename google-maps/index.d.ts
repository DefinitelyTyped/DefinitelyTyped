// Type definitions for google-maps 3.1.0
// Project: https://www.npmjs.com/package/google-maps
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="googlemaps" />

declare namespace GoogleMapsLoader {
    interface CallBack {
        (google: { maps: { Map: google.maps.Map } }): void;
    }
    export var KEY: string;
    export var CLIENT: string;
    export var VERSION: string;
    export var SENSOR: boolean;
    export var LIBRARIES: Array<string>;
    export var LANGUAGE: string;
    export function release(callBack: Function): void;
    export function onLoad(callBack?: CallBack): void;
    export function load(callBack?: CallBack): void;
    export function isLoaded(): boolean;

}
export = GoogleMapsLoader;
export as namespace GoogleMapsLoader;
