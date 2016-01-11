// Type definitions for vuejs 1.0.11
// Project: https://github.com/vuejs/vue
// Definitions by: odangosan <https://github.com/odangosan>, kaorun343 <https://github.com/kaorun343>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Array<T> {
    $remove(item: T): Array<T>;
    $set(index: number, val: T): T;
}

declare namespace vuejs {

	interface PropOption {
		type?: any;
		required?: boolean;
		default?: boolean;
		twoWay?: boolean;
		validator?(value: any): boolean;
	}
  
	interface ComputedOption {
		get(): any;
		set(value: any): void;
	}
	
	interface WatchOption {
		handler(val: any, oldVal: any): void;
		deep?: boolean;
		immidiate?: boolean;
	}
	
	interface DirectiveOption {
		bind?(): any;
		update?(newVal?: any, oldVal?: any): any;
		unbind?(): any;
		params?: string[];
		deep?: boolean;
		twoWay?: boolean;
		acceptStatement?: boolean;
		priority?: number;
		[key: string]: any;
	}
	
	interface FilterOption {
		read: Function;
		write: Function;
	}
	
	interface TransitionOption {
		css?: boolean;
		beforeEnter?(el: HTMLElement): void;
		enter?(el: HTMLElement, done?: () => void): void;
		afterEnter?(el: HTMLElement): void;
		enterCancelled?(el: HTMLElement): void;
		beforeLeave?(el: HTMLElement): void;
		leave?(el: HTMLElement, done?: () => void): void;
		afterLeave?(el: HTMLElement): void;
		leaveCancelled?(el: HTMLElement): void;
		stagger?(index: number): number;
	}
	
	interface ComponentOption {
		data?: {[key: string]: any } | Function;
		props?: string[] | { [key: string]: PropOption };
		computed?: { [key: string]: ( Function | ComputedOption ) };
		methods?: { [key: string]: Function };
		watch?: { [key: string]: ( (val: any, oldVal: any) => void | string | WatchOption )};
		el?: string | HTMLElement | ( () => HTMLElement );
		template?: string;
		replace?: boolean;
		created?(): void;
		beforeCompile?(): void;
		compiled?(): void;
		ready?(): void;
		attached?(): void;
		detached?(): void;
		beforeDestroy?(): void;
		destroyed?(): void;
		activate?(): void;
		directives?: { [key: string]: ( DirectiveOption | Function ) };
		elementDirectives?: { [key: string]: ( DirectiveOption | Function ) };
		filters?: { [key: string]: ( Function | FilterOption ) };
		components?: { [key: string]: ComponentOption };
		transitions?: { [key: string]: TransitionOption };
		partials?: { [key: string]: string };
		parent?: Vue;
		events?: { [key: string]: ( (...args: any[]) => ( boolean | void ) ) | string };
		mixins?: ComponentOption[];
		name?: string;
		[key: string]: any;
	}
	
	// instance/api/data.js
	interface $get { ( exp: string, asStatement?: boolean ): any; }
	interface $set { <T>( key: string | number, value: T ): T; }
	interface $delete { ( key: string) : void; }
	interface $watch { ( expOrFn: string | Function, callback: ( (newVal: any, oldVal?: any) => any ) | string, options?: { deep?: boolean, immidiate?: boolean } ): Function; }
	interface $eval { ( expression: string ): string; }
	interface $interpolate { ( expression: string ): string; }
	interface $log { ( keypath?: string ): void; }
	// instance/api/dom.js
	interface $nextTick { ( callback: Function ): void; }
	interface $appendTo<V> { ( target: ( HTMLElement | string ), callback?: Function, withTransition?: boolean ): V; }
	interface $prependTo<V> { ( target: ( HTMLElement | string ), callback?: Function, withTransition?: boolean ): V; }
	interface $before<V> { ( target: ( HTMLElement | string ), callback?: Function, withTransition?: boolean ): V; }
	interface $after<V> { ( target: ( HTMLElement | string ), callback?: Function, withTransition?: boolean ): V; }
	interface $remove<V> { ( callback?: Function ): V; }
	// instance/api/events.js
	interface $on<V> { (event: string, callback: Function): V; }
	interface $once<V> { (event: string, callback: Function): V; }
	interface $off<V> { (event?: string, callback?: Function): V; }
	interface $emit<V> { (event: string, ...args: any[]): V; }
	interface $broadcast<V> { (event: string, ...args: any[]): V; }
	interface $dispatch<V> { (event: string, ...args: any[]): V; }
	// instance/api/lifecycle.js
	interface $mount<V> { ( elementOrSelector?: ( HTMLElement | string ) ): V; }
	interface $destroy { (remove?: boolean): void; }
	interface $compile { (el: Element | DocumentFragment, host?: Vue): Function; }
	
	interface Vue {
		$data?: any;
		$el?: HTMLElement;
		$options?: Object;
		$parent?: Vue;
		$root?: Vue;
		$children?: Vue[];
		$refs?: Object;
		$els?: Object;
	
