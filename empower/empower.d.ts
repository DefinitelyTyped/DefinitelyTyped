// Type definitions for empower
// Project: https://github.com/twada/empower
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function empower(originalAssert:any, formatter:any, options?:empower.Options):any;

declare module empower {
    export interface Options {
        destructive?: boolean;
        modifyMessageOnRethrow?: boolean;
        saveContextOnRethrow?: boolean;
        patterns?: string[];
    }
}

declare module "empower" {
    export = empower;
}
