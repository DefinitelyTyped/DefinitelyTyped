/// <reference path="../jquery/jquery.d.ts" />

// Type definitions for Flight 1.1.1
// Project: http://flightjs.github.com/flight/
// Definitions by: Jonathan Hedrén <https://github.com/jonathanhedren/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface FlightAdvice {
    after(method: string, fn: Function);
    around(method: string, fn: Function);
    before(method: string, fn: Function);
}

interface FlightComponent {
    node: Element;
    $node: JQuery;
}

interface FlightBase extends FlightAdvice, FlightComponent {

    /**
     * Most Components and Mixins need to define attributes. In Flight, 
     * default values are assigned by passing an object to the defaultAttrs 
     * function.
     */
    defaultAttrs(obj: Object);
    
    /**
     * The select method takes an attr key as its argument. The value of the 
     * attr must be a CSS Selector. The method will return all matching 
     * elements within the component's node.
     *
     * This is a handy alternative to jQuery's this.$node.find() and prevents 
     * accidental access to elements outside of the component's node.
     *
     * @param attr 
     */
    select(attr: string)

    /**
     * This method is attached to the prototype of every Component; it accepts 
     * the component's node and an options object as arguments. The core 
     * implementation, which is called every time an instance is created, will
     * assign the node to the instance and override the default attrs with the 
     * options object.
     *
     * Components and Mixins will typically augment the core implementation by 
     * supplying a function as an argument to the after method (see the advice 
     * API for more information). This is a good place to set up event 
     * listeners that bind to callbacks.
     */
    initialize();

    /**
     * This allows a component instance to listen to an event and register a 
     * callback to be invoked. Flight will automatically bind the context 
     * (this) of the callback to the component instance.
     *
     * @param selector Optional. Specify the DOM node(s) that should listen 
	 *        for the event. Defaults to the component instance's node value.
     *
     * @param eventType The event type to listen for.
     *
     * @param handler Either a function (callback) to be invoked, or a map of 
	 *        targets and callbacks.
     */
    on(eventType: string, handler: Function);
    on(selector: string, eventType: string, handler: Function);
    on(selector: Document, eventType: string, handler: Function);
    on(selector: Element, eventType: string, handler: Function);
    on(selector: Element[], eventType: string, handler: Function);
    on(selector: string, eventType: string, handler: Object);
    on(selector: Document, eventType: string, handler: Object);
    on(selector: Element, eventType: string, handler: Object);
    on(selector: Element[], eventType: string, handler: Object);

    /**
     * If we no longer want a component instance to listen to an event we can 
     * use the off method to unsubscribe.
     *
     * @param selector Optional. The DOM node(s) listening for the event. 
     *        Defaults to the component instance's node value.
     *
     * @param eventType The event type being listened to.
     *
     * @param handler Optional. The function (callback) to detach from the 
     *        component instance. Defaults to the detaching all callbacks for the event.
	 */
    off(eventType: string, handler?: Function);
    off(selector: string, eventType: string, handler?: Function);
    off(selector: Document, eventType: string, handler?: Function);
    off(selector: Element, eventType: string, handler?: Function);
    off(selector: Element[], eventType: string, handler?: Function);
    off(selector: string, eventType: Object, handler?: Function);
    off(selector: Document, eventType: Object, handler?: Function);
    off(selector: Element, eventType: Object, handler?: Function);
    off(selector: Element[], eventType: Object, handler?: Function);
    off(selector: string, eventType: string, handler?: Object);
    off(selector: Document, eventType: string, handler?: Object);
    off(selector: Element, eventType: string, handler?: Object);
    off(selector: Element[], eventType: string, handler?: Object);
    off(selector: string, eventType: Object, handler?: Object);
    off(selector: Document, eventType: Object, handler?: Object);
    off(selector: Element, eventType: Object, handler?: Object);
    off(selector: Element[], eventType: Object, handler?: Object);

    /**
     * Trigger an event.
     *
     * @param selector Optional. The DOM node(s) that the event will be 
     *        dispatched to. Defaults to the component instance's node value.
     *
     * @param eventType String. The event type to be triggered.
     *
     * You can also specify a default function that will be called by the 
     * component, providing that nothing in the event's bubble chain invokes 
     * preventDefault. Default functions in custom events are analagous to the 
     * default actions of native events.
     *
     * To define a default function, make the eventType argument an object 
     * that specifies the event's type and a defaultBehavior property. A 
     * common use case is defining default behavior for keyboard events.
     *
     * @param eventPayload This is the payload of data that accompanies the event.
     */
    trigger(eventType: string);
    trigger(selector: string, eventType: string, eventPayload?: Object);
    trigger(selector: Document, eventType: string, eventPayload?: Object);
    trigger(selector: Element, eventType: string, eventPayload?: Object);
    trigger(selector: Element[], eventType: string, eventPayload?: Object);
    trigger(eventType: Object);
    trigger(selector: string, eventType: Object, eventPayload?: Object);
    trigger(selector: Document, eventType: Object, eventPayload?: Object);
    trigger(selector: Element, eventType: Object, eventPayload?: Object);
    trigger(selector: Element[], eventType: Object, eventPayload?: Object);

    /**
     * Remove a component instance and its event bindings.
     *
     * It's a good idea to teardown components after each unit test - and 
     * teardown is also good for unbinding event listeners when, for example, 
     * the user navigates away from a page.
     *
     */
    teardown();
}
                  
interface FlightAdviceStatic {
    withAdvice();
}
 
interface FlightComponentStatic {
    (...fns: Function[]): FlightComponentStatic;
    attachTo(selector: string, options?: Object);
    attachTo(selector: Element, options?: Object);
    attachTo(selector: JQuery, options?: Object);
    teardownAll();
}

interface FlightComposeStatic {
    mixin(base: Object, mixins: Function[]): void;
    unlockProperty(obj, prop, op);
}
interface FlightLogger {

}

interface FlightRegistryStatic {
    addInstance(instance);
    allInstances: Object;
    components: Array<FlightComponentStatic>;
    events: Array;
    findComponentInfo(which);
    findInstanceInfo(instance);
    findInstanceInfoByNode(node);
    off(el, type, callback);
    on(componentOn);
    removeComponentInfo(componentInfo);
    removeInstance(instance);
    reset();
    teardown();
    trigger();
    withRegistration();
}

interface FlightUtilsStatic {
    compose(fn1: Function, fn2: Function, ...fns: Function[]): Function;
    countThen(num: number, base: Function): Function;
    debounce(func: Function, wait: number, immediate: boolean): Function;
    delegate(rules: Object);
    isDomObj(obj): boolean;
    isEnumerable(obj: Object, property): boolean;
    merge(obj1: Object, obj2: Object, deepClone?: boolean): Object;
    merge(obj1: Object, obj2:Object, ...args: any[]): Object;
    push(base: Object, extra: Object, protect?: boolean);
    throttle(func: Function, wait: number): Function;
    toArray(obj: Object, from?: number): Array;
    uniqueArray(array: Array): Array;
}

interface FlightEventData {
    el: HTMLElement;
}

interface FlightStatic {
    advice: FlightAdviceStatic;
    component: FlightComponentStatic;
    compose: FlightComposeStatic;
    logger: FlightLogger;
    registry: FlightRegistryStatic;
    utils: FlightUtilsStatic;
}

declare module "flight" {
    export = flight;
}
declare var flight: FlightStatic;