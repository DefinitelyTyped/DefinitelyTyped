// Type definitions for ngReact v0.3.0
// Project: https://github.com/ngReact/ngReact
// Definitions by: Vicky Lai <https://github.com/velveret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="../react/react.d.ts"/>

declare module "ngreact" {
    type ReactDirective = (reactComponentName: string | __React.ComponentClass<any>,
                           propNames?: string[],
                           conf?: Object,
                           injectableProps?: Object) => angular.IDirective;
}
