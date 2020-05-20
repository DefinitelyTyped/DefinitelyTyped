// Type definitions for google-maps 3.2.1
// Project: https://www.npmjs.com/package/google-maps
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.0

/// <reference types="googlemaps" />

declare namespace GoogleMapsLoader {
    type google = { maps: typeof google.maps };
    interface CallBack {
        (google: google): void;
    }

    export var KEY: string;
    export var URL: string;
    export var LIBRARIES: Array<string>;
    export var CLIENT: string;
    export var CHANNEL: string;
    export var LANGUAGE: string;
    export var REGION: string;
    export var VERSION: string;
    export var WINDOW_CALLBACK_NAME: string;

    export function release(callBack: Function): void;
    export function onLoad(callBack?: CallBack): void;
    export function load(callBack?: CallBack): void;
    export function isLoaded(): boolean;
    export function createLoader(): void;
    export function createUrl(): string;
    export function makeMock(): void;
}

export = GoogleMapsLoader;
export as namespace GoogleMapsLoader;
