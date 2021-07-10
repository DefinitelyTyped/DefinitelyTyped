// Type definitions for engine-check 1.1
// Project: https://github.com/ppvg/node-engine-check
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace engineCheck {
    interface Options {
        searchRoot?: string | undefined;
        silent?: boolean | undefined;
        debug?: boolean | undefined;
    }
}
declare function engineCheck(options?: engineCheck.Options): void;
export = engineCheck;
