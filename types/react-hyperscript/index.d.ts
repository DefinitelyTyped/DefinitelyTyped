// Type definitions for react-hyperscript 3.0
// Project: https://github.com/mlmorg/react-hyperscript
// Definitions by: roshal <https://github.com/roshal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type * as React from 'react';

declare namespace $ {}

declare function $(
    children?: React.ReactNode | React.ReactNode[],
): React.ReactElement;

declare function $(
    componentOrTag: React.ComponentClass | React.FunctionComponent | string,
    children?: React.ReactNode | React.ReactNode[],
): React.ReactElement;

declare function $<P>(
    componentOrTag: React.ComponentClass<P> | React.FunctionComponent<P> | string,
    children?: React.ReactNode | React.ReactNode[],
): React.ReactElement<P>;

declare function $<P>(
    componentOrTag: React.ComponentClass<P> | React.FunctionComponent<P> | string,
    properties: P,
    children?: React.ReactNode | React.ReactNode[],
): React.ReactElement<P>;

export = $;
