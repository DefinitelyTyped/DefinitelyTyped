// Type definitions for knockout-amd-helpers
// Project: https://github.com/rniemeyer/knockout-amd-helpers
// Definitions by: David Sichau <https://github.com/DavidSichau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />


interface KnockoutAMDModule {
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

interface KnockoutBindingHandlers {
    module: KnockoutAMDModule;
}
interface KnockoutStatic {

    amdTemplateEngine: KnockoutAMDTemplate
}

declare module "knockout-amd-helpers" {
    export = ko;
}

declare var ko: KnockoutStatic;
