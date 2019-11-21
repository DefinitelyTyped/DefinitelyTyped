// Type definitions for ngReact v0.3.0
// Project: https://github.com/ngReact/ngReact
// Definitions by: Vicky Lai <https://github.com/velveret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="angular"/>
/// <reference types="react"/>

declare module "ngreact" {
    type ReactDirective = (reactComponentName: string | React.ComponentClass<any>,
                           propNames?: string[],
                           conf?: Object,
                           injectableProps?: Object) => angular.IDirective;
}
