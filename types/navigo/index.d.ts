// Type definitions for navigo 4.0
// Project: https://github.com/krasimir/navigo
// Definitions by: Adrian Ehrsam <https://github.com/aersamkull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface NavigoHooks {
    before?(done: (suppress?: boolean) => void): void;
    after?(): void;
}
type RouteHandler = ((parametersObj: any, query: string) => void) | { as: string; uses(parametersObj: any): void };

declare class Navigo {
    /**
     * Constructs the router
     * @param root The main URL of your application.
     * @param useHash If useHash set to true then the router uses an old routing approach with hash in the URL. Navigo anyways falls back to this mode if there is no History API supported.
     */
    constructor(root?: string | null, useHash?: boolean);

    on(location: string, handler: RouteHandler, hooks?: NavigoHooks): Navigo;
    on(location: RegExp, handler: (...parameters: string[]) => void, hooks?: NavigoHooks): Navigo;
    on(routes: { [key: string]: RouteHandler }): Navigo;

    on(rootHandler: RouteHandler, hooks?: NavigoHooks): Navigo;

    notFound(handler: ((query: string) => void), hooks?: NavigoHooks): void;

    navigate(path: string, absolute?: boolean): void;

    updatePageLinks(): void;

    generate(path: string, params?: any): string;

    resolve(currentURL?: string): boolean;

    link(path: string): string;

    disableIfAPINotAvailable(): void;

    pause(): void;

    resume(): void;

    destroy(): void;
}
export = Navigo;
export as namespace Navigo;
