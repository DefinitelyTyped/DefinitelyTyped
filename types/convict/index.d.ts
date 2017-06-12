// Type definitions for convict 3.0
// Project: https://github.com/mozilla/node-convict
// Definitions by: Wim Looman <https://github.com/Nemo157>, Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace convict {

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
        validate?: (val: any) => void;
        coerce?: (val: any) => any;
    }

    interface Schema {
        [name: string]: convict.Schema | {
            default: any;
            doc?: string;
            /**
             * From the implementation:
             *
             *  format can be a:
             *   - predefine type, as seen below
             *   - an array of enumerated values, e.g. ["production", "development", "testing"]
             *   - built-in JavaScript type, i.e. Object, Array, String, Number, Boolean
             *   - or if omitted, the Object.prototype.toString.call of the default value
             *
             * The docs also state that any function that validates is ok too
             */
            format?: string | Array<any> | Function;
            env?: string;
            arg?: string;
        };
    }

    interface Config {
        /**
         * @returns the current value of the name property. name can use dot
         * notation to reference nested values
         */
        get(name?: string): any;
        /**
         * @returns the default value of the name property. name can use dot
         * notation to reference nested values
         */
        default(name: string): any;
        /**
         * @returns true if the property name is defined, or false otherwise
         */
        has(name: string): boolean;
        /**
         * Sets the value of name to value. name can use dot notation to reference
         * nested values, e.g. "database.port". If objects in the chain don't yet
         * exist, they will be initialized to empty objects
         *
         * @return {Config} instance
         */
        set(name: string, value: any): Config;
        /**
         * Loads and merges a JavaScript object into config
         *
         * @return {Config} instance
         */
        load(conf: Object): Config;
        /**
         * Loads and merges one JSON configuration file into config
         *
         * @return {Config} instance
         */
        loadFile(file: string): Config;
        /**
         * Loads and merges multiple JSON configuration files into config
         *
         * @return {Config} instance
         */
        loadFile(files: string[]): Config;
        /**
         * Validates config against the schema used to initialize it
         *
         * @param options
         */
        validate(options?: ValidateOptions): Config;
        /**
         * Exports all the properties (that is the keys and their current values) as a {JSON} {Object}
         * @returns {Object} A {JSON} compliant {Object}
         */
        getProperties(): Object;
        /**
         * Exports the schema as a {JSON} {Object}
         * @returns {Object} A {JSON} compliant {Object}
         */
        getSchema(): Object;

        /**
         * Exports all the properties (that is the keys and their current values) as a JSON string.
         * @returns {String} a string representing this object
         */
        toString(): string;

        /**
         * Exports the schema as a JSON string.
         * @returns {String} a string representing the schema of this {Config}
         */
        getSchemaString(): string;
    }
}
interface convict {
    addFormat(format: convict.Format): void;
    addFormats(formats: { [name: string]: convict.Format }): void;
    (config: convict.Schema): convict.Config;
}
declare var convict: convict;
export = convict;
