// Type definitions for algolia places 1.16
// Project: https://github.com/algolia/places
// Definitions by: Ghizlane LOTFI <https://github.com/ghizlanelotfi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import {EventEmitter} from 'events';

declare module 'places.js' {

    export default function places(options: IPlacesOptions): EventEmitter;

    export function version(): string;

    interface IPlacesOptions {
        appId: string;
        apiKey: string;
        container: string | HTMLInputElement | NodeList | Element;
    }

    interface IAutompleteOptions {
        autoselect: boolean;
        hint: boolean;
        cssClasses: {
            root: string;
            prefix: any;
        };
        debug: boolean;
    }

    export interface Places {
        rawAnswer: any;
        query: any;
        suggestion: any;
        suggestionIndex: any;

    }

    interface IError {
        message: string;
    }
}
