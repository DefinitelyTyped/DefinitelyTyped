// Type definitions for algolia places 1.16
// Project: https://github.com/algolia/places
// Definitions by: Ghizlane LOTFI <https://github.com/ghizlanelotfi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { EventEmitter } from 'events';

declare namespace places {
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
}

declare function places(
    options: places.PlacesOptions
): EventEmitter;

export = places;
