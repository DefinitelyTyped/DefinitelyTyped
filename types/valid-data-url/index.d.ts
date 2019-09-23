// Type definitions for valid-data-url 2.0
// Project: https://github.com/killmenot/valid-data-url
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace validDataUrl;

declare const validDataUrl: {
    (candidate: string): boolean;
    regex: RegExp;
};

export = validDataUrl;
