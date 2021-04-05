// Type definitions for empower 1.2
// Project: https://github.com/twada/empower
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function empower(originalAssert: any, formatter: any, options?: empower.Options): any;

declare namespace empower {
    interface Options {
        destructive?: boolean;
        modifyMessageOnRethrow?: boolean;
        saveContextOnRethrow?: boolean;
        patterns?: string[];
    }
}

export = empower;
