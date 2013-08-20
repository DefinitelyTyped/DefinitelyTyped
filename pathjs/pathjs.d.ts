// Type definitions for PathJs
// Project: https://github.com/mtrpcic/pathjs
// Definitions by: Jaben Cargman <https://github.com/Jaben>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface PathJsRoute {
    path: string;
    params: any;

    to(fn: () => void);
    enter(fn: any);
    exit(fn: () => void);
}

interface PathJsRouteContext {
    current: PathJsRoute;
    root: PathJsRoute;    
    previous: PathJsRoute;
    defined: PathJsRoute[];
    rescue: () => void;
}

interface PathJsStatic {
    version: string;
    routes: PathJsRouteContext;
    map(path: string): PathJsRoute;
    root(path: string): void;
    listen(): void;
    rescue(fn: () => void);
}

declare var Path: PathJsStatic;