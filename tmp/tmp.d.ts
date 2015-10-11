// Type definitions for tmp v0.0.28
// Project: https://www.npmjs.com/package/tmp
// Definitions by: Jared Klopper <https://github.com/optical>, VILIC VANE <https://github.com/vilic>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "tmp" {
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
	
	interface TmpObject {
		name: string;
		removeCallback: () => void;
	}

	function file(callback: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;
	function file(config: Options, callback: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;
	function fileSync(config?: Options): TmpObject;
	
	function dir(callback: (err: any, path: string, cleanupCallback: () => void) => void): void;
	function dir(config: Options, callback?: (err: any, path: string, cleanupCallback: () => void) => void): void;
	function dirSync(config?: Options): TmpObject;

	function tmpName(callback: (err: any, path: string) => void): void;
	function tmpName(config: Options, callback?: (err: any, path: string) => void): void;
	function tmpNameSync(config?: Options): TmpObject;

	function setGracefulCleanup(): void;
}
