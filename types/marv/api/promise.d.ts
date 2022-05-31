/// <reference types="node" />

import { PathLike } from 'fs';
import { Driver, EmptyObject, ParsedMigration, ScanOptions } from '../index';

export function drop(driver: Driver): Promise<void>;

export function migrate(
    migrations: ReadonlyArray<ParsedMigration>,
    driver: Driver,
    options?: { quiet?: boolean },
): Promise<void>;

/**
 * @deprecated no-op since 3.1.0
 */
export function parseDirectives(): EmptyObject;

export function scan(directory: PathLike, options?: ScanOptions): Promise<ParsedMigration[]>;
