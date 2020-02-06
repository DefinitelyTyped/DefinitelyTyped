import polyfill = require('./index');

declare module 'util' {
	namespace promisify {
		/**
		 * @deprecated
		 * Not exposed by native `util.promisify` or supported by browserify's `util.promisify`.
		 *
		 * Use `util.promisify.custom` instead.
		 */
		const customPromisifyArgs: typeof polyfill.customPromisifyArgs | undefined;
	}
}
