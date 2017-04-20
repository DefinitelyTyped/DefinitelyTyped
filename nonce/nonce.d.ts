// Type definitions for nonce
// Project: https://github.com/abrkn/nonce
// Definitions by: Piotr Dąbrowski <https://github.com/yhnavein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "nonce" {
	/**
	 * Returns unique and ever increasing timestamps
	 */
	function nonce(): number;

	export default nonce;
}
