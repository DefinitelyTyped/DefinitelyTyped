import { ClientConfig } from "pg";

interface PgEars {
    listen(
        channel: string,
        cb: (err: Error | null, payload?: string) => void,
    ): null;
    notify(channel: string, payload: any, cb?: (err: Error) => void): void;
}

declare function pg_ears(
    opts: ClientConfig & {
        maxAttempts?: number | undefined;
        // Interval between connection retries, in milliseconds.
        checkInterval?: number | undefined;
    },
): PgEars;

export = pg_ears;
