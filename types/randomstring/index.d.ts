// Type definitions for randomstring 1.1.4
// Project: https://github.com/klughammer/node-randomstring
// Definitions by: Isman Usoh <https://github.com/isman-usoh/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Randomstring {
    interface GenerateOptions {
        length?: number;
        readable?: boolean;
        charset?: string;
        capitalization?: string;
    }

    function generate(options?: GenerateOptions | number): string;
}

declare module "randomstring" {
    export = Randomstring;
}
