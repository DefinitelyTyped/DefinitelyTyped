// Type definitions for open-file-explorer 1.0
// Project: https://github.com/vibhor1997a/nodejs-open-file-explorer#readme
// Definitions by: sevenc-nanashi <https://github.com/sevenc-nanashi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = open_file_explorer;

declare function open_file_explorer(path: string, callback: (err: Error | undefined) => void): void;
