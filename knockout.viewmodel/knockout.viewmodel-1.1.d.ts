/// <reference path="knockout-2.2.d.ts" />

// build: knockout.viewmodel 1.1.3
// http://coderenaissance.github.com/knockout.viewmodel/

interface KnockoutViewModelStatic {
    toModel(viewmodel: any): any;
    fromModel(model: any, options?: any): any;
    updateFromModel(viewmodel: any, model: any);
    
    // INTERNAL flag: enable logging of conversions
    // logs will be written to console
    logging: bool;
}

// Extend ko global
interface KnockoutStatic {
    viewmodel: KnockoutViewModelStatic;
}