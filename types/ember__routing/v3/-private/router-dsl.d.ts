export default class RouterDSL {
    constructor(name: string | null, options: object);
    route(name: string, callback: (this: RouterDSL) => void): void;
    route(
        name: string,
        options?: { path?: string | undefined; resetNamespace?: boolean | undefined },
        callback?: (this: RouterDSL) => void,
    ): void;
    mount(
        name: string,
        options?: {
            as?: string | undefined;
            path?: string | undefined;
            resetNamespace?: boolean | undefined;
            engineInfo?: any;
        },
    ): void;
}
