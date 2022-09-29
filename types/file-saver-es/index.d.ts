// Type definitions for file-saver-es 2.0
// Project: https://github.com/wobkenh/FileSaver.js
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 HitkoDev <https://github.com/HitkoDev>
//                 JounQin <https://github.com/JounQin>
//                 BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace saveAs;

/**
 * FileSaver.js implements the saveAs() FileSaver interface in browsers that do not natively support it.
 * @param data - The actual file data blob or URL.
 * @param filename - The optional name of the file to be downloaded. If omitted, the name used in the file data will be used. If none is provided "download" will be used.
 * @param options - Optional FileSaver.js config
 */
export function saveAs(data: Blob | string, filename?: string, options?: FileSaverOptions): void;

/**
 * FileSaver.js implements the saveAs() FileSaver interface in browsers that do not natively support it.
 * @param data - The actual file data blob or URL.
 * @param filename - The optional name of the file to be downloaded. If omitted, the name used in the file data will be used. If none is provided "download" will be used.
 * @param disableAutoBOM - Optional & defaults to `true`. Set to `false` if you want FileSaver.js to automatically provide Unicode text encoding hints
 * @deprecated use `{ autoBom: false }` as the third argument
 */
// tslint:disable-next-line:unified-signatures
export function saveAs(data: Blob | string, filename?: string, disableAutoBOM?: boolean): void;

export interface FileSaverOptions {
    /**
     * Automatically provide Unicode text encoding hints
     * @default false
     */
    autoBom: boolean;
}

declare global {
    interface Window {
        // This module doesn't expose a callable function directly via a CommonJS export so if only the declaration
        // `export as namespace saveAs;` is used it would require users to use this module as `window.saveAs.saveAs(...)`.
        // But the module actually still exposes the `saveAs` function directly on `Window` so the code below is needed
        // to allow to ergonomically use this module as `window.saveAs(...)`.
        saveAs: typeof saveAs;
    }
}
