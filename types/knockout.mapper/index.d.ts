// Type definitions for Knockout.Mapper 
// Project: https://github.com/LucasLorentz/knockout.mapper
// Definitions by: Brandon Meyer <https://github.com/BMeyerKC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutMapper {
    fromJS(value: any, options?: any, target?: any, wrap?: boolean): any;
    toJS(value: any, options?: any): any;
}

interface KnockoutStatic {
    mapper: KnockoutMapper;
}
