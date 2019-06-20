// Type definitions for non-npm package ngWYSIWYG 0.6
// Project: https://github.com/psergus/ngWYSIWYG
// Definitions by: Patrick Mac Kay <https://github.com/patrick-mackay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ngWYSIWYG {
    interface Toolbar {
        name: string;
        items: string[];
    }

    interface Config {
        sanitize: boolean;
        toolbar?: Toolbar[];
    }
}
