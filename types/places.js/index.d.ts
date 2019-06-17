// Type definitions for algolia places 1.16.4
// Project: https://github.com/algolia/places
// Definitions by: Ghizlane LOTFI <https://github.com/ghizlanelotfi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'places.js' {
    import {EventEmitter} from 'events';
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
