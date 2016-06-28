// Type definitions for Marked
// Project: https://github.com/psergus/ngWYSIWYG
// Definitions by: Patrick Mac Kay <https://github.com/patrick-mackay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ngWYSIWYG {
    export interface Toolbar {
        name: string;
        items: string[];
    }

    export interface Config {
        sanitize: boolean;
        toolbar?: Toolbar[];
    }
}
