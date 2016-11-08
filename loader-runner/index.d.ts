// Type definitions for loader-runner v2.2.0
// Project: http://github.com/webpack/loader-runner.git
// Definitions by: e-cloud <http://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Loader {
    path: string;
    query: string;
    request: any;
    options: any;
    normal: any;
    pitch: any;
    raw: string;
    data: any;
    pitchExecuted: boolean;
    normalExecuted: boolean;
}

export function getContext(resource: string): string;

export interface RunLoaderOption {
    resource: string;
    loaders: any[];
    context: any;
    readResource: (filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void) => void;
}

export function runLoaders(
    options: RunLoaderOption,
    callback: (err: NodeJS.ErrnoException, result: any) => any
): void;


