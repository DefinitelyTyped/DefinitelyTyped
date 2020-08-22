// Type definitions for html-tableify 0.0
// Project: https://github.com/LingyuCoder/html-tableify#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create a HTML table from JSON data.
 *
 * @typeparam T Column name.
 * @param data Array of objects containing values for each key `T`. Each array element represents column data for one
 * row. Columns without a corresponding value appear as an empty cell in the row.
 * @param config Table configuration object for data of keys `T`.
 * @return HTML table string.
 */
declare function tableify<T extends keyof any>(data: Array<tableify.Datum<T>>, config?: tableify.Config<T>): string;

declare namespace tableify {
    type Alignment = 'center' | 'left' | 'right';

    /** Object of optional values for each key `T`. */
    type Datum<T extends keyof any> = {
        [K in T]?: unknown;
    };

    /** Header config object for key `T`. */
    interface Header<T> {
        /** Key in data object. */
        name: T;

        /** Text align of the column. */
        align?: Alignment;
        /** Title of the column. */
        title?: string;
    }

    /** Table config object for data with keys `T`. */
    interface Config<T> {
        headers?: Array<Header<T>>;
        /** Tidy the output HTML. */
        tidy?: boolean;
    }
}

export = tableify;
