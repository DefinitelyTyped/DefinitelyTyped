// Type definitions for routie 0.3.2
// Project: https://github.com/jgallen23/routie
// Definitions by: Adilson <https://github.com/Adilson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace routie {
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
