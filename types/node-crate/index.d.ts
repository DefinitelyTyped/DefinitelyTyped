declare namespace crate {
    interface DBResultObject {
        json: object[];
        duration: number;
        rowcount: number;
        cols: string[];
        rows: object[][];
    }

    interface Crate {
        /**
         * Connect to a single crate instance with host and port
         */
        connect: (host: string, port?: number) => void;
        /**
         * Executes a parameterized sql statement.
         */
        execute: (sql: string, args?: Array<string | number | Date>) => Promise<DBResultObject>;
        /**
         * Inserts a row in table.
         */
        insert: (tableName: string, data: object) => Promise<DBResultObject>;
        /**
         * Creates a table with the given schema.
         */
        create: (schema: object) => Promise<DBResultObject>;
        /**
         * Creates a table if it doesn't already exist.
         */
        createIfNotExists: (schema: object) => Promise<DBResultObject>;
        /**
         * Drops a table.
         */
        drop: (tableName: string) => Promise<DBResultObject>;
        /**
         * Updates one or more rows in table.
         */
        update: (tableName: string, data: object, where: string) => Promise<DBResultObject>;
        /**
         * Deletes one or more rows in a table.
         */
        delete: (tableName: string, where: string) => Promise<DBResultObject>;
        /**
         * Creates a BLOB table
         */
        createBlobTable: (tableName: string, replicas: number, shards: number) => Promise<DBResultObject>;
        /**
         * Inserts a BLOB
         */
        insertBlob: (tableName: string, buffer: string) => Promise<string>;
        /**
         * Inserts a BLOB from the filesystem
         */
        insertBlobFile: (tableName: string, filename: string) => Promise<string>;
        /**
         * Retrieves a BLOB with the given hash key
         */
        getBlob: (tableName: string, hashKey: string) => Promise<string>;
    }
}

declare var crate: crate.Crate;
export = crate;
