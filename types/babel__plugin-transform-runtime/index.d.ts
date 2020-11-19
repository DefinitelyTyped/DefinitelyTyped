// Type definitions for @babel/plugin-transform-runtime 7.9
// Project: https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime, https://babeljs.io/docs/en/babel-plugin-transform-runtime
// Definitions by: Slava Fomin II <https://github.com/slavafomin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    corejs?: CorejsOption;
    helpers?: boolean;
    regenerator?: boolean;
    useESModules?: boolean;
    absoluteRuntime?: (boolean | string);
    version?: string;
}

export type CorejsOption = (
    | CorejsVersion
    | { version: CorejsVersion, proposals: boolean }
    | false
);

export type CorejsVersion = (2 | 3);
