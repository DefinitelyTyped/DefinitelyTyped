interface DjvStatic {
    (options?: DjvStatic.DjvConfig): DjvStatic.djv;
    new(options?: DjvStatic.DjvConfig): DjvStatic.djv;
    expression(strings: string[], ...keys: string[]): (...values: string[]) => string;
}

declare namespace DjvStatic {
    interface DjvConfig {
        /** a handler to use for generating custom error messages */
        errorHandler?: (() => void) | undefined;
        /** an object containing list of formatters to add for environment */
        formats?: Record<string, (...values: string[]) => string> | undefined;
        /**
         * generating object should be considered as inner
         *
         * Default value is `false`/`undefined`. If `true`, then it avoid creating variables in a
         * generated function body, however without proper wrapper function approach will not work.
         */
        inner?: boolean | undefined;
        /** defines which version of json-schema draft to use, draft-04 by default */
        version?: string | undefined;
        /** handler to apply for environment version */
        versionConfigure?: ((object: object) => void) | undefined;
    }

    interface Resolved {
        schema: object;
        fn: (...args: any[]) => any;
    }

    interface djv {
        resolved: Resolved;

        addFormat(name: string, formatter: string | ((schema: object, tpl: any) => void)): void;

        addSchema(nameOrSchema: string | object, schema?: object): Resolved;

        export(name?: string): string;
        import(config: object): void;
        removeSchema(name: string): void;
        resolve(name: string | object): Resolved;
        setErrorHandler(errorHandler: (errorType: string, property: any) => string): void;
        useVersion(version: string, configure?: any): void;
        validate(name: string, object: object): string | undefined;
    }
}

declare const DjvStatic: DjvStatic;

export = DjvStatic;
