// Type definitions for hoist-non-react-statics 3.0
// Project: https://github.com/mridgway/hoist-non-react-statics#readme
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface REACT_STATICS {
    childContextTypes: true;
    contextTypes: true;
    defaultProps: true;
    displayName: true;
    getDefaultProps: true;
    getDerivedStateFromProps: true;
    mixins: true;
    propTypes: true;
    type: true;
}

interface KNOWN_STATICS {
    name: true;
    length: true;
    prototype: true;
    caller: true;
    callee: true;
    arguments: true;
    arity: true;
}

declare function hoistNonReactStatics<
    T extends React.ComponentType<any>,
    S extends React.ComponentType<any>,
    C extends {
        [key: string]: true
    } = {}
>(
    TargetComponent: T,
    SourceComponent: S,
    customStatic?: C,
): T &
    {
        [key in Exclude<
            keyof S,
            // only extends static properties, exclude instance properties and known react statics
            keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
        >]: S[key]
    };

export = hoistNonReactStatics;
