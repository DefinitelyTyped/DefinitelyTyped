declare function jjv(): jjv.Env;

declare namespace jjv {
    interface Errors {
        validation: {
            [property: string]: {
                required?: boolean | undefined;
                type?: string | undefined;
            };
        };
    }

    interface Options {
        checkRequired?: boolean | undefined;
        useDefault?: boolean | undefined;
        useCoerce?: boolean | undefined;
        removeAdditional?: boolean | undefined;
    }

    interface Env {
        defaultOptions: Options;

        addSchema(name: string, schema: Object): void;

        addType(name: string, parse: (input: any) => any): void;
        addFormat(name: string, parse: (input: any) => any): void;
        addCheck(name: string, check: (input: any, comparator: any) => any): void;
        addTypeCoercion(name: string, coerce: (input: any) => any): void;

        validate(name: string, object: any, options?: Options): Errors;
        validate(schema: Object, object: any, options?: Options): Errors;
    }
}

export = jjv;
