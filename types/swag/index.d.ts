// Type definitions for swag 0.6.1
// Project: https://github.com/elving/swag
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="handlebars" />

interface SwagStatic {
    registerHelpers(handlebars: typeof Handlebars): void;
}

declare var Swag: SwagStatic;

export = Swag;
export as namespace Swag;