		$get?: $get;
		$set?: $set;
		$delete?: $delete;
		$eval?: $eval;
		$interpolate?: $interpolate;
		$log?: $log;
		$watch?: $watch;
		$on?: $on<this>;
		$once?: $once<this>;
		$off?: $off<this>;
		$emit?: $emit<this>;
		$dispatch?: $dispatch<this>;
		$broadcast?: $broadcast<this>;
		$appendTo?: $appendTo<this>;
		$before?: $before<this>;
		$after?: $after<this>;
		$remove?: $remove<this>;
		$nextTick?: $nextTick;
		$mount?: $mount<this>;
		$destroy?: $destroy;
		$compile?: $compile;
		
		_init(options?: ComponentOption): void;
	}
	
	interface VueConfig {
		debug: boolean;
		delimiters: [string, string];
		unsafeDelimiters: [string, string];
		silent: boolean;
		async: boolean;
		convertAllProperties: boolean;
	}
	
	interface VueUtil {
		// util/lang.js
		set(obj: Object, key: string, value: any): void;
		del(obj: Object, key: string): void;
		hasOwn(obj: Object, key: string): boolean;
		isLiteral(exp: string): boolean;
		isReserved(str: string): boolean;
		_toString(value: any): string;
		toNumber<T>(value: T): T | number;
		toBoolean<T>(value: T): T | boolean;
		stripQuotes(str: string): string;
		camelize(str: string): string;
		hyphenate(str: string): string;
		classify(str: string): string;
		bind(fn: Function, ctx: Object): Function;
		toAarray<T>(list: ArrayLike<T>, start?: number): Array<T>;
		extend<T, F>(to: T, from: F): ( T & F );
		isObject(obj: any): boolean;
		isPlainObject(obj: any): boolean;
		isArray: typeof Array.isArray;
		def(obj: Object, key: string, value: any, enumerable?: boolean): void;
		debounce(func: Function, wait: number): Function;
		indexOf<T>(arr: Array<T>, obj: T): number;
		cancellable(fn: Function): Function;
		looseEqual(a: any, b: any): boolean;
		// util/env.js
		hasProto: boolean;
		inBrowser: boolean;
		isIE9: boolean;
		isAndroid: boolean;
		transitionProp: string;
		transitionEndEvent: string;
		animationProp: string;
		animationEndEvent: string;
		nextTick(cb: Function, ctx?: Object): void;
		// util/dom.js
		query(el: string | Element): Element;
		inDoc(node: Node): boolean;
		getAttr(node: Node, _attr: string): string;
		getBindAttr(node: Node, name: string): string;
		before(el: Element, target: Element): void;
		after(el: Element, target: Element): void;
		remove(el: Element): void;
		prepend(el: Element, target: Element): void;
		replace(target: Element, el: Element): void;
		on(el: Element, event: string, cb: Function): void;
		off(el: Element, event: string, cb: Function): void;
		addClass(el: Element, cls: string): void;
		removeClass(el: Element, cls: string): void;
		extractContent(el: Element, asFragment: boolean): ( HTMLDivElement | DocumentFragment );
		trimNode(node: Node): void;
		isTemplate(el: Element): boolean;
		createAnchor(content: string, persist: boolean): ( Comment | Text );
		findRef(node: Element): string;
		mapNodeRange(node: Node, end: Node, op: Function): void;
		removeNodeRange(start: Node, end: Node, vm: any, frag: DocumentFragment, cb: Function): void;
		// util/options.js
		mergeOptions<P, C>(parent: P, child: C, vm?: any): ( P & C );
		resolveAsset(options: Object, type: string, id: string): ( Object | Function );
		assertAsset(val: any, type: string, id: string): void;
		// util/component.js
		commonTagRE: RegExp;
		checkComponentAttr(el: Element, options?: Object): Object;
		initProp(vm: Vue, prop: Object, value: any): void;
		assertProp(prop: Object, value: any): boolean;
		// util/debug.js
		warn(msg: string, e?: Error): void;
		// observer/index.js
		defineReactive(obj: Object, key: string, val: any): void;
	}
	
	// instance/api/global.js
	interface VueStatic {
		new(options?: ComponentOption): Vue;
		prototype: Vue;
		util: VueUtil;
		config: VueConfig;
		set(object: Object, key: string, value: any): void;
		delete(object: Object, key: string): void;
		nextTick(callback: Function): any;
	
		cid: number;
	
		extend(options?: ComponentOption): VueStatic;
		use(callback: Function | {install: Function, [key: string]: any}, option?: Object): VueStatic;
		mixin(mixin: Object): void;
	
		directive<T extends ( Function | DirectiveOption ) >(id: string, definition: T): T;
		directive(id: string): any;
		elementDirective<T extends ( Function | DirectiveOption ) >(id: string, definition: T): T;
		elementDirective(id: string): any;
		filter<T extends ( Function | FilterOption ) >(id: string, definition: T): T;
		filter(id: string): any;
		component(id: string, definition: ComponentOption): any;
		component(id: string): any;
		transition<T extends TransitionOption >(id: string, hooks: T): T;
		transition(id: string): TransitionOption;
		partial(id: string, partial: string): string;
		partial(id: string): string;
	}
}

declare var Vue: vuejs.VueStatic;

declare module "vue" {
	export = Vue;
}
