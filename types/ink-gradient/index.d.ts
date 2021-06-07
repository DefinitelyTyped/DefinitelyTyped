// Type definitions for ink-gradient 2.0
// Project: https://github.com/sindresorhus/ink-gradient
// Definitions by: aaronleopold <https://github.com/aaronleopold>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

// This needs to be updated when TypeScript enhances their support for mutual
// exclusivity in properties. This edit I made will now throw errors when
// a user gives both of the mutually exclusive props.

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

interface PropsName {
    name:
        | 'cristal'
        | 'teen'
        | 'mind'
        | 'morning'
        | 'vice'
        | 'passion'
        | 'fruit'
        | 'instagram'
        | 'atlas'
        | 'retro'
        | 'summer'
        | 'pastel'
        | 'rainbow';
}

// note, object[] in this case refers to objects interpretable by tinycolor2
interface PropsColor {
    colors: string[] | object[];
}

type GradientProps = XOR<PropsName, PropsColor> & { children: React.ReactNode };

declare const Gradient: React.FC<GradientProps>;
export = Gradient;
