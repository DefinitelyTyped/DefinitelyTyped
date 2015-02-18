// Type definitions for Ractive 0.7.0 edge f22ab8ad0a640591b1c263f57e21d1565cb26bf5
// Project: http://ractivejs.org
// Definitions by: Han Lin Yap <http://yap.nu>
// Definitions: https://github.com/codler/Ractive-TypeScript-Definition
// Version: 0.7.0-1+2015-02-05

declare module Ractive {
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
        // TODO: unclear in documantation
        index: Object;
        keypath: string;
        node: HTMLElement;
        original: Event;
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

    export interface ObserveOptions {
        // Default Ractive
        context?: any;
        // Default false
        defer?: boolean;
        // Default true
        init?: boolean;
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
        adapt?: any[];

        adaptors?: AdaptorPlugins;

	    /**
	     * Default false
	     * @type boolean or any type that option `el` accepts (HTMLElement or String or jQuery-like collection)
	     */
        append?: any;

        complete?: Function;
        components?: ComponentPlugins;
        computed?: Object;
        // Since 0.5.5
        // TODO: unclear in documantation
        css?: string;

	    /**
	     * TODO: Question - When is data Array or String?
	     *
	     * @type Object, Array, String or Function
	     */
        // TODO: undocumented type Function
        data?: any;

        decorators?: DecoratorPlugins;
	    /**
	     * @type [open, close]
	     */
        delimiters?: string[];

        easing?: string | Function;

	    /**
	     * @type HTMLElement or String or jQuery-like collection
	     */
        el?: any;
        // TODO: undocumented in Initialisation options page
        events?: EventPlugins;

        // TODO: In next release
        // TODO: undocumented GH-429
        // interpolate

        // Since 0.5.5
        // TODO: unclear in documantation
        interpolators?: { [key: string]: any; };

        // Since 0.6.0
        onconstruct?: (options: NewOptions) => void; // TODO: void?
        // Since 0.6.0
        onchange?: (options: NewOptions) => void; // TODO: void?

	    /**
	     * any is same type as template
	     */
        partials?: { [key: string]: any; };
	    /**
	     * Default false
	     * @type Boolean or RactiveSanitizeOptions
	     */
        sanitize?: any;
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

        // TODO: undocumented arguments
        onconstruct?: (options: ExtendOptions) => void; // TODO: void?
        onrender?: () => void; // TODO: void?
        // Default false, inherit from Ractive.defaults
        isolated?: boolean;
    }

    // See ractive change log "All configuration options, except plugin registries, can be specified on Ractive.defaults and Component.defaults"
    export interface DefaultsOptions extends ExtendOptions {
        // TODO: not correctly documented
        // Default false
        debug?: boolean;
    }

    /**
     * Static members of Ractive
     */
    export interface Static {
        new (options: NewOptions): Ractive;

        extend(options: ExtendOptions): Static;

        parse(template: string, options?: ParseOptions): any;

        // TODO: undocumented
        adaptors: AdaptorPlugins;

        // TODO: undocumented
        components: ComponentPlugins;

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

        fire(eventName: string, ...args: any[]): void; // TODO: void?

        get(keypath: string): any;
        get(): Object; // TODO: undocumented. or do it return function if ractive.data defined as function?

        // TODO: target - Node or String or jQuery (see Valid selectors)
        // TODO: anchor - Node or String or jQuery
        insert(target: any, anchor?: any): void; // TODO: void?
        
        merge(keypath: string, value: any[], options?: { compare: boolean | string | Function }): Promise;

        // callback context Ractive
        observe(keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: ObserveOptions): Observe;
        observe(map: Object, options?: ObserveOptions): Observe;

        // TODO: check handler type
        off(eventName?: string, handler?: () => void): Ractive;

        // handler context Ractive
        on(eventName: string, handler: (event?: Event, ...args: any[]) => void): Observe;
        // TODO: undocumented
        on(map: { [eventName: string]: (event?: Event, ...args: any[]) => void }): Observe;

        // Since 0.5.5
        pop(keypath: string): Promise;

        // Since 0.5.5
        push(keypath: string, value: any): Promise;

        // TODO: target - Node or String or jQuery (see Valid selectors)
        render(target: any): void; // TODO: void?

        reset(data?: Object): Promise;

        // Since 0.5.5
        // TODO: undocumented, mentioned in ractive change log
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

        nodes: Object;
        partials: Object;
        transitions: Object;
    }
}

declare module "ractive" {
    export = Ractive;
}
declare var Ractive: Ractive.Static;
