// Type definitions for archy
// Project: https://github.com/substack/node-archy
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "archy" {
    function archy(obj: archy.Data, prefix?: string, opts?: archy.Options): string;
    function archy(obj: string, prefix?: string, opts?: archy.Options): string;

    module archy {
        interface Data {
            label: string;
            nodes?: (Data | string)[];
        }
        interface Options {
            unicode?: boolean;
        }
    }

    export = archy;
}
