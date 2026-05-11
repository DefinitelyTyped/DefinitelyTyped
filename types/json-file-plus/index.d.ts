/// <reference types="node" />

/**
 * Read from and write to JSON files, without losing formatting, to minimize diffs.
 *
 * @example
 * import jsonFile = require('json-file-plus');
 * import * as path from 'node:path'
 *
 * const filename = path.join(process.cwd(), 'package.json');
 * const callback = (err: Error | null, result?: unknown) => {
 *     // your code here
 * };
 *
 * jsonFile(filename, (err, file) => {
 *     if (err) { return doSomethingWithError(err); }
 *
 *     file.data; // Direct access to the data from the file
 *     file.format; // extracted formatting data. change at will.
 *
 *     file.get('version'); // get top-level keys
 *     file.get('version', callback); // get top-level key
 *     file.get(); // get entire data
 *     file.get(callback); // get entire data
 *
 *     // pass any plain object into "set" to merge in a deep copy
 *     // please note: references will be broken.
 *     file.set({
 *         foo: 'bar',
 *         bar: {
 *             baz: true
 *         }
 *     });
 *
 *     file.remove('description'); // remove a specific key-value pair
 *     file.remove('description', callback); // remove a specific key-value pair
 *
 *     // change the filename if desired
 *     file.filename = path.join(process.cwd(), 'new-package.json');
 *
 *     // Save the file, preserving formatting.
 *     file.save(callback)
 *         .then(() => {
 *             console.log('success!');
 *         })
 *         .catch(err => {
 *             console.log('error!', err);
 *         });
 * });
 */
declare function readJSON(
    filename: string,
    callback?: (err: Error | null, file: readJSON.JSONFile) => void,
): Promise<readJSON.JSONFile>;

declare namespace readJSON {
    /**
     * Read from JSON files synchronously.
     */
    function sync(filename: string): JSONFile;

    interface Format {
        indent: number | "\t" | " ";
        trailing: boolean;
    }

    class JSONData {
        /**
         * Extracted formatting data.
         */
        format: Format;
        /**
         * Direct access to the data from the file.
         */
        data: unknown;
        constructor(raw: string);
        /**
         * Get top-level keys.
         *
         * @param key The key to get. If empty, the entire data will be returned.
         */
        get(key: PropertyKey, callback?: (err: Error | null, value: unknown) => void): Promise<unknown>;
        get(callback?: (err: Error | null, value: unknown) => void): Promise<unknown>;
        /**
         * Pass any plain object into "set" to merge in a deep copy.
         *
         * Please note: references will be broken.
         */
        set(data: Record<string, unknown>): void;
        /**
         * Remove a specific key-value pair.
         */
        remove(key: string | symbol, callback?: (err: Error | null) => void): Promise<void>;
        stringify(): Buffer;
    }

    class JSONFile extends JSONData {
        /**
         * The filename. Can be changed.
         */
        filename: string;
        constructor(filename: string, raw: string);
        /**
         * Save the file, preserving formatting.
         */
        save(callback?: (err: Error | null) => void): Promise<void>;
        /**
         * Save the file synchronously, preserving formatting.
         */
        saveSync(): void;
    }
}

export = readJSON;
