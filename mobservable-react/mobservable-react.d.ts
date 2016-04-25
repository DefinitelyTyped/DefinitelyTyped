// Type definitions for mobservable v0.1.8
// Project: https://github.com/mweststrate/mobservable-react
// Definitions by: Michel Weststrate <https://github.com/mweststrate/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react-global.d.ts" />


/**
 * Turns a React component or stateless render function into a reactive component.
 */
export declare function reactiveComponent<P>(clazz: React.ClassicComponentClass<P>): React.ClassicComponentClass<P>;
export declare function reactiveComponent<TFunction extends React.ComponentClass<any>>(target: TFunction): void; // decorator signature
export declare function reactiveComponent<P>(clazz: React.ComponentClass<P>): React.ComponentClass<P>;
export declare function reactiveComponent<P>(renderFunction: (props: P) => React.ReactElement<any>): React.ClassicComponentClass<P>;
