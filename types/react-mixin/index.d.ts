// Type definitions for react-mixin 2.0.2
// Project: https://github.com/brigand/react-mixin
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />


import * as React from 'react';

declare namespace reactMixin {
    export interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }

    interface ReactMixin {
        decorate(mixin: React.Mixin<any, any>): ClassDecorator;
        onClass<S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
        <S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
    }
}

declare var reactMixin: reactMixin.ReactMixin;

export = reactMixin;
