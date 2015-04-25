// Type definitions for tmp v0.0.24
// Project: https://www.npmjs.com/package/tmp
// Definitions by: Jared Klopper <https://github.com/optical>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "tmp" {

	module tmp {
		interface Options {
			mode?: number;
			prefix?: string;
			postfix?: string;
			template?: string;
			dir?: string;
			tries?: number;
			keep?: boolean;
			unsafeCleanup?: boolean;
		}

		function file(callback: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;
		function file(config: Options, callback?: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;
		
		function dir(callback: (err: any, path: string, cleanupCallback: () => void) => void): void;
		function dir(config: Options, callback?: (err: any, path: string, cleanupCallback: () => void) => void): void;

		function tmpName(callback: (err: any, path: string) => void): void;
		function tmpName(config: Options, callback?: (err: any, path: string) => void): void;

		function setGracefulCleanup(): void;
	}

	export = tmp;
}
