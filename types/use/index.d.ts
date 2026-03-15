/**
 * Easily add plugin support to your node.js application.
 *
 * @param app - The object or function to add plugin support to
 * @param options - Configuration options
 */
declare function use<T extends object>(
    app: T,
    options?: use.Options,
): T & use.UseInstance;

declare namespace use {
    interface Options {
        /** Property name for storing plugin functions */
        prop?: string | undefined;
        /** Hook function called when plugins are registered */
        hook?: ((...args: any[]) => any) | undefined;
    }

    interface UseInstance {
        /** Register a plugin function */
        use(fn: (...args: any[]) => any, options?: object): this;
        use(type: string, fn: (...args: any[]) => any, options?: object): this;

        /** Run all registered plugins against a value */
        run(value: object): object;

        /** Array of registered plugin functions */
        fns: Array<(...args: any[]) => any>;
    }
}

export = use;
