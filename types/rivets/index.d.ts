// Type definitions for rivets
// Project: http://rivetsjs.com/
// Definitions by: Trevor Baron <https://github.com/TrevorDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace Rivets {

    interface View {
        build(): void;
        bind(): void;
        unbind(): void;
    }

    interface Rivets {
        // Global binders.
        binders: Object;

        // Global components.
        components: Object;

        // Global formatters.
        formatters: Object;

        // Global sightglass adapters.
        adapters: Object;

        // Default attribute prefix.
        prefix: string;

        // Default template delimiters.
        templateDelimiters: Array<string>;

        // Default sightglass root interface.
        rootInterface: string;

        // Preload data by default.
        preloadData: boolean;

        handler(context: any, ev: Event, biding: any): void;

        configure(options?: {

            // Attribute prefix in templates
            prefix?: string;

            //Preload templates with initial data on bind
            preloadData?: boolean;

            //Root sightglass interface for keypaths
            rootInterface?: string;

            // Template delimiters for text bindings
            templateDelimiters?: Array<string>

            // Augment the event handler of the on-* binder
            handler?: Function;
        }): void;

        bind(element: HTMLElement, models: Object, options?: Object): View;
        bind(element: JQuery, models: Object, options?: Object): View;
        bind(element: Array<HTMLElement>, models: Object, options?: Object): View;
    }
}

declare var rivets: Rivets.Rivets;
