/**
 * xk6-sql: k6 extension that allows connection to RDBMSs: mysql, postgres, sqlite3, sqlserver
 * https://github.com/grafana/xk6-sql
 */
declare module "k6/x/sql" {
    namespace sql {
        /**
         * Opens a database connection.
         * @param type - the type of database (mysql, postgres, sqlite3, sqlserver)
         * @param connectionString - the connection string to connect to the database
         * @returns Connection to the database.
         * @example
         * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
         */
        function open(
            type: "mysql" | "postgres" | "sqlite3" | "sqlserver",
            connectionString: string,
        ): DatabaseConnection;

        /**
         * Executes the provided query string against the database, while
         * providing results as a slice of KeyValue instance(s) if available.
         * @param db - Connection to database
         * @param query - SQL query
         * @param args - query parameters
         * @returns Array with query results
         * @example
         * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
         * const results = sql.query(db, "SELECT Colour FROM Shapes WHERE Name=@p1 AND Type=@p2", "circle", "round")
         * for (const row of results) {
         *   console.log(`key: ${row.key}, value: ${row.value}`);
         * }
         */
        function query(db: DatabaseConnection, query: string, ...args: Array<string | number | boolean>): any[];

        interface DatabaseConnection {
            /**
             *  Executes the provided query string against the database.
             * @param query - SQL query
             * @example
             * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
             * db.exec("INSERT INTO Shapes(Name, Type, Colour) VALUES{'circle', 'round', 'red')}")
             */
            exec(query: string): void;

            /**
             *  Closes the database connection
             */
            close(): void;
        }
    }
    export default sql;
}

declare module "xk6-sql" {
    namespace sql {
        /**
         * Opens a database connection.
         * @param type - the type of database (mysql, postgres, sqlite3, sqlserver)
         * @param connectionString - the connection string to connect to the database
         * @returns Connection to the database.
         * @example
         * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
         */
        function open(
            type: "mysql" | "postgres" | "sqlite3" | "sqlserver",
            connectionString: string,
        ): DatabaseConnection;

        /**
         * Executes the provided query string against the database, while
         * providing results as a slice of KeyValue instance(s) if available.
         * @param db - Connection to database
         * @param query - SQL query
         * @param args - query parameters
         * @returns Array with query results
         * @example
         * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
         * const results = sql.query(db, "SELECT Colour FROM Shapes WHERE Name=@p1 AND Type=@p2", "circle", "round")
         * for (const row of results) {
         *   console.log(`key: ${row.key}, value: ${row.value}`);
         * }
         */
        function query(db: DatabaseConnection, query: string, ...args: Array<string | number | boolean>): any[];

        interface DatabaseConnection {
            /**
             *  Executes the provided query string against the database.
             * @param query - SQL query
             * @example
             * const db = sql.open("sqlserver", "Server=127.0.0.1;Database=myDB;User Id=myUser;Password=myPassword;")
             * db.exec("INSERT INTO Shapes(Name, Type, Colour) VALUES{'circle', 'round', 'red')}")
             */
            exec(query: string): void;

            /**
             *  Closes the database connection
             */
            close(): void;
        }
    }
    export default sql;
}
