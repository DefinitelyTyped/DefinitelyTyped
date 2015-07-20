// Type definitions for Knockout.Mapper 
// Project: https://github.com/LucasLorentz/knockout.mapper
// Definitions by: Brandon Meyer <https://github.com/BMeyerKC>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutMapper {
    fromJS(value: any, options?: any, target?: any, wrap?: boolean): any;
    toJS(value: any, options?: any): any;
}

interface KnockoutStatic {
    mapper: KnockoutMapper;
}
