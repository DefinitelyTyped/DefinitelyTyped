// Type definitions for react-side-effect v1.0.2
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare function withSideEffect(
    reducePropsToState: (propsList: any[]) => any,
    handleStateChangeOnClient: (state: any) => any,
    mapStateOnServer?: (state: any) => any
): ClassDecorator;

declare class ElementClass extends React.Component<any> {}

interface ClassDecorator {
    <T extends (typeof ElementClass)>(component:T): T;
}

declare namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073

export = withSideEffect;
