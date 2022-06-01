import { PathLike } from 'fs';
import type { Driver, EmptyObject, ErrorOnlyCallback, ParsedMigration, ScanOptions } from '../index';

export function drop(driver: Driver, cb?: ErrorOnlyCallback): void;

export function migrate(
    migrations: ReadonlyArray<ParsedMigration>,
    driver: Driver,
    options: { quiet?: boolean },
    cb: ErrorOnlyCallback,
): void;

export function migrate(migrations: ReadonlyArray<ParsedMigration>, driver: Driver, cb: ErrorOnlyCallback): void;

/**
 * @deprecated no-op since 3.1.0
 */
export function parseDirectives(): EmptyObject;

export function scan(
    directory: PathLike,
    options: ScanOptions,
    cb: (err: Error | undefined, migrations: ParsedMigration[]) => void,
): void;

export function scan(directory: PathLike, cb: (err: Error | undefined, migrations: ParsedMigration[]) => void): void;
