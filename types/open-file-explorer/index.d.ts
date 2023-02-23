// Type definitions for open-file-explorer 1.0
// Project: https://github.com/vibhor1997a/nodejs-open-file-explorer
// Definitions by: Nanashi. <https://github.com/sevenc-nanashi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Opens the Explorer and executes the callback function
 * @param path The path string to be opened in the explorer
 * @param callback Callback function to which error is passed if some error occurs
 */
declare function openExplorer(
    path: string,
    callback: (error: Error | undefined) => void
): void;

export = openExplorer;
