// Type definitions for react-side-effect 1.0
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
//                 Martin Charles <https://github.com/0xcaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

declare function withSideEffect<TProp, TState>(
    reducePropsToState: (propsList: TProp[]) => TState,
    handleStateChangeOnClient: (state: TState) => void,
    mapStateOnServer?: (state: TState) => void
): ClassDecorator<TProp>;

type ClassDecorator<TProp> = (
    component: React.ComponentType<TProp>
) => React.ComponentType<TProp>;

declare namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073

export = withSideEffect;
