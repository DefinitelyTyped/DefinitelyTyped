// Type definitions for @ungap/structured-clone 0.3
// Project: https://www.npmjs.com/package/@ungap/structured-clone#:~:text=github.com/ungap/structured%2Dclone%23readme
// Definitions by: Flavian Hautbois <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace structuredClone;

/**
 * Returns a clone of the input value.
 * @param any a serializable value.
 * @param options an object with a `lossy` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns a clone of the input value
 */
declare function structuredClone<T>(any: T, options?: { lossy?: boolean }): T;
export = structuredClone;

declare namespace structuredClone {
    type SerializedRecordIndex = [number, any] | SerializedRecordIndex[];
    type SerializedRecord = [SerializedRecordIndex[], ...[number, any][]];

    /**
     * Serialize the input.
     * @param serializable a serializable value.
     * @param options an object with a `lossy` property that,
     *  if `true`, will not throw errors on incompatible types, and behave more
     *  like JSON stringify would behave. Symbol and Function will be discarded.
     * @returns an array of SerializedRecord
     */
    function serialize(serializable: any, options?: { lossy?: boolean }): SerializedRecord;

    /**
     * Deserialize the output.
     * @param serialized a previously serialized value.
     * @returns Deserialized output
     */
    function deserialize(serialized: SerializedRecord): any;
}
