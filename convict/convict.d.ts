// Type definitions for node-convict v0.6.0
// Project: https://github.com/mozilla/node-convict
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "convict" {
    module convict {

        interface Format {
            name?: string;
            validate?: (val: any) => void;
            coerce?: (val: any) => any;
        }

        interface Schema {
            [name: string]: convict.Schema | {
                default: any;
                doc?: string;
                format?: any;
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
            validate(): void;
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

