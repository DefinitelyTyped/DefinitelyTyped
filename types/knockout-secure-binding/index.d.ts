// Type definitions for knockout-secure-binding
// Project: https://github.com/brianmhunt/knockout-secure-binding
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

interface KnockoutSecureBindingOptions {
    attribute?: string | undefined;
    globals?: any;
    bindings?: KnockoutBindingHandlers | undefined;
    noVirtualElements?: boolean | undefined;
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
