// Type definitions for mime-db 1.27
// Project: https://github.com/jshttp/mime-db
// Definitions by: AJP <https://github.com/AJamesPhillips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Data Structure
 * If unknown, every property could be undefined.
 * @see {@link https://github.com/jshttp/mime-db#data-structure}
 */
export interface DataStructure {
    /** where the mime type is defined. If not set, it's probably a custom media type. */
    source?: string;
    /** known extensions associated with this mime type. */
    extensions?: string[];
    /** whether a file of this type can be gzipped. */
    compressible?: boolean;
    /** the default charset associated with this type, if any. */
    charset?: string;
}
