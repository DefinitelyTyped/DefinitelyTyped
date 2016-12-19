// Type definitions for Knockout Viewmodel 1.1.3
// Project: http://coderenaissance.github.com/knockout.viewmodel/
// Definitions by: Oisin Grehan <https://github.com/oising>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutViewModelStatic {
    toModel(viewmodel: any): any;
    fromModel(model: any, options?: any): any;
    updateFromModel(viewmodel: any, model: any): any;
    
    // INTERNAL flag: enable logging of conversions
    // logs will be written to console
    logging: boolean;
}

// Extend ko global
interface KnockoutStatic {
    viewmodel: KnockoutViewModelStatic;
}