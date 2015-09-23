// Type definitions for react-mixin 2.0.2
// Project: https://github.com/brigand/react-mixin
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-mixin" {
    import * as React from 'react';

    namespace reactMixin {
        export interface ClassDecorator {
            <TFunction extends Function>(target: TFunction): TFunction|void;
        }

        interface ReactMixin {
            decorate(mixin: React.Mixin<any, any>): ClassDecorator;
            onClass<S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
            <S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
        }
    }

    var reactMixin: reactMixin.ReactMixin;

    export = reactMixin;
}

