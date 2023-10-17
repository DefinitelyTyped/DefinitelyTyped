import * as React from "react";

interface Animations {
    [K: string]: React.ComponentClass<any> | React.FunctionComponent<any>;
}

interface Config {
    animation: string;
}

interface AnimatedProps {
    additional?: object | undefined;
    children?: React.ReactNode | React.ReactNodeArray | null | undefined;
    id: string;
}

declare class Animated extends React.PureComponent<AnimatedProps> {}

interface ConductorProps {
    animations: Animations;
    children: React.ReactNode | React.ReactNodeArray;
    config: { [K: string]: Config } | ((id: string, additional: object) => Config);
}

declare class Conductor extends React.PureComponent<ConductorProps> {}

export { Animated, Conductor };
