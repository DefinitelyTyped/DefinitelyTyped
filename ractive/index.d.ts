// Type definitions for Ractive 0.7.1
// Project: http://ractivejs.org
// Definitions by: Han Lin Yap <http://yap.nu>
// Definitions: https://github.com/codler/Ractive-TypeScript-Definition
// Version: 0.7.1-1+2015-03-21

declare type _RactiveEvent = Event;

declare namespace Ractive {
    export interface Node extends HTMLElement {
        _ractive: any;
    }

    // It's functionally identical to the ES6 promise (as currently spec'd) except that Promise.race and Promise.cast are not currently implemented.
    export interface Promise extends Object {
        // TODO: Implement interface or wait until typescript include native Promise definition.
    }

    export interface AnimationPromise extends Promise {
        stop(): void; // TODO: void?
    }

    export interface AdaptorPlugin extends Object {
        // TODO:
    }

    export interface ComponentPlugin extends Static {
        // TODO:
    }

    export interface DecoratorPlugin {
        (node: HTMLElement, ...args: any[]): {
            // TODO: undocumented GH-429
            update?: (...args: any[]) => void;
            teardown: () => void;
        }
    }

    export interface EventPlugin extends Function {
        // TODO:
    }

    export interface TransitionPlugin {
        (t: Transition, params: Object): void;
    }

    export interface AdaptorPlugins {
        [key: string]: AdaptorPlugin;
    }

    export interface ComponentPlugins {
        [key: string]: ComponentPlugin;
    }

    export interface DecoratorPlugins {
        [key: string]: DecoratorPlugin;
    }

    export interface EventPlugins {
        [key: string]: EventPlugin;
    }

    export interface TransitionPlugins {
        [key: string]: TransitionPlugin;
    }

    export interface Event {
        context: any;
        component?: Ractive;
        index: { [key: string]: number };
        keypath: string;
        // Since 0.6.0
        name: string;
        node: HTMLElement;
        original: _RactiveEvent;
    }

	// Since 0.7.1
	export interface NodeInfo {
		ractive: Ractive;
		keypath: string;
		index: { [key: string]: number };
	}

    // Return value in ractive.observe and ractive.on
    export interface Observe {
        cancel(): void;
    }

    // Comes as first parameter in RactiveTransitionPlugin
    export interface Transition {
        isIntro: boolean;
        name: string;
        node: HTMLElement;

        animateStyle(prop: string, value: any, options: TransitionAnimateOptions, complete: Function): void;
        animateStyle(props: Object, options: TransitionAnimateOptions, complete: Function): void;
        // Default false
        complete(noReset?: boolean): void;
        getStyle(prop: string): string;
        getStyle(props: string[]): Object;
        processParams(params: any, defaults?: Object): Object;
        resetStyle(): void;
        setStyle(prop: string, value: any): Transition;
        setStyle(props: Object): Transition;
    }

    export interface TransitionAnimateOptions {
        // TODO: Do it have default value?
        duration: number;
        // Any valid CSS timing function
        // Default 'linear'
        easing?: string;
        // TODO: Do it have default value?
        delay: number;
    }

    export interface AnimateOptions {
        duration?: number;
        easing?: string | Function;
        // TODO: number as type correct?
        step?: (t: number, value: number) => void; // TODO: void?
        // TODO: number as type correct?
        complate?: (t: number, value: number) => void; // TODO: void?
    }

    export interface ObserveOptions extends ObserveOnceOptions {
        // Default true
        init?: boolean;
    }

	// Since 0.7.1
	export interface ObserveOnceOptions {
        // Default Ractive
        context?: any;
        // Default false
        defer?: boolean;
    }

    // Used in Ractive.parse options
    export interface ParseOptions {
        preserveWhitespace: boolean;
        sanitize: any;
    }

    // Used in Initialisation options
    export interface SanitizeOptions {
        elements: string[];
        // TODO: Undocumented what default value is, but probably false
        eventAttributes?: boolean;
    }

    export interface NewOptions {
	    /*
	     * @type List of mixed string or Adaptor
	     */
        adapt?: (string | AdaptorPlugin)[];

