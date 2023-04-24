// Type definitions for file-manager 2.0
// Project: https://github.com/DoctorMcKay/node-file-manager#readme
// Definitions by: repository <https://github.com/repository>
//                 Joshua Jeschek <https://github.com/joshuajeschek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import EventEmitter = require('events');

export = FileManager;

declare class FileManager extends EventEmitter {
    /**
     * Initialize a new FileManager instance
     * @param [storageDirectory] - Directory where files will be stored. No trailing slash. No nesting. Use `null` to disable local disk storage.
     */
    constructor(storageDirectory: string | null);

    /**
     * The local disk storage directory location can be changed at any time by assigning to this property.
     */
    directory: string;

    /**
     * Returns `true` if either a storage directory is set, or if save and read handlers have been registered.
     */
    isEnabled(): boolean;

    /**
     * Saves a file. Returns a `Promise` that will be fulfilled once the file is saved, or rejected if there's an error.
     * @param filename
     * @param contents - Either a `Buffer`, or some other value that will have `.toString()` called on it, then it will be converted to a `Buffer` by interpreting the string as UTF-8
     */
    saveFile(filename: string, contents: Buffer | WithToString): Promise<void>;

    /**
     * Saves a file. Returns a `Promise` that will be fulfilled once the file is saved, or rejected if there's an error.
     * @param filename
     * @param contents - Either a `Buffer`, or some other value that will have `.toString()` called on it, then it will be converted to a `Buffer` by interpreting the string as UTF-8
     */
    writeFile(filename: string, contents: Buffer | WithToString): Promise<void>;

    /**
     * Saves multiple files. Returns a `Promise` that will be fulfilled once all files are saved, or rejected if there's an error saving any file
     * @param files - An object where keys are filenames and values are file contents
     */
    saveFiles(files: Record<string, Buffer | WithToString>): Promise<void>;

    /**
     * Saves multiple files. Returns a `Promise` that will be fulfilled once all files are saved, or rejected if there's an error saving any file
     * @param files - An object where keys are filenames and values are file contents
     */
    writeFiles(files: Record<string, Buffer | WithToString>): Promise<void>;

    /**
     * Reads a single file. Returns a `Promise` that fulfills to its content, as a `Buffer`. Rejects if there's an error or the file doesn't exist.
     * @param filename
     */
    readFile(filename: string): Promise<Buffer>;

    /**
     * Reads multiple files.
     * @param filenames - Array of filenames
     */
    readFiles(filenames: string[]): Promise<ReadFilesResult[]>;

    on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeListener<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeAllListeners(event?: keyof Events): this;
}

interface WithToString {
    toString(): string;
}

interface ReadFilesResult {
    filename: string;
    contents?: Buffer;
    error?: Error;
}

interface Events {
    read: [filename: string, callback: (error: Error | null, contents?: Buffer) => void];
    save: [filename: string, contents: Buffer, callback: (error: Error | null) => void];
}
