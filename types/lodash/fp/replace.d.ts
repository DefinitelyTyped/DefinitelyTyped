import _ = require("../index");

declare namespace Lodash {
    interface Replace {
        (): Replace;
        (replacement: ReplaceFunction | string): Replace1x1;
        (replacement: ReplaceFunction | string, string: string): Replace1x2;
        (replacement: ReplaceFunction | string, string: string, pattern: RegExp | string): string;
    }
    interface Replace1x1 {
        (): Replace1x1;
        (string: string): Replace1x2;
        (string: string, pattern: RegExp | string): string;
    }
    interface Replace1x2 {
        (): Replace1x2;
        (pattern: RegExp | string): string;
    }
}

declare const replace: Lodash.Replace;
export = replace;
