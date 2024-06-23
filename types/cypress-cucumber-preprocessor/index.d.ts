export default function preprocessor(options?: any): (file: any) => Promise<string>;

/**
 * @returns NodeJS.ReadableStream
 */
export function transform(file: any): any;

export interface TableDefinition {
    /** Returns the table as a 2-D array. */
    raw(): string[][];

    /** Returns the table as a 2-D array, without the first row. */
    rows(): string[][];

    /** Returns an object where each row corresponds to an entry (first column is the key, second column is the value). */
    rowsHash(): { [firstCol: string]: string };

    /** Returns an array of objects where each row is converted to an object (column header is the key). */
    hashes(): Array<{ [colName: string]: string }>;
}
