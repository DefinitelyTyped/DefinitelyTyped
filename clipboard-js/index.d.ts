// Type definitions for clipboard-js 0.3.1
// Project: https://github.com/lgarron/clipboard.js
// Definitions by: Mark Wong Siang Kai <https://github.com/markwongsk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace clipboard {

    interface IClipboardJsStatic {
        copy(val: string | Element): Promise<void>;
        paste(): Promise<string>;
    }
}

declare var clipboard: clipboard.IClipboardJsStatic;

export = clipboard;
export as namespace clipboard;
