export = NodeS7;

declare class NodeS7 {
    constructor(opts?: NodeS7.Options);

    /**
     * Connects to a plc
     * @param options Contains options for the current connection only
     * @param callback err is either an error object, or undefined on successful connection.
     */
    initiateConnection(options: NodeS7.ConnectionOptions, callback: (err?: Error) => void): void;

    /**
     * Disconnects from a PLC. This simply terminates the TCP connection.
     * @param callback The callback is called upon completion of the close.
     */
    dropConnection(callback: () => void): void;

    /**
     * Sets a callback for name - address translation.
     *
     * @remarks
     * This is optional - you can choose to use "addItem" etc with absolute addresses.
     *
     * If you use it, translator should be a function that takes a string as an argument, and returns a string in the
     * following format: `<data block number.><memory area><data type><byte offset><.array length>`
     *
     * Examples:
     *
     * - MR30 - MD30 as REAL
     * - DB10,LR32 - LREAL at byte offset 32 in DB10, for 1200/1500 only
     * - DB10,INT6 - DB10.DBW6 as INT
     * - DB10,I6 -same as above
     * - DB10,INT6.2 - DB10.DBW6 and DB10.DBW8 in an array with length 2
     * - PIW30 - PIW30 as INT
     * - DB10,S20.30 - String at offset 20 with length of 30 (actual array length 32 due to format of String type, length byte will be read/written)
     * - DB10,S20.30.3 - Array of 3 strings at offset 20, each with length of 30 (actual array length 32 due to format of String type, length byte will be read/written)
     * - DB10,C22.30 - Character array at offset 22 with length of 30 (best to not use this with strings as length byte is ignored)
     * - DB10,DT0 - Date and time
     * - DB10,DTZ0 - Date and time in UTC
     * - DB10,DTL0 - DTL in newer PLCs
     * - DB10,DTLZ0 - DTL in newer PLCs in UTC
     *
     * The DT type is the well-known DATE_AND_TIME type of S7-300/400 PLCs, a 8-byte-wide field with BCD-encoded parts
     *
     * The DTZ type is the same as the DT, but it expects that the timestamp is in UTC in the PLC (usually NOT the case)
     *
     * The DTL type is the one seen on newer S7-1200/1500 PLCs, is 12-byte long and encodes the timestamp differently
     * than the older DATE_AND_TIME
     *
     * The DTLZ type is also the same as the DTL, but expecting the timestamp in UTC in the PLC
     *
     * In the example above, an object is declared and the translator references that object. It could just as reference
     * a file or database. In any case, it allows cleaner Javascript code to be written that refers to a name instead of
     * an absolute address.
     * @param translator Function that converts names to address strings
     */
    setTranslationCB(translator: (name: string) => string | undefined): void;

    /**
     * Adds `items` to the internal read polling list.
     *
     * If `items` includes the value `_COMMERR` it will return current communication status.
     *
     * @param items Items to add
     */
    addItems(items: NodeS7.ItemList | NodeS7.ItemList[]): void;

    /**
     * Removes `items` to the internal read polling list.
     *
     * If `items` is not defined then all items are removed.
     *
     * @param items Items to remove
     */
    removeItems(items?: string | string[]): void;

    /**
     * Writes the item to the PLC using the corresponding value and calls callback when done.
     *
     * You should monitor the return value - if it is non-zero, the write will not be processed as there is already one
     * it progress, and the callback will not be called.
     *
     * @param item The item to write
     * @param value The corresponding value
     * @param callback err: `true` if ANY of the items have "bad quality"
     */
    writeItems(item: string, value: NodeS7.S7Types, callback: (err: boolean) => void): number;
    /**
     * Writes items to the PLC using the corresponding values and calls callback when done.
     *
     * You should monitor the return value - if it is non-zero, the write will not be processed as there is already one
     * it progress, and the callback will not be called.
     *
     * @param items The items to write
     * @param values The corresponding values to the items
     * @param callback err: `true` if ANY of the items have "bad quality"
     */
    writeItems(items: string[], values: NodeS7.S7Types[], callback: (err: boolean) => void): number;

    /**
     * Reads the internal polling list and calls `callback` when done
     *
     * @param callback err: `true` if ANY of the items have "bad quality" values: an object containing the values being read as keys and their value (from the PLC) as the value
     */
    readAllItems(callback: (err: boolean, values: NodeS7.ReadValues) => void): void;
}

declare namespace NodeS7 {
    interface Options {
        /**
         * If set to true, the NodeS7 library will not output anything to the console.
         *
         * This option is global and shared between instances of the NodeS7 class
         */
        silent?: boolean | undefined;
        /**
         * If set to true, the NodeS7 library will output additional data to the console.
         *
         * This option is global and shared between instances of the NodeS7 class
         */
        debug?: boolean | undefined;
    }

    interface ConnectionOptions {
        rack?: number | undefined;
        slot?: number | undefined;
        port?: number | undefined;
        host?: string | undefined;
        timeout?: number | undefined;
        localTSAP?: number | undefined;
        remoteTSAP?: number | undefined;
    }

    interface ReadValues {
        [key: string]: S7Types;
    }

    type S7Types = string | number | boolean;
    type ItemList = string | "_COMMERR";
}
