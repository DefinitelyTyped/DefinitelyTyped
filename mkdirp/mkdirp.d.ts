// Type definitions for mkdirp 0.3.0
// Project: http://github.com/substack/node-mkdirp
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'mkdirp' {

	function mkdirp(dir: string, cb: (err: any, made: string) => void): void;
	function mkdirp(dir: string, flags: any, cb: (err: any, made: string) => void): void;

	namespace mkdirp {
		function sync(dir: string, flags?: any): string;
	}
	export = mkdirp;
}
