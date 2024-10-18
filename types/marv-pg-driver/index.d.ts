import type { Driver } from "marv";
import * as pg from "pg";

declare function MarvPgDriver(options: {
    connection: pg.ClientConfig;
    logger?: {
        warn: (...args: unknown[]) => void;
    };
    pg?: typeof pg;
    quiet?: boolean;
    table?: string;
}): Driver;

export = MarvPgDriver;
