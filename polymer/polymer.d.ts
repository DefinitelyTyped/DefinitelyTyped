// Type definitions for polymer 
// Project: https://github.com/polymer
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface PolymerElement {

	// definition
	publish?: Object;
	computed?: Object;
	// object mapping variable names to functions name
	observe?: Object;

	// life time API
	created? (): void;
	ready? (): void;
	attached? (): void;
	domReady? (): void;
	detached? (): void;
	attributeChanged? (attrName: string, oldVal: any, newVal: any): void;
	
	/**
	 * User must call from attached callback
	 */
	resizableAttachedHandler(): void;

	/**
	 * User must call from detached callback
	 */
	resizableDetachedHandler(): void;

	/**
	 * User must call from attached callback
	 */
	resizerAttachedHandler(): void;

	/**
	 * User must call from detached callback
	 */
	resizerDetachedHandler(): void;

	/**
	 * User should call when resizing or un-hiding children
	 */
	notifyResize(): void;
}

interface Polymer {

    importElements(node: Node, callback: Function): void;
    import(url: string, callback?: () => void): void;

    mixin(target: any, ...mixins: any[]): any;
    waitingFor(): Array<string>;
    // should be an "integer" for milliseconds
    forceReady(timeout: number): void;

    (tagName: string, prototype: PolymerElement): void;
    (tagName: string, prototype: any): void;
    (prototype: PolymerElement): void;
    (): void;
}

declare var Polymer: Polymer;
