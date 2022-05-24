// Type definitions for pg-database-url 0.1
// Project: https://github.com/mediasuitenz/pg-database-url
// Definitions by: Todd Dukart <https://github.com/tdukart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pgDatabaseUrl {
    interface Config {
        database: string;
        host?: string;
        password?: string;
        port?: number;
        username: string;
    }
}

declare function pgDatabaseUrl(config: pgDatabaseUrl.Config): string;

export = pgDatabaseUrl;
