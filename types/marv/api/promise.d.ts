import { PathLike } from "fs";
import type { Driver, EmptyObject, ParsedMigration, ScanOptions } from "../index";

export function drop(driver: Driver): Promise<void>;

export function migrate(
    migrations: readonly ParsedMigration[],
    driver: Driver,
    options?: { quiet?: boolean },
): Promise<void>;

export function scan(directory: PathLike, options?: ScanOptions): Promise<ParsedMigration[]>;
