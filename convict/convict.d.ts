// Type definitions for node-convict v0.6.0
// Project: https://github.com/mozilla/node-convict
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "convict" {
    namespace convict {

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
            get(name: string): any;
            default(name: string): any;
            has(name: string): boolean;
            set(name: string, value: any): void;
            load(conf: Object): void;
            loadFile(file: string): void;
            loadFile(files: string[]): void;
            validate(options?: { strict?: boolean }): void;
            /**
             * Exports all the properties (that is the keys and their current values) as a {JSON} {Object}
             * @returns {Object} A {JSON} compliant {Object}
             */
            getProperties() : Object;
            /**
             * Exports the schema as a {JSON} {Object}
             * @returns {Object} A {JSON} compliant {Object}
             */
            getSchema() : Object;

            /**
             * Exports all the properties (that is the keys and their current values) as a JSON string.
             * @returns {String} a string representing this object
             */
            toString() : string;

            /**
             * Exports the schema as a JSON string.
             * @returns {String} a string representing the schema of this {Config}
             */
            getSchemaString() : string;
        }
    }
    interface convict {
        addFormat(format: convict.Format): void;
        addFormats(formats: { [name: string]: convict.Format }): void;
        (config: convict.Schema): convict.Config;
    }
    var convict : convict;
    export = convict;
}

