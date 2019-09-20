// Type definitions for pg-ears 1.0
// Project: https://github.com/doesdev/pg-ears
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ClientConfig } from "pg";

interface PgEars {
    listen(
        channel: string,
        cb: (err: Error | null, payload?: string) => void
    ): null;
    notify(channel: string, payload: any, cb?: (err: Error) => void): void;
}

declare function pg_ears(
    opts: ClientConfig & {
        maxAttempts?: number;
        // Interval between connection retries, in milliseconds.
        checkInterval?: number;
    }
): PgEars;

export = pg_ears;
