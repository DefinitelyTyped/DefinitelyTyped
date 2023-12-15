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
