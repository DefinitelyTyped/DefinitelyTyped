/// <reference types="node" />

export interface Loader {
    path: string;
    query: string;
    request: string;
    options: any;
    normal: null | ((request: string) => string);
    pitch: null | ((request: string) => string);
    raw: string;
    data: any;
    pitchExecuted: boolean;
    normalExecuted: boolean;
}

export interface RunLoaderOption {
    resource: string;
    loaders: any[];
    context: any;
    readResource: (
        filename: string,
        callback: (err: NodeJS.ErrnoException | null, data: Buffer | null) => void,
    ) => void;
}

export interface RunLoaderResult {
    result?: (Buffer | null)[] | undefined;
    resourceBuffer?: Buffer | null | undefined;
    cacheable: boolean;
    fileDependencies: string[];
    contextDependencies: string[];
}

export interface ExtendedLoaderContext {
    context: string | null;
    loaderIndex: number;
    loaders: Loader[];
    resourcePath: string | undefined;
    resourceQuery: string | undefined;
    async: (() => (() => void) | undefined) | null;
    callback: (() => void) | null;
    cacheable: (flag: boolean) => void;
    dependency: (file: string) => void;
    addDependency: (file: string) => void;
    addContextDependency: (context: string) => void;
    getDependencies: () => string[];
    getContextDependencies: () => string[];
    clearDependencies: () => void;
    resource: string;
    request: string;
    remainingRequest: string;
    currentRequest: string;
    previousRequest: string;
    query: {
        [key: string]: any;
    } | string;
    data: any;
}

export function getContext(resource: string): string;

export function runLoaders(
    options: RunLoaderOption,
    callback: (err: NodeJS.ErrnoException | null, result: RunLoaderResult) => any,
): void;
