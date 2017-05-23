// Type definitions for vuejs v0.12.10
// Project: https://github.com/yyx990803/vue
// Definitions by: Holmes Conan <https://github.com/holmescn>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/******************************************************************************
 * There is a DefinitelyTyped definition of vue. But it is based on Class, not
 * interface. So There is a new definition based on interface.
 ******************************************************************************/

interface VueJSInstance<Model> {
    /**
     * The DOM element that the Vue instance is managing.
     */
    $el?: HTMLElement;

    /**
     * The data object that the Vue instance is observing.
     */
    $data?: Model;

    /**
     * The instantiation options used for the current Vue instance.
     */
    $options?: any

    /**
     * The parent instance, if the current instance has one.
     */
    $parent?: VueJSInstance<Model>

    /**
     * The root Vue instance of the current component tree.
     */
    $root?: VueJSInstance<Model>

    /**
     * The direct child components of the current instance.
     */
    $children?: Array<VueJSInstance<Model>>

    /**
     * An object that holds child components that have v-ref registered.
     */
    $?: any

    /**
     * An object that holds DOM elements that have v-el registered.m
     */
    $$?: any

    /**
     * Watch an expression or a computed function on the Vue instance for changes.
     */
    $watch(expr: string | Function, callback: (val: any, old: any) => any, options: {
        deep: boolean,
        immediate: boolean,
        sync: boolean
    }): any

    /**
     * Retrieve a value from the Vue instance given an expression.
     */
    $get(expr: string): any

    /**
     * Set a data value on the Vue instance given a valid keypath.
     */
    $set(keypath: string, value: any): any

    /**
     * Add a root level property to the Vue instance (and also its $data).
     */
    $add(key: string, value: any): any

    /**
     * Delete a root level property on the Vue instance (and also its $data).
     */
    $delete(key: string): any

    /**
     * Evaluate an expression that can also contain filters.
     */
    $eval(expr: string): any

    /**
     * Evaluate a piece of template string containing mustache interpolations.
     */
    $interpolate(templateString: string): string

    /**
     * Log the current instance data as a plain object
     */
    $log(keypath?: string): any

    /**
     * Dispatch an event from the current vm that propagates all the way up to its $root.
     */
    $dispatch(event: string, ...args: any[]): any

    /**
     * Emit an event to all children vms of the current vm, which gets further
     * broadcasted to their children all the way down.
     */
    $broadcast(event: string, ...args: any[]): any

    /**
     * Trigger an event on this vm only.
     */
    $emit(event: string, ...args: any[]): any

    /**
     * Listen for an event on the current vm.
     */
    $on(event: string, callback: Function): any

    /**
     * Attach a one-time only listener for an event.
     */
    $once(event: string, callback: Function): any

    /**
     * stop listening for events;
     */
    $off(event?: string, callback?: Function): any

    /**
     * Append the vm’s $el to target element.
     */
    $appendTo(elem: HTMLElement | string, callback?: Function): any

    /**
     * Insert the vm’s $el before target element.
     */
    $before(elem: HTMLElement | string, callback?: Function): any

    /**
     * Insert the vm’s $el after target element.
     */
    $after(elem: HTMLElement | string, callback?: Function): any

    /**
     * Remove the vm’s $el from the DOM.
     */
    $remove(callback?: Function): any

    /**
     * Defer the callback to be executed after the next DOM update cycle.
     */
    $nextTick(callback: Function): any

    /**
     * If the Vue instance didn’t get an el option at instantiation, you can
     * manually call $mount(el) to start the compilation phase.
     */
    $mount(el?: HTMLElement | string): any

    /**
     * Completely destroy a vm.
     */
    $destroy(remove?: boolean): any

    /**
     * Partially compile a piece of DOM (Element or DocumentFragment).
     */
    $compile(elem: HTMLElement): any

    /**
     * Adds a child instance to the current instance.
     */
    $addChild(options?: any, constructor?: Function): any
}

interface VueJSPropsObject {
    type: any
    required?: boolean
    default?: any
    twoWay?: boolean
    validator?: (value: any) => boolean
}
interface VueJSProps {
    [index: string]: VueJSPropsObject | any
}

interface VueJSObject<U> {
    [index: string]: U
}

interface VueJSELFactory {
    (): HTMLElement
}

interface VueJSDirectivesObjectValue {
    bind?: () => any
    update?: (newValue: any, oldValue: any) => any
    unbind?: () => any
}

interface VueJSDirectivesObjectUpdateFunction {
    (newVal: any, oldVal: any): any
}

interface VueJSDirectivesObject {
    [index: string]: VueJSDirectivesObjectValue | VueJSDirectivesObjectUpdateFunction
}

interface VueJSTransitionOptions {
    // element is already inserted into the DOM
    // call done when animation finishes.
    enter: (el: HTMLElement, done: Function) => any
    enterCancelled: (el: HTMLElement) => any
    leave: (el: HTMLElement, done: Function) => any
    leaveCancelled: (el: HTMLElement) => any
}

/**
 * Interface for the VueJS Constructor Options
 */
