// Type definitions for knockout-amd-helpers
// Project: https://github.com/rniemeyer/knockout-amd-helpers
// Definitions by: David Sichau <https://github.com/DavidSichau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

interface KnockoutAMDModule extends ko.BindingHandler {
    baseDir: string;
    initializer: string;
    disposeMethod: string;
    templateProperty: string;
}

interface KnockoutAMDTemplate {
    defaultPath: string;
    defaultSuffix: string;
    defaultRequireTextPluginName: string;
}


declare namespace ko {
    interface BindingHandlers {
        module: KnockoutAMDModule;
    }
    const amdTemplateEngine: KnockoutAMDTemplate;
}


declare module 'knockout-amd-helpers' {
    export = ko;
}
