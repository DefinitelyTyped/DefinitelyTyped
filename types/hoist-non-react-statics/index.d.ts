// Type definitions for hoist-non-react-statics 3.0
// Project: https://github.com/mridgway/hoist-non-react-statics#readme
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare function hoistNonReactStatics<
    T extends React.ComponentType,
    S extends React.ComponentType,
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
            // only extends static properties, exclude instance properties
            'prototype' | keyof C
        >]: S[key]
    };

export = hoistNonReactStatics;
