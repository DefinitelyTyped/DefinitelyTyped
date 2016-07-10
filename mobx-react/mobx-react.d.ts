// Type definitions for mobx v1.0.0
// Project: https://github.com/mweststrate/mobx-react
// Definitions by: Michel Weststrate <https://github.com/mweststrate/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react-global.d.ts" />

declare module "mobx-react" {
    /**
     * Turns a React component or stateless render function into a reactive component.
     */
    export function observer<P>(clazz: React.ClassicComponentClass<P>): React.ClassicComponentClass<P>;
    export function observer<TFunction extends React.ComponentClass<any>>(target: TFunction): void; // decorator signature
    export function observer<P>(clazz: React.ComponentClass<P>): React.ComponentClass<P>;
    export function observer<P>(renderFunction: (props: P) => React.ReactElement<any>): React.ClassicComponentClass<P>;
}
