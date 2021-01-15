// Type definitions for convict 5.2
// Project: https://github.com/mozilla/node-convict
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Vesa Poikajärvi <https://github.com/vesse>
//                 Eli Young <https://github.com/elyscape>
//                 Suntharesan Mohan <https://github.com/vanthiyathevan>
//                 Igor Strebezhev <https://github.com/xamgore>
//                 Peter Somogyvari <https://github.com/petermetz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

declare namespace convict {
    // Taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
    type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

    type ValidationMethod = 'strict' | 'warn';

    interface ValidateOptions {
        /**
         * If set to warn, any properties specified in config files that are not declared in
         * the schema will print a warning. This is the default behavior. If set to strict,
         * any properties specified in config files that are not declared in the schema will
         * throw errors. This is to ensure that the schema and the config files are in sync.
         */
        allowed?: ValidationMethod;

        /** @deprecated use allowed instead */
        strict?: boolean;
    }

    interface Format {
        name?: string;
        validate?(val: any): void;
        coerce?(val: any): any;
    }

    interface Parser {
        extension: string | string[];
        parse: (content: string) => any;
    }

    type PredefinedFormat =
        | '*'
        | 'int'
        | 'port'
        | 'windows_named_pipe'
        | 'port_or_windows_named_pipe'
        | 'url'
        | 'email'
        | 'ipaddress'
        | 'duration'
        | 'timestamp'
        | 'nat'
        | String
        | Object
        | Number
        | RegExp
        | Boolean;

    interface SchemaObj<T = any> {
        /**
         * You can define a configuration property as "required" without providing a default value.
         * Set its default to null and if your format doesn't accept null it will throw an error.
         */
        default: T | null;
        doc?: string;
        /**
         * From the implementation:
         *
         *  format can be a:
         *   - predefined type, as seen below
         *   - an array of enumerated values, e.g. ["production", "development", "testing"]
         *   - built-in JavaScript type, i.e. Object, Array, String, Number, Boolean
         *   - function that performs validation and throws an Error on failure
         *
         * If omitted, format will be set to the value of Object.prototype.toString.call
         * for the default value
         */
        format?: PredefinedFormat | any[] | ((val: any) => void);
        env?: string;
        arg?: string;
        sensitive?: boolean;
    }

    type Schema<T> = {
        [P in keyof T]: Schema<T[P]> | SchemaObj<T[P]>;
    };

    interface InternalSchema<T> {
        properties: {
            [K in keyof T]: T[K] extends object ? InternalSchema<T[K]> : { default: T[K] }
        };
    }

    interface Options {
        env?: NodeJS.ProcessEnv;
        args?: string[];
    }

    interface Config<T> {
        /**
         * @returns the current value of the name property. name can use dot
         * notation to reference nested values
         */
        get<K extends keyof T | string | null | undefined = undefined>(name?: K):
            K extends null | undefined ? T :
            K extends keyof T ? T[K] :
            any;
        get<K extends keyof T, K2 extends keyof T[K]>(name: string): T[K][K2];
        get<K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(name: K): T[K][K2][K3];
        get<
            K extends keyof T,
            K2 extends keyof T[K],
            K3 extends keyof T[K][K2],
            K4 extends keyof T[K][K2][K3]
            >(name: string): T[K][K2][K3][K4];
        /**
         * @returns the default value of the name property. name can use dot
         * notation to reference nested values
         */
        default<K extends keyof T | string | null | undefined = undefined>(name?: K):
            K extends keyof T ? T[K] :
            K extends null | undefined ? T :
            any;
        default<K extends keyof T>(name?: K): T[K];
        default<K extends keyof T, K2 extends keyof T[K]>(name: string): T[K][K2];
        default<K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(name: K): T[K][K2][K3];
        default<
            K extends keyof T,
            K2 extends keyof T[K],
            K3 extends keyof T[K][K2],
            K4 extends keyof T[K][K2][K3]
            >(name: string): T[K][K2][K3][K4];
        /**
         * @returns true if the property name is defined, or false otherwise
         */
        has<K extends keyof T | string = string>(name: K): boolean;
        has<K extends keyof T, K2 extends keyof T[K]>(name: string): boolean;
        has<K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(name: K): boolean;
        has<
            K extends keyof T,
            K2 extends keyof T[K],
            K3 extends keyof T[K][K2],
            K4 extends keyof T[K][K2][K3]
            >(name: string): boolean;
        /**
         * Sets the value of name to value. name can use dot notation to reference
         * nested values, e.g. "database.port". If objects in the chain don't yet
         * exist, they will be initialized to empty objects
         */
        set<K extends keyof T | string>(name: K, value: K extends keyof T ? T[K] : any): Config<T>;
        set<
            K extends keyof T,
            K2 extends keyof T[K] | string
            >(name: K, value: K2 extends keyof T[K] ? T[K][K2] : any): Config<T>;
        set<
            K extends keyof T,
            K2 extends keyof T[K],
            K3 extends keyof T[K][K2] | string
            >(name: K, value: K3 extends keyof T[K][K2] ? T[K][K2][K3] : any): Config<T>;
        set<
            K extends keyof T,
            K2 extends keyof T[K],
            K3 extends keyof T[K][K2],
            K4 extends keyof T[K][K2][K3] | string
            >(name: K, value: K4 extends keyof T[K][K2][K3] ? T[K][K2][K3][K4] : any): Config<T>;
        /**
         * Loads and merges a JavaScript object into config
         */
        load<U>(conf: U): Config<Overwrite<T, U>>;
        /**
         * Loads and merges JSON configuration file(s) into config
         */
        loadFile<U>(files: string | string[]): Config<Overwrite<T, U>>;
        /**
         * Validates config against the schema used to initialize it
         */
        validate(options?: ValidateOptions): Config<T>;
        /**
         * Exports all the properties (that is the keys and their current values) as a {JSON} {Object}
         * @returns A {JSON} compliant {Object}
         */
        getProperties(): T;
        /**
         * Exports the schema as a {JSON} {Object}
         * @returns A {JSON} compliant {Object}
         */
        getSchema(): InternalSchema<T>;

        /**
         * Exports all the properties (that is the keys and their current values) as a JSON string.
         * @returns A string representing this object
         */
        toString(): string;

        /**
         * Exports the schema as a JSON string.
         * @returns A string representing the schema of this {Config}
         */
        getSchemaString(): string;
    }
}

interface convict {
    addFormat(format: convict.Format): void;
    addFormats(formats: { [name: string]: convict.Format }): void;
    addParser(parsers: convict.Parser | convict.Parser[]): void;
    <T>(config: convict.Schema<T> | string, opts?: convict.Options): convict.Config<T>;
}
declare var convict: convict;
export = convict;
