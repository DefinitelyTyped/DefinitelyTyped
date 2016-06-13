// Type definitions for why-did-you-update v0.0.8
// Project: https://github.com/garbles/why-did-you-update
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "why-did-you-update" {
	interface Options {
		include?: RegExp;
		exclude?: RegExp;
	}
	export function whyDidYouUpdate(react: typeof __React, options?: Options): void;
}

