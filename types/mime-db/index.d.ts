// Type definitions for mime-db 1.27
// Project: https://github.com/jshttp/mime-db
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace database {
    /**
     * @see {@link https://github.com/jshttp/mime-db#data-structure}
     */
    interface MimeEntry {
        /** Where the mime type is defined. If not set, it's probably a custom media type. */
        readonly source?: string;
        /** Known extensions associated with this mime type. */
        readonly extensions?: ReadonlyArray<string>;
        /** Whether a file of this type can be gzipped. */
        readonly compressible?: boolean;
        /** The default charset associated with this type, if any. */
        readonly charset?: string;
    }

    /**
     * @see {@link https://github.com/jshttp/mime-db#data-structure}
     */
    interface MimeDatabase {
        readonly [type: string]: MimeEntry;
    }
}

declare const database: database.MimeDatabase;

export = database;
