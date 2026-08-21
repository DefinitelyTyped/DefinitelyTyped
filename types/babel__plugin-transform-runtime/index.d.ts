export interface Options {
    corejs?: CorejsOption | undefined;
    helpers?: boolean | undefined;
    regenerator?: boolean | undefined;
    useESModules?: boolean | undefined;
    absoluteRuntime?: (boolean | string) | undefined;
    version?: string | undefined;
}

export type CorejsOption =
    | CorejsVersion
    | { version: CorejsVersion; proposals: boolean }
    | false;

export type CorejsVersion = 2 | 3;
