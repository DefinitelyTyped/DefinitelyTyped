// Type definitions for swag 0.6.1
// Project: https://github.com/elving/swag
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../handlebars/handlebars.d.ts" />

interface SwagStatic {
    registerHelpers(handlebars: typeof Handlebars): void;
}

declare var Swag: SwagStatic;

declare module 'swag' {
    export = Swag;
}
