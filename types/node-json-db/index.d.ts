// Type definitions for node-json-db
// Project: https://github.com/Belphemur/node-json-db
// Definitions by: Ilya Kuznetsov <https://github.com/kuzn-ilya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class JsonDB {
        /**
     * Create the JSON database
     * @param filename where to save the data base
     * @param saveOnPush saving on modification of the data
     * @param humanReadable is the json file humand readable 
     * @returns {JsonDB}
     * @constructor
     */
    constructor(filename: string, saveOnPush?: boolean, humanReadable?: boolean);

    /**
     * Get the deta stored in the data base
     * @param dataPath path leading to the data
     * @returns {*}
     */
    getData(dataPath: string): any;

    /**
     * Pushing data into the database
     * @param dataPath path leading to the data
     * @param data data to push
     * @param override overriding or not the data, if not, it will merge them
     */
    push(dataPath: string, data: any, override?: boolean): void;

    /**
     * Delete the data
     * @param dataPath path leading to the data
     */
    delete(dataPath: string): void;

    /**
     * Reload the database from the file
     */
    reload(): void;

    /**
     * Manually load the database
     * It is automatically called when the first getData is done
     */
    load(): void;
            
    /**
     * Manually save the database
     * By default you can't save the database if it's not loaded
     * @param force force the save of the database
     */
    save(force?: boolean): void;
}

export = JsonDB;