        adaptors?: AdaptorPlugins;

	    /**
	     * Default false
	     * @type boolean or any type that option `el` accepts (HTMLElement or String or jQuery-like collection)
	     */
        append?: boolean | any;

        complete?: Function;
        components?: ComponentPlugins;
        computed?: Object;
        // Since 0.5.5
        // TODO: unclear in documantation, should this be in ExtendOptions instead?
        css?: string;

	    /**
	     * @type Object or Function
	     */
        // TODO: undocumented type Function
        data?: Object | Function;

        decorators?: DecoratorPlugins;
	    /**
	     * @type [open, close]
	     */
        delimiters?: string[];

		// TODO: unsure
        easing?: string | Function;

	    /**
	     * @type HTMLElement or String or jQuery-like collection
	     */
        el?: string | HTMLElement | any;
        // TODO: undocumented in Initialisation options page
        events?: EventPlugins;

        // Since 0.5.5
        // TODO: unclear in documantation
        interpolators?: { [key: string]: any; };

        // Since 0.6.0
		// TODO: undocumented arguments
        onchange?: (options: NewOptions) => void; // TODO: void?
        // Since 0.6.0
		// TODO: undocumented arguments
        oncomplete?: () => void; // TODO: void?
        // Since 0.6.0
		// TODO: undocumented arguments
        onconfig?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        onconstruct?: (options: NewOptions) => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        ondetach?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        oninit?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        oninsert?: () => void; // TODO: void?
        // Since 0.6.0
		// TODO: undocumented arguments
        onrender?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        onunrender?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        onupdate?: () => void; // TODO: void?
		// Since 0.6.0
		// TODO: undocumented arguments
        onteardown?: () => void; // TODO: void?

	    /**
	     * any is same type as template
	     */
        partials?: { [key: string]: any; };
	    /**
	     * Default false
	     */
        sanitize?: boolean | SanitizeOptions;
	    /**
	     * Default ['[[', ']]']
	     * @type [open, close]
	     */
        staticDelimiters?: string[];
	    /**
	     * Default ['[[[', ']]]']
	     * @type [open, close]
	     */
        staticTripleDelimiters?: string[];
	    /**
	     * @type String or (if preparsing "Ractive.parse") Array or Object
	     */
        template?: any;
        transitions?: TransitionPlugins;
	    /**
	     * @type [open, close]
	     */
        tripleDelimiters?: string[];

        // Default false
        lazy?: boolean;
        // Default false
        magic?: boolean;
        // Default true
        modifyArrays?: boolean;
        // Since 0.5.5
        // TODO: unclear in documentation
        // Default false
        noCSSTransform?: boolean;
        // Default false
        noIntro?: boolean;
        // Default false
        preserveWhitespace?: boolean;
        // Since 0.5.5
        // Default true
        stripComments?: boolean;
		// Since 0.7.1
		// Default true
		transitionsEnabled?: boolean;
        // Default true
        twoway?: boolean;

    }

    export interface ExtendOptions extends NewOptions {
        /**
         * @deprecated
         */
        beforeInit?: (options: ExtendOptions) => void;
        /**
         * @deprecated
         */
        init?: (options: ExtendOptions) => void;

        // Default false, inherit from Ractive.defaults
        isolated?: boolean;
    }

    // See ractive change log "All configuration options, except plugin registries, can be specified on Ractive.defaults and Component.defaults"
    export interface DefaultsOptions extends ExtendOptions {
        /**
         * @deprecated since 0.7.1
         */
        // Default false
        debug?: boolean;
    }

    /**
     * Static members of Ractive
     */
    export interface Static {
        new (options: NewOptions): Ractive;

        extend(options: ExtendOptions): Static;

		// Since 0.7.1
		getNodeInfo(node: HTMLElement): NodeInfo;

        parse(template: string, options?: ParseOptions): any;

        // TODO: undocumented
        adaptors: AdaptorPlugins;

        // TODO: undocumented
        components: ComponentPlugins;

		// Since 0.7.1
		DEBUG: boolean;

        defaults: DefaultsOptions;

        // TODO: undocumented
        decorators: DecoratorPlugins;

