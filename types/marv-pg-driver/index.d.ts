// Type definitions for marv-pg-driver 4.0
// Project: https://github.com/guidesmiths/marv-pg-driver
// Definitions by: Joonas Rouhiainen <https://github.com/rjoonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { Driver } from 'marv';
import * as pg from 'pg';

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
