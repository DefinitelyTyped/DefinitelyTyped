// Type definitions for Knockout Viewmodel 1.1.3
// Project: http://coderenaissance.github.com/knockout.viewmodel/
// Definitions by: Oisin Grehan <https://github.com/oising>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

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
declare namespace ko {
    const viewmodel: KnockoutViewModelStatic;
}
