/// <reference types="jquery" />

export namespace Rivets {
    interface View {
        build(): void;
        bind(): void;
        unbind(): void;
    }

    interface Rivets {
        // Global binders.
        binders: object;

        // Global components.
        components: object;

        // Global formatters.
        formatters: object;

        // Global sightglass adapters.
        adapters: object;

        // Default attribute prefix.
        prefix: string;

        // Default template delimiters.
        templateDelimiters: string[];

        // Default sightglass root interface.
        rootInterface: string;

        // Preload data by default.
        preloadData: boolean;

        handler(context: any, ev: Event, biding: any): void;

        configure(options?: {
            // Attribute prefix in templates
            prefix?: string | undefined;

            // Preload templates with initial data on bind
            preloadData?: boolean | undefined;

            // Root sightglass interface for keypaths
            rootInterface?: string | undefined;

            // Template delimiters for text bindings
            templateDelimiters?: string[] | undefined;

            // Augment the event handler of the on-* binder
            handler?(context: any, ev: Event, biding: any): void;
        }): void;

        bind(element: HTMLElement | HTMLElement[] | JQuery, models: object, options?: object): View;
    }
}

export const Rivets: Rivets.Rivets;
