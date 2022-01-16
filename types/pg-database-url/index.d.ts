// Type definitions for pg-database-url 0.1
// Project: https://github.com/mediasuitenz/pg-database-url
// Definitions by: Todd Dukart <https://github.com/tdukart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PgDatabaseUrlConfig {
    database: string;
    host?: string;
    password?: string;
    port?: number;
    username: string;
}

declare function pg_database_url(config: PgDatabaseUrlConfig): string;

export = pg_database_url;
