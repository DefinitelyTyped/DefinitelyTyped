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
        silent?: boolean | undefined;
    }
}

declare var routie: routie.Routie;
