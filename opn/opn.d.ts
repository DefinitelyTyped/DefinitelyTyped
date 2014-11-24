// Type definitions for opn 1.0.0
// Project: https://github.com/sindresorhus/opn
// Definitions by: Shinnosuke Watanabe <https://github.com/shinnn>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'opn' {
	function opn(target: string, callback?: (err: Error) => void): void;
	function opn(target: string, app: string, callback?: (err: Error) => void): void;
	export = opn;
}