interface VueJSOptions {
  /**
   * Component properties.
   */
  props?: Array<string> | VueJSProps;

  /**
   * Methods that will be used in HTML event.
   */
  methods?: VueJSObject<Function>

  /**
   * Computed properties.
   */
  computed?: VueJSObject<Function>

  /**
   * A string template to be used as the markup for the Vue instance
   */
  template?: string

  /**
   * Whether to replace the element being mounted on with the template.
   * @default: true
   */
  replace?: boolean

  /**
   * Called synchronously after the instance is created.
   */
  created?: Function

  /**
   * Called right before the compilation starts.
   */
  beforeCompile?: Function

  /**
   * Called after the compilation is finished.
   */
  compiled?: Function

  /**
   * Called after compilation and the $el is inserted into the document for the first time
   */
  ready?: Function

  /**
   * Called when vm.$el is attached to DOM
   */
  attached?: Function

  /**
   * Called when vm.$el is removed from the DOM
   */
  detached?: Function

  /**
   * Called right before a Vue instance is destroyed.
   */
  beforeDestroy?: Function

  /**
   * Called after a Vue instance has been destroyed.
   */
  destroyed?: Function

  /**
   * A hash of directives to be made available to the Vue instance.
   */
  directives?: VueJSDirectivesObject

  /**
   * A hash of element directives to be made available to the Vue instance.
   */
  elementDirectives?: VueJSDirectivesObject

  /**
   * A hash of filters to be made available to the Vue instance.
   */
  filters?: VueJSObject<Function>

  /**
   * A hash of components to be made available to the Vue instance.
   */
  components?: VueJSObject<VueJSExtendOptions | Function>

  /**
   * A hash of transitions to be made available to the Vue instance.
   */
  transitions?: VueJSObject<VueJSTransitionOptions | Function>

  /**
   * A hash of partial strings to be made available to the Vue instance.
   */
  partials?: any

  /**
   * Whether to inherit parent scope data.
   * @default false
   */
  inherit?: boolean

  /**
   * An object where keys are events to listen for and values are the corresponding callbacks.
   */
  events?: VueJSObject<Function>

  /**
   * An object where keys are expressions to watch and values are the corresponding callbacks.
   */
  watch?: VueJSObject<(val: any, old: any) => any>

  /**
   * The mixins option accepts an array of mixin objects.
   */
  mixins?: Array<any>
}

interface VueJSConstructorOptions extends VueJSOptions {
    /**
     * Model of the VM
     * @type Object | Function
     */
    data?: Function | any;

    /**
     * Provide the Vue instance with an existing DOM element
     */
    el?: string | HTMLElement | VueJSELFactory
}

interface VueJSExtendOptions extends VueJSOptions {
    /**
     * Model of the VM
     * @type Object | Function
     */
    data?: Function;

    /**
     * Provide the Vue instance with an existing DOM element
     */
    el?: VueJSELFactory

    /**
     * By passing in an optional name option to Vue.extend(), you will get a better
     * inspection output so that you know which component you are looking at.
     */
    name?: string
}

interface VueJSConfig {
    // enable debug mode. see below for details.
    debug?: boolean
    // enable strict mode. see below for details.
    strict?: boolean,
    // attribute prefix for directives
    prefix?: string,
    // interpolation delimiters
    // for HTML interpolations, add
    // 1 extra outer-most character.
    delimiters?: Array<string>,
    // suppress warnings?
    silent?: boolean,
    // interpolate mustache bindings?
    interpolate?: boolean,
    // use async updates (for directives & watchers)?
    async?: boolean,
    // allow altering observed Array's prototype chain?
    proto?: boolean
}

/**
 * Static members of VueJS
 */
interface VueJSStatic {
  new (options?: VueJSConstructorOptions): VueJSInstance<any>

  /**
   * Create a “subclass” of the base Vue constructor.
   */
  extend(options?: VueJSExtendOptions): VueJSStatic

  /**
   * an object containing Vue’s global settings.
   */
  config: VueJSConfig

  /**
   * Exposes the internal util module.
   */
  util: any

  /**
   * Defer the callback to be executed after the next DOM update cycle.
   */
  nextTick(callback: Function): any

  /**
   * Register or retrieve a global custom directive.
   */
  directive(id: string, options?: VueJSDirectivesObject | Function): any

  /**
   * Register or retrieve a global custom element directive.
   */
  elementDirective(id: string, options?: VueJSDirectivesObject | Function): any

  /**
   * Register or retrieve a global custom filter.
   */
  filter(id: string, definition?: Function): any

  /**
   * Register or retrieve a global component.
   */
  component(id: string, definition?: VueJSExtendOptions | VueJSStatic | Function): any

  /**
   * Register or retrieve a global JavaScript transition effect definition.
   */
  transition(id: string, definition?: VueJSTransitionOptions): any

  /**
   * Register or retrieve a global template partial string.
   */
  partial(id: string, partial?: string): any

  /**
   * Mount a Vue.js plugin.
   */
  use(plugin: any, ...args: any[]): any
}

declare var Vue: VueJSStatic;
declare module "vuejs" {
    export = Vue;
}
