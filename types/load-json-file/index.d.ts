// Type definitions for load-json-file 2.0
// Project: https://github.com/sindresorhus/load-json-file
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LoadJsonFile {
    /**
     * Returns a promise for the parsed JSON.
     */
    (filepath: string): Promise<any>;

    /**
     * Returns the parsed JSON.
     */
    sync(filepath: string): any;
}

declare const loadJsonFile: LoadJsonFile;

export = loadJsonFile;
