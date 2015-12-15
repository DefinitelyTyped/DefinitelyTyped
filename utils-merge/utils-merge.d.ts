// Type definitions for utils-merge
// Project: https://github.com/jaredhanson/utils-merge
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "utils-merge" {
	function merge<TA, TB, TResult>(a: TA, b: TB): TResult;

	export default merge;
}
