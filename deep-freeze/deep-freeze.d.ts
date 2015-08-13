// Type definitions for deep-freeze
// Project: https://github.com/substack/deep-freeze
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'deep-freeze' {
	function df<T>(obj: T): T;
	export = df;
}
