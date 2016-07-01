// Type definitions for routie 0.3.2
// Project: https://github.com/jgallen23/routie
// Definitions by: Adilson <https://github.com/Adilson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace routie {
    interface Route {
        constructor(path: string, name: string): Route;
        addHandler(fn: Function): void;
        removeHandler(fn: Function): void;
        run(params: any): void;
        match(path: string, params: any): boolean;
        toURL(params: any): string;
    }

    interface Routie extends RoutieStatic {
        (path: string): void;
        (path: string, fn: Function): void;
        (routes: { [key: string]: Function }): void;
    }

    interface RoutieStatic {
        lookup(name: string, fn: Function): string;
        remove(path: string, fn: Function): void;
        removeAll(): void;
        navigate(path: string, options?: RouteOptions): void;
        noConflict(): Routie;
    }

    interface RouteOptions {
        silent?: boolean;
    }
}

declare var routie: routie.Routie;
