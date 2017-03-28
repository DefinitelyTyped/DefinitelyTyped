// Type definitions for hyperscript
// Project: https://github.com/dominictarr/hyperscript
// Definitions by: Mike Linkovich <https://github.com/spacejack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'hyperscript' {

	interface HyperScript {
		/** Creates a typed HTMLElement */
		<T extends keyof HTMLElementTagNameMap>(tagName: T, attrs?: Object, ...children: any[]): HTMLElementTagNameMap[T];
		/** Creates a typed HTMLElement via coercion */
		<T extends HTMLElement>(tagName: string, attrs?: Object, ...children: any[]): T;
		/** Creates an HTMLElement */
		<T extends string>(tagName: T, attrs?: Object, ...children: any[]): HTMLElement;
		/** Cleans up any event handlers created by this hyperscript context */
		cleanup(): void;
		/** Creates a new hyperscript context */
		context(): HyperScript;
	}

	const h: HyperScript;
	export = h;
}
