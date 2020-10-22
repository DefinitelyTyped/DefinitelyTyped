// Type definitions for conductor-animate 1.0
// Project: https://github.com/TaeKimJR/conductor-animate#readme
// Definitions by: Tae Kim <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

interface Animations {
    [K: string]: React.ComponentClass<any> | React.FunctionComponent<any>;
}

interface Config {
    animation: string;
}

interface AnimatedProps {
    additional?: object;
    children?: React.ReactNode | React.ReactNodeArray | null;
    id: string;
}

declare class Animated extends React.PureComponent<AnimatedProps> { }

interface ConductorProps {
    animations: Animations;
    children: React.ReactNode | React.ReactNodeArray;
    config: { [K: string]: Config } | ((id: string, additional: object) => Config);
}

declare class Conductor extends React.PureComponent<ConductorProps> { }

export { Animated, Conductor };
