// Type definitions for Knockout.Mapper
// Project: https://github.com/LucasLorentz/knockout.mapper
// Definitions by: Brandon Meyer <https://github.com/BMeyerKC>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

interface KnockoutMapper {
    fromJS(value: any, options?: any, target?: any, wrap?: boolean): any;
    toJS(value: any, options?: any): any;
}

declare namespace ko {
    const mapper: KnockoutMapper;
}
