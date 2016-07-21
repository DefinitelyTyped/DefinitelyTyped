// Type definitions for freeport 1.0.5
// Project: https://github.com/daaku/nodejs-freeport
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'freeport' {
	function freeport(cb: (err: Error, port: number) => void): void;
	
	export = freeport;
}
