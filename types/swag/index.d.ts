/// <reference types="handlebars" />

interface SwagStatic {
    registerHelpers(handlebars: typeof Handlebars): void;
}

declare var Swag: SwagStatic;

export = Swag;
export as namespace Swag;
