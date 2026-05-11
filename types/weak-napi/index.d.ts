/// <reference types="node" />

declare class WeakRef<T> {}

/**
 * Makes weak references to JavaScript Objects
 * @param object can be a regular Object, an Array, a Function, a RegExp, or any of the primitive types or constructor function created with new
 * @param callback a callback function to be invoked before the object is garbage collected
 */
declare function weak<T extends object>(object: T, callback?: () => void): WeakRef<T>;

declare namespace weak {
    // export alias
    const create: typeof weak;
    /**
     * Returns the actual reference to the Object that this weak reference was created with. If this is called with a dead reference, undefined is returned.
     * @param ref weak reference object
     */
    function get<T>(ref: WeakRef<T>): T | undefined;

    /**
     * Checks to see if ref is a dead reference. Returns true if the original Object has already been GC'd, false otherwise
     * @param ref weak reference object
     */
    function isDead(ref: WeakRef<any>): ref is WeakRef<undefined>;

    /**
     * Checks to see if ref is "near death". This will be true exactly during the weak reference callback function, and false any other time.
     * @param ref weak reference object
     */
    function isNearDeath(ref: WeakRef<any>): false;

    /**
     * Checks to see if obj is "weak reference" instance. Returns true if the passed in object is a "weak reference", false otherwise.
     * @param obj object to check
     */
    function isWeakRef(obj: any): obj is WeakRef<any>;

    /**
     * Adds callback to the Array of callback functions that will be invoked before the Object gets garbage collected. The callbacks get executed in the order that they are added.
     * @param ref weak reference object
     * @param callback function to be called
     */
    function addCallback(ref: WeakRef<any>, callback: () => void): NodeJS.EventEmitter;

    /**
     * Removes callback from the Array of callback functions that will be invoked before the Object gets garbage collected.
     * @param ref weak reference object
     * @param callback function to be called
     */
    function removeCallback(ref: WeakRef<any>, callback: () => void): NodeJS.EventEmitter;

    /**
     * Empties the Array of callback functions that will be invoked before the Object gets garbage collected.
     * @param ref weak reference object
     */
    function removeCallbacks(ref: WeakRef<any>): NodeJS.EventEmitter;

    /**
     * Returns an Array that ref iterates through to invoke the GC callbacks. This utilizes node's EventEmitter#listeners() function and therefore returns a copy in node 0.10 and newer.
     * @param ref weak reference object
     */
    function callbacks(ref: WeakRef<any>): Array<(() => void)>;
}

export = weak;
