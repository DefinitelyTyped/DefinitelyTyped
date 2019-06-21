// Type definitions for algolia places 1.16
// Project: https://github.com/algolia/places
// Definitions by: Ghizlane LOTFI <https://github.com/ghizlanelotfi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import {EventEmitter} from 'events';

declare namespace algoliaPlaces {

    function version(): string;

    interface PlacesOptions {
        appId: string;
        apiKey: string;
        container: string | HTMLInputElement | NodeList | Element;
    }

    interface AutompleteOptions {
        autoselect: boolean;
        hint: boolean;
        cssClasses: {
            root: string;
            prefix: any;
        };
        debug: boolean;
    }

    interface Places {
        rawAnswer: any;
        query: any;
        suggestion: any;
        suggestionIndex: any;

    }

    interface Error {
        message: string;
    }

    export function places(options: PlacesOptions): EventEmitter;
}

declare function algoliaPlaces(
    options: algoliaPlaces.PlacesOptions
): EventEmitter;

export = algoliaPlaces;
