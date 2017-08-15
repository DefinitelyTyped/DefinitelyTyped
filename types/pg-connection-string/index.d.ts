// Type definitions for pg-connection-string 0.1
// Project: https://github.com/iceddev/pg-connection-string
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function parse(connectionString: string): {
    host: string;
    database: string | null;
    port: string | null;
    application_name?: string;
    client_encoding?: string;
    fallback_application_name?: string;
    user?: string;
    password?: string;
    ssl?: boolean;
};
