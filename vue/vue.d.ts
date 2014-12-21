// Type definitions for vuejs 0.11.0
// Project: https://github.com/yyx990803/vue
// Definitions by: odangosan https://github.com/odangosan
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module vue {
  export class Vue {
    /**
     * The Vue Constructor
     * http://vuejs.org/api/index.html
     */
    constructor(options?: {});

    /**
     * Options
     * http://vuejs.org/api/options.html
     */
    // still...

    /**
     * Instance Properties
     * http://vuejs.org/api/instance-properties.html
     */
    $el: HTMLElement;
    $data: Object;
    $options: Object;
    $parent: Vue;
    $root: Vue;
    $: Object;
    $$: Object;

    /**
     * Instance Methods
     * http://vuejs.org/api/instance-methods.html
     */
    /**
     * Data
     */
    $watch(expression: string, callback: ValueCallback, deep?: boolean, immediate?: boolean): void;
    $get(expression: string): any;
    $set(keypath: string, value: any): void;
    $add(keypath: string, value: any): void;
    $delete(keypath: string): void;
    $eval(expression: string): any;
    $interpolate(templateString: string): string;
    $log(keypath?: string): void;

    /**
     * Events
       */
    $dispatch(event: string, ...args: any[]): Vue;
    $broadcast(event: string, ...args: any[]): Vue;
    $emit(event: string, ...args: any[]): Vue;
    $on(event: string, callback: Function): Vue;
    $once(event: string, callback: Function): Vue;
    $off(event?: string, callback?: Function): Vue;

    /**
     * DOM
     */
    $appendTo(element: any, callback?: Function): Vue;// element or selector
    $prependTo(element: any, callback?: Function): Vue;// element or selector
    $before(element: any, callback?: Function): Vue;// element or selector
    $after(element: any, callback?: Function): Vue;// element or selector
    $remove(callback?: Function): Vue;

    /**
     * Lifecycle
     */
    $mount(element?: any): Vue;// element or selector
    $destroy(remove?: boolean): void;
    $compile(element: HTMLElement): VueCallback;// returns a decompile function
    $addChild(options?: Object, constructor?: Function): Vue;

    /**
     * Global Api
     * http://vuejs.org/api/global-api.html
     */
    static config: VueConfig;
    static extend(options: {}): Vue;
    static directive(id: string, definition?: Object): void;
    static directive(id: string, definition?: VueCallback): void;
    static filter(id: string, definition?: VueCallback): void;
    static component(id: string, definition: Vue): void;
    static component(id: string, definition?: Object): void;
    static transition(id: string, definition?: Object): void;
    static partial(id: string, definition?: string): void;
    static partial(id: string, definition?: HTMLElement): void;
    static nextTick(callback: VueCallback): void;
    static require(module: string): void;
    static use(plugin: Object, ...args: any[]): Vue;
    static use(plugin: VueCallback, ...args: any[]): Vue;

    /**
     * exports members.
     */
    _init(options: {}): void;
    _cleanup(): void;
    // static require(module:string) : void;
    el: string;
    data: {};
    ready: VueCallback;
    beforeCompile: VueCallback;
    compiled: VueCallback;
    created: VueCallback;
    attached: VueCallback;
    detached: VueCallback;
    beforeDestroy: VueCallback;
    destroyed: VueCallback;

    directives: {};
    filters: {};
    partials: {};
    transitions: {};
    components: {};
    watch: {};
    events: {};
    methods: {};
    computed: {};

  }

  class VueConfig {
    prefix: string;
    debug: boolean;
    silent: boolean;
    proto: boolean;
    interpolate: boolean;
    async: boolean;
    delimiters: string[];
  }

  interface ValueCallback {
    (newValue: {}, oldValue: {}): void;
  }

  interface VueCallback {
    (): void;
  }
}
import Vue = vue.Vue;
