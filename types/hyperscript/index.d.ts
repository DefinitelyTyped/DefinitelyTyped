// Type definitions for hyperscript
// Project: https://github.com/dominictarr/hyperscript
// Definitions by: Mike Linkovich <https://github.com/spacejack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'hyperscript' {

	interface HyperScript {
		/** Creates an HTML element */
		(tagName: string, ...args: any[]): HTMLElement;
		/** Cleans up any event handlers created by this hyperscript context */
		cleanup(): void;
		/** Creates a new hyperscript context */
		context(): HyperScript;
	}

	const h: HyperScript;
	export = h;
}
