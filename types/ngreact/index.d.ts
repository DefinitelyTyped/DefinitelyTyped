/// <reference types="angular"/>
/// <reference types="react"/>

declare module "ngreact" {
    type ReactDirective = (
        reactComponentName: string | React.ComponentClass<any>,
        propNames?: string[],
        conf?: Object,
        injectableProps?: Object,
    ) => angular.IDirective;
}
