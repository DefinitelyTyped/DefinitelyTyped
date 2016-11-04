// Type definitions for react-side-effect v1.0.2
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare module "react-side-effect" {

    import React = __React;

    function withSideEffect(
        reducePropsToState: (propsList: any[]) => any,
        handleStateChangeOnClient: (state: any) => any,
        mapStateOnServer?: (state: any) => any
    ): ClassDecorator;

    class ElementClass extends React.Component<any, any> {}

    interface ClassDecorator {
        <T extends (typeof ElementClass)>(component:T): T;
    }

    namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073

    export = withSideEffect;
}
