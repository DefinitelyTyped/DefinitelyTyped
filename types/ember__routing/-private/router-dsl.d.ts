export default class RouterDSL {
    constructor(name: string, options: object);
    route(name: string, callback: (this: RouterDSL) => void): void;
    route(
        name: string,
        options?: { path?: string; resetNamespace?: boolean },
        callback?: (this: RouterDSL) => void
    ): void;
    mount(
        name: string,
        options?: {
            as?: string,
            path?: string,
            resetNamespace?: boolean,
            engineInfo?: any
        }
    ): void;
}
