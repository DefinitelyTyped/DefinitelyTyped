// Type definitions for knockout-secure-binding
// Project: https://github.com/brianmhunt/knockout-secure-binding
// Definitions by: Pine Mizune <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

interface KnockoutSecureBindingOptions {
    attribute?: string;
    globals?: any;
    bindings?: ko.BindingHandlers;
    noVirtualElements?: boolean;
}

interface KnockoutSecureBindingProvider extends ko.IBindingProvider {
    new (options?: KnockoutSecureBindingOptions): ko.IBindingProvider;
}

declare namespace ko {
    const secureBindingsProvider: KnockoutSecureBindingProvider;
}

declare module "knockout-secure-binding" {
    var klass: KnockoutSecureBindingProvider;

    export = klass;
}
