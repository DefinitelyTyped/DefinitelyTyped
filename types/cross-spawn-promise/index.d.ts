// Type definitions for cross-spawn-promise 0.9
// Project: https://github.com/zentrick/cross-spawn-promise
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Execute a command cross-platform.
 *
 * @param {string} cmd command to execute e.g. `"npm""`
 * @param {any[]} [args] command argument e.g. `["install", "-g", "git"]`
 * @param {Partial<crossSpawnPromise.CrossSpawnOptions>} [options] additional options.
 * @returns {Promise<Uint8Array>} a promise result
 */
declare function crossSpawnPromise(cmd: string, args?: any[], options?: Partial<crossSpawnPromise.CrossSpawnOptions>): Promise<Uint8Array>;

declare namespace crossSpawnPromise {

	interface CrossSpawnOptions {
		encoding: string;
		stdio: string;
	}

	interface CrossSpawnError {
		exitStatus: number;
		message: string;
		stack: string;
		stderr: Uint8Array;
		stdout: Uint8Array | null;
	}

}

export = crossSpawnPromise;
