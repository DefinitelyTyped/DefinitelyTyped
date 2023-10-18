export type BeginDataType =
    | number
    | string
    | boolean
    | null
    | BeginDataType[]
    | { [key: string]: BeginDataType | undefined };

export type ReadonlyBeginDataType =
    | number
    | string
    | boolean
    | null
    | ReadonlyArray<ReadonlyBeginDataType>
    | { readonly [key: string]: ReadonlyBeginDataType | undefined };

export interface DataGetSingleParams {
    readonly table: string;
    readonly key: string;
}
export type DataGetMultipleParams = ReadonlyArray<DataGetSingleParams>;
export interface DataGetEntireTableParams {
    readonly table: string;
    readonly limit?: number;
    /**
     * If your table contains many documents (or a greater number of documents than your limit), it will return a cursor
     */
    readonly cursor?: string;
}
export type DataGetSingleResult =
    | {
        table: string;
        key: string;
        [others: string]: BeginDataType | undefined;
    }
    | null
    | undefined;
export type DataGetSingleCallback = (err: Error | null | undefined, result: DataGetSingleResult) => void;
export type DataGetMultipleResult = Array<{
    table: string;
    key: string;
    [others: string]: BeginDataType | undefined;
}>;
export type DataGetMultipleCallback = (err: Error | null | undefined, result: DataGetMultipleResult) => void;
export type DataGetEntireTableResult = DataGetMultipleResult & {
    cursor?: string;
};
export type DataGetEntireTableCallback = (err: Error | null | undefined, result: DataGetEntireTableResult) => void;

export interface DataSetSingleParams {
    readonly table: string;
    /**
     * If no key is supplied, Begin Data will automatically supply a pseudo-random, unique, immutable key
     */
    readonly key?: string;
    /**
     * Any document can be automatically expunged by setting a ttl value.
     *
     * ttl is a Number corresponding to a specific future Unix epoch (expressed in seconds).
     *
     * Documents will typically be automatically destroyed within 48 hours of the ttl expiring.
     *
     * Tip: during the intervening time between ttl expiry and actual expunging, the document will still be available; if its ttl is mutated or unset, the document's new ttl state will be respected.
     */
    readonly ttl?: ReadonlyBeginDataType | undefined;
    readonly [others: string]: ReadonlyBeginDataType | undefined;
}
export type DataSetMultipleParams = ReadonlyArray<DataSetSingleParams>;
export interface DataSetSingleResult {
    table: string;
    key: string;
    [others: string]: BeginDataType | undefined;
}
export type DataSetSingleCallback = (err: Error | null | undefined, result: DataSetSingleResult) => void;
export type DataSetMultipleResult = Array<{
    table: string;
    key: string;
    [others: string]: BeginDataType | undefined;
}>;
export type DataSetMultipleCallback = (err: Error | null | undefined, result: DataSetMultipleResult) => void;

export interface DataDestroySingleParams {
    readonly table: string;
    readonly key: string;
}
export type DataDestroyMultipleParams = ReadonlyArray<DataDestroySingleParams>;
export type DataDestroySingleCallback = (err: Error | null | undefined) => void;
export type DataDestroyMultipleCallback = (err: Error | null | undefined) => void;

export interface DataCountParams {
    readonly table: string;
}
export type DataCountResult = number;
export type DataCountCallback = (err: Error | null | undefined, result: DataCountResult) => void;

export interface DataIncrementParams {
    readonly table: string;
    readonly key: string;
    readonly prop: string;
}
export interface DataIncrementResult {
    table: string;
    key: string;
    [others: string]: ReadonlyBeginDataType | undefined;
}
export type DataIncrementCallback = (err: Error | null | undefined, result: DataIncrementResult) => void;

export interface DataDecrementParams {
    readonly table: string;
    readonly key: string;
    readonly prop: string;
}
export interface DataDecrementResult {
    table: string;
    key: string;
    [others: string]: ReadonlyBeginDataType | undefined;
}
export type DataDecrementCallback = (err: Error | null | undefined, result: DataDecrementResult) => void;

export interface DataPageParams {
    readonly table: string;
    readonly limit?: number;
}
export type DataPageResult = Array<{
    table: string;
    key: string;
    [others: string]: ReadonlyBeginDataType | undefined;
}>;

/**
 * As you'd imagine, data.get() is responsible for getting documents.
 *
 * data.get() can get a single document, batch get multiple documents, or get an entire table.
 */
export function get(params: DataGetSingleParams): Promise<DataGetSingleResult>;
export function get(params: DataGetSingleParams, callback: DataGetSingleCallback): void;
export function get(params: DataGetMultipleParams): Promise<DataGetMultipleResult>;
export function get(params: DataGetMultipleParams, callback: DataGetMultipleCallback): void;
export function get(params: DataGetEntireTableParams): Promise<DataGetEntireTableResult>;
export function get(params: DataGetEntireTableParams, callback: DataGetEntireTableCallback): void;

/**
 * data.set() is responsible for creating new documents, and updating existing ones.
 *
 * data.set() can operate on a single document, or batch up to 25 documents.
 *
 * A single data.set() request cannot exceed 10KB.
 *
 * Your supplied data can be any quantity of the following supported types:
 *   - Number
 *   - String
 *   - Binary (Must be base64 encoded)
 *   - Boolean
 *   - Null
 *   - Array
 *   - Object
 *
 * Limits:
 *   - data.set() has a maximum batch size of 25 documents and 10KB per call.
 *   - Empty attributes are invalid and will produce errors.
 */
export function set(params: DataSetSingleParams): Promise<DataSetSingleResult>;
export function set(params: DataSetSingleParams, callback: DataSetSingleCallback): void;
export function set(params: DataSetMultipleParams): Promise<DataSetMultipleResult>;
export function set(params: DataSetMultipleParams, callback: DataSetMultipleCallback): void;

/**
 * data.destroy() is responsible for destroying documents.
 *
 * Valid data.destroy() calls require passing a one or more objects containing a table and key; there is no limit to the number of documents a single call can destroy.
 */
export function destroy(params: DataDestroySingleParams | DataDestroyMultipleParams): Promise<void>;
export function destroy(params: DataDestroySingleParams, callback: DataDestroySingleCallback): void;
export function destroy(params: DataDestroyMultipleParams, callback: DataDestroyMultipleCallback): void;

/**
 * data.count() returns the count of a table's documents.
 */
export function count(params: DataCountParams): Promise<DataCountResult>;
export function count(params: DataCountParams, callback: DataCountCallback): void;

/**
 * data.incr() increments the number property.
 */
export function incr(params: DataIncrementParams): Promise<DataIncrementResult>;
export function incr(params: DataIncrementParams, callback: DataIncrementCallback): void;

/**
 * data.decr() decrements the number property.
 */
export function decr(params: DataDecrementParams): Promise<DataDecrementResult>;
export function decr(params: DataDecrementParams, callback: DataDecrementCallback): void;

/**
 * data.page() iterates with the paginated list.
 */
export function page(params: DataPageParams): AsyncIterable<DataPageResult>;
