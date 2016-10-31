// Type definitions for compose-function
// Project: https://github.com/component/debounce
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "debounce" {
	// Overload on boolean constants would allow us to narrow further,
	// but it is not implemented for TypeScript yet
	function f<A extends Function>(f: A, interval?: number, immediate?: boolean): A
	export default f;
}
