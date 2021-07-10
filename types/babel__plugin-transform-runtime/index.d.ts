// Type definitions for @babel/plugin-transform-runtime 7.9
// Project: https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime, https://babeljs.io/docs/en/babel-plugin-transform-runtime
// Definitions by: Slava Fomin II <https://github.com/slavafomin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    corejs?: CorejsOption | undefined;
    helpers?: boolean | undefined;
    regenerator?: boolean | undefined;
    useESModules?: boolean | undefined;
    absoluteRuntime?: (boolean | string) | undefined;
    version?: string | undefined;
}

export type CorejsOption = (
    | CorejsVersion
    | { version: CorejsVersion, proposals: boolean }
    | false
);

export type CorejsVersion = (2 | 3);
