// Type definitions for knockout-secure-binding
// Project: https://github.com/brianmhunt/knockout-secure-binding
// Definitions by: Pine Mizune <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutSecureBindingOptions {
    attribute?: string;
    globals?: any;
    bindings?: KnockoutBindingHandlers;
    noVirtualElements?: boolean;
}

interface KnockoutSecureBindingProvider extends KnockoutBindingProvider {
    new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider;
}

interface KnockoutStatic {
    secureBindingsProvider: {
        new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider;
    };
}

declare module "knockout-secure-binding" {
    var klass: {
        new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider;
    };

    export = klass;
}