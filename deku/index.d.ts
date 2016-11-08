// Type definitions for deku v2.0
// Project: https://github.com/anthonyshort/deku
// Definitions by: Sho Fuji <https://github.com/pocka/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = deku;
export as namespace deku;

declare namespace deku {

	interface VirtualElement {
		type: string;
	}

	/**
	 * Create a DOM renderer using a container element.
	 * Everything will be rendered inside of that container.
	 * Returns a function that accepts new state that can replace what is currently rendered.
	 */
	function createApp(el: HTMLElement, dispatch?: Dispatch): Render;

	namespace dom {
		/**
		 * Create a real DOM element from a virtual element, recursively looping down.
		 * When it finds custom elements it will render them, cache them, and keep going,
		 * so they are treated like any other native element.
		 */
		function create<C>(vnode: VirtualElement, path: string, dispatch: Dispatch, context: C): HTMLElement;

		/**
		 * Modify a DOM element given an array of actions.
		 */
		function update<C, A>(dispatch: Function, context: C): (DOMElement: HTMLElement, action: A) => HTMLElement;
	}

	namespace string {
		/**
		 * Render a virtual element to a string. You can pass in an option state context object that will be given to all components.
		 */
		function render(vnode: VirtualElement): string;
		function render<C>(vnode: VirtualElement, context: C): string;
	}

	/**
	 * This function lets us create virtual nodes using a simple syntax.
	 * It is compatible with JSX transforms so you can use JSX to write nodes that will compile to this function.
	 */
	function element(type: string): VirtualElement;
	function element<A>(type: string, attributes: A, ...children: any[]): VirtualElement;

	function element(type: Thunk): VirtualElement;
	function element<A>(type: Thunk, attributes: A, ...children: any[]): VirtualElement;

	var h: typeof element;

	namespace diff {
		/**
		 * Compare two virtual nodes and return an array of changes to turn the left into the right.
		 */
		function diffNode(prevNode: VirtualElement, nextNode: VirtualElement): any[];

		namespace Actions {
			function setAttribute(a: string, b: any, c: any): any;
			function removeAttribute(a: string, b: any): any;
			function insertChild(a: any, b: number, c: string): any;
			function removeChild(a: number): any;
			function updateChild(a: number, b: any[]): any;
			function updateChildren(a: any[]): any;
			function insertBefore(a: number): any;
			function replaceNode(a: any, b: any, c: string): any;
			function removeNode(a: any): any;
			function sameNode(): any;
			function updateThunk(a: any, b: any, c: string): any;

			// Since "case" is a reserved word, we cannot use "deku.Actions.case" in TypeScript.
			// TODO: workaround
			// function case: (pat: any, action: any): void;
		}
	}

	namespace vnode {
		var create: typeof element;

		/**
		 * Text nodes are stored as objects to keep things simple
		 */
		function createTextElement(text: string): VirtualElement;

		/**
		 * Lazily-rendered virtual nodes
		 */
		function createThunkElement<P, T, O>(fn: (model: Model) => VirtualElement, key: string, props: P, children: T[], options: O): VirtualElement;

		function createEmptyElement(): VirtualElement;

		function isThunk(vnode: VirtualElement): boolean;

		function isText(vnode: VirtualElement): boolean;

		function isEmpty(vnode: VirtualElement): boolean;

		function isSameThunk(prevNode: VirtualElement, nextNode: VirtualElement): boolean;

		// function isValidAttribute<A>(value: A): boolean;

		/**
		 * Create a node path, eg. (23,5,2,4) => '23.5.2.4'
		 */
		function createPath(...paths: (number|string)[]): string;
	}
}

interface Model {
	props?: any,
	children?: any[],
	path?: string,
	dispatch?: Dispatch,
	context?: any
}

interface Component {
	render: (model: Model) => deku.VirtualElement;
	onCreate?: (model: Model) => any;
	onUpdate?: (model: Model) => any;
	onRemove?: (model: Model) => any;
}

/**
 * Thunk object passed to `element`
 */
type Thunk = Component | ((model: Model) => deku.VirtualElement);

type Render = (vnode: deku.VirtualElement, context?: any) => void;

type Dispatch = (action: any) => any;
