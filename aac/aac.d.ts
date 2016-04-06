// Type definitions for abs 1.1.0
// Project: https://github.com/IonicaBizau/node-abs
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "abs" {
	/**
	 * Compute the absolute path of an input.
	 * @param input The input path.
	 */
	function Abs(input: string): string;

	export default Abs;
}