        easing: { [key: string]: (x: number) => number; };

        // TODO: undocumented
        events: EventPlugins;

        // TODO: missing static properties documentation
        partials: { [key: string]: any; };

        // Undocumented method
        Promise: Promise;

        // TODO: missing static properties documentation
        transitions: TransitionPlugins;
    }

    /**
     * The Ractive instance members
     */
    export interface Ractive {
        add(keypath: string, number?: number): Promise;

        animate(keypath: string, value: any, options?: AnimateOptions): AnimationPromise;

        animate(map: Object, options?: AnimateOptions): AnimationPromise;

        detach(): DocumentFragment;

        find(selector: string): HTMLElement;

        // live default false
        findAll(selector: string, options?: { live: boolean }): HTMLElement[];

        // live default false
        findAllComponents(name: string, options?: { live: boolean }): Ractive[];
        // TODO: maybe exist, in that case it is undocumented
        // findAllComponents(): Ractive[]

        findComponent(name?: string): Ractive;

		// Since 0.7.1
		findContainer(name: string): Ractive; // TODO: Ractive?

		// Since 0.7.1
		findParent(name: string): Ractive; // TODO: Ractive?

        fire(eventName: string, ...args: any[]): void; // TODO: void?

        get(keypath: string): any;
        get(): Object; // TODO: Object?

        // target - Node or String or jQuery (see Valid selectors)
        // anchor - Node or String or jQuery
        insert(target: any, anchor?: any): void; // TODO: void?

        merge(keypath: string, value: any[], options?: { compare: boolean | string | Function }): Promise;

        // callback context Ractive
        observe(keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: ObserveOptions): Observe;
        observe(map: Object, options?: ObserveOptions): Observe;

		// Since 0.7.1
		observeOnce(keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: ObserveOnceOptions): Observe;

        // handler context Ractive
        off(eventName?: string, handler?: (event?: Ractive.Event | any, ...args: any[]) => any): Ractive;
        on(eventName: string, handler: (event?: Ractive.Event | any, ...args: any[]) => any): Observe;
        on(map: { [eventName: string]: (event?: Ractive.Event | any, ...args: any[]) => any }): Observe;
		// Since 0.7.1
		once(eventName: string, handler: (event?: Ractive.Event | any, ...args: any[]) => any): Observe;

        // Since 0.5.5
        pop(keypath: string): Promise;

        // Since 0.5.5
        push(keypath: string, value: any): Promise;

        // target - Node or String or jQuery (see Valid selectors)
        render(target: any): void; // TODO: void?

		// Default {}
        reset(data?: Object): Promise;

		// Since 0.7.1
		resetPartial(name: string, partial: any): Promise;

        // Since 0.5.5
        // TODO: undocumented, mentioned in ractive change log
		// https://github.com/ractivejs/docs.ractivejs.org/issues/188
        resetTemplate(): void; // TODO: void?

        set(keypath: string, value: any): Promise;
        set(map: Object): Promise;

        // Since 0.5.5
        shift(keypath: string): Promise;

        // Since 0.5.5
        splice(keypath: string, index: number, removeCount: number, ...add: any[]): Promise;

        subtract(keypath: string, number?: number): Promise;

        teardown(): Promise;

        toggle(keypath: string): Promise;

        toHTML(): string;

        // Since 0.6.0
        unrender(): void; // TODO: void?

        // Since 0.5.5
        unshift(keypath: string, value: any): Promise;

        update(keypath?: string): Promise;

	    /**
	     * Update out of sync two-way bindings
	     * @param keypath A string
	     * @param cascade A boolean with default false
	     */
        updateModel(keypath?: string, cascade?: boolean): Promise;

        // Properties
		// Since 0.7.1
		container: Ractive; // TODO: Ractive?
        nodes: Object;
        partials: Object;
		// Since 0.7.1
		parent: Ractive; // TODO: Ractive?
		// Since 0.7.1
		root: Ractive; // TODO: Ractive?
		transitions: Object;
    }
}

// used for require()
declare module "ractive" {
    export = Ractive;
}
declare var Ractive: Ractive.Static;
