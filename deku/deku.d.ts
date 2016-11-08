// Type definitions for deku v2.0.0-rc16
// Project: https://github.com/anthonyshort/deku
// Definitions by: Sho Fuji <https://github.com/pocka/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = deku;
export as namespace deku;

declare namespace deku {
	interface VirtualElement {
		type: string;
	}

	interface Model {
		props?: any,
		children?: any[],
		path?: string,
		dispatch?: Function,
		context?: any
	}

	interface Component {
		render: (model: Model) => VirtualElement;
		onCreate?: (model: Model) => any;
		onUpdate?: (model: Model) => any;
		onRemove?: (model: Model) => any;
	}

	/**
	 * Thunk object passed to `element`
	 */
	type Thunk = Component | ((model: Model) => VirtualElement);

	type Render = (vnode: VirtualElement, context?: any) => void;

	/**
	 * Create a DOM renderer using a container element.
	 * Everything will be rendered inside of that container.
	 * Returns a function that accepts new state that can replace what is currently rendered.
	 */
	function createApp(el: HTMLElement): Render;
	function createApp(el: HTMLElement, dispatch: Function): Render;

	namespace dom {
		/**
		 * Create a real DOM element from a virtual element, recursively looping down.
		 * When it finds custom elements it will render them, cache them, and keep going,
		 * so they are treated like any other native element.
		 */
		function create<C>(vnode: VirtualElement, path: string, dispatch: Function, context: C): HTMLElement;

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
	function element<A>(type: string, attributes: A): VirtualElement;
	function element<A>(type: string, attributes: A, ...children: any[]): VirtualElement;

	function element(type: Thunk): VirtualElement;
	function element<A>(type: Thunk, attributes: A): VirtualElement;
	function element<A>(type: Thunk, attributes: A, ...children: any[]): VirtualElement;

	var h: typeof element;

	namespace diff {
		/**
		 * Compare two virtual nodes and return an array of changes to turn the left into the right.
		 */
		function diffNode(prevNode: VirtualElement, nextNode: VirtualElement): Action[];

		interface Action {}

		namespace Actions {
			function setAttribute(a: string, b: any, c: any): Action;
			function removeAttribute(a: string, b: any): Action;
			function insertChild(a: any, b: number, c: string): Action;
			function removeChild(a: number): Action;
			function updateChild(a: number, b: any[]): Action;
			function updateChildren(a: any[]): Action;
			function insertBefore(a: number): Action;
			function replaceNode(a: any, b: any, c: string): Action;
			function removeNode(a: any): Action;
			function sameNode(): Action;
			function updateThunk(a: any, b: any, c: string): Action;

			// Since "case" is a reserved word, we cannot use "deku.Actions.case" in TypeScript.
			// TODO: workaround
			// function case: (pat: any, action: Action): void;
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
		function createThunkElement<P, T, O>(fn: Function, key: string, props: P, children: T[], options: O): VirtualElement;

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
