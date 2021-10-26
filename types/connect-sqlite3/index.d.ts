// Type definitions for connect-sqlite3 0.9
// Project: https://github.com/rawberg/connect-sqlite3 (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: oof2win2 <https://github.com/oof2win2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as session from 'express-session';

interface SQLiteStoreOptions {
	/**
	 * Table of where sessions are stored
	 * @default "sessions"
	 */
	table?: string;

	/**
	 * Database file name
	 * @default "sessionsDB"
	 */
	db?: string;

	/**
	 * Directory where to save database in
	 * @default "."
	 */
	dir?: string;

	/**
	 * Enables [WAL](https://www.sqlite.org/wal.html) mode (defaults to false)
	 * @default "false"
	 */
	concurrentDB?: string;
}

declare class SQLiteStore extends session.Store {
	get(sid: string, callback: (err: any, session?: session.SessionData | null) => void): void;
	set(sid: string, session: session.SessionData, callback?: (err?: any) => void): void;
	destroy(sid: string, callback?: (err?: any) => void): void;
}

interface SQLiteStoreInitator {
	new(options?: SQLiteStoreOptions): SQLiteStore;
}
declare function connect(): SQLiteStoreInitator;

export = connect;
