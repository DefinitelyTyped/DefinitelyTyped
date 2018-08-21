// Type definitions for spatialite 0.0
// Project: https://github.com/zhm/node-spatialite
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {
    OPEN_READONLY,
    OPEN_READWRITE,
    OPEN_CREATE,
    cached,
    RunResult,
    Statement,
    verbose } from 'sqlite3';
import {
    Database as OriginalDatabase
} from 'sqlite3';

export class Database extends OriginalDatabase {
    spatialite(cb: (err: Error) => void): void;
}
