/**
 * Function used as .init() argument.
 */
interface Init {
    (ctx: Context): any | Promise<any>;
}

/**
 * The .init() function argument.
 */
interface Context {
    /**
     * The object which has been just instantiated.
     */
    instance: any;

    /**
     * The stamp the object has been instantiated with.
     */
    stamp: Stamp;

    /**
     * The arguments list passed to the stamp.
     */
    args: any[];
}

/**
 * An object map containing the fixed prototypes.
 */
interface Fixed {
    methods: {};

    /**
     * @deprecated Use .refs() instead.
     */
    state: {};

    refs: {};

    /**
     * @deprecated Use .init() instead.
     */
    enclose: Init[];

    init: Init[];

    props: {};

    static: {};
}

interface Options {
    /**
     * A hash containing methods (functions) of any future created instance.
     */
    methods?: {} | {}[] | undefined;

    /**
     * A hash containing references to the object. This hash will be shallow mixed into any future created instance.
     */
    refs?: {} | {}[] | undefined;

    /**
     * Initialization function which will be called per each newly created instance.
     */
    init?: Init | Init[] | undefined;

    /**
     * Properties which will be deeply (but safely, no data override) merged into any future created instance.
     */
    props?: {} | {}[] | undefined;

    /**
     * Properties which will be mixed to the new and any other stamp which this stamp will be composed with.
     */
    static?: {} | {}[] | undefined;
}

/**
 * A factory function that will produce new objects using the
 * prototypes that are passed in or composed.
 */
interface Stamp {
    /**
     * Invokes the stamp and returns a new object instance.
     * @param state Properties you wish to set on the new objects.
     * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
     * WARNING Avoid using two different .enclose() functions that expect different arguments.
     * .enclose() functions that take arguments should not be considered safe to compose
     * with other .enclose() functions that also take arguments. Taking arguments with
     * an .enclose() function is an anti-pattern that should be avoided, when possible.
     * @return A new object composed of the Stamps and prototypes provided.
     */
    (state?: {}, ...encloseArgs: any[]): any | Promise<any>;

    /**
     * Just like calling stamp(), stamp.create() invokes the stamp and returns a new instance.
     * @param state Properties you wish to set on the new objects.
     * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
     * WARNING Avoid using two different .enclose() functions that expect different arguments.
     * .enclose() functions that take arguments should not be considered safe to compose
     * with other .enclose() functions that also take arguments. Taking arguments with
     * an .enclose() function is an anti-pattern that should be avoided, when possible.
     * @return A new object composed of the Stamps and prototypes provided.
     */
    create(state?: {}, ...encloseArgs: any[]): any | Promise<any>;

    /**
     * An object map containing the fixed prototypes.
     */
    fixed: Fixed;

    /**
     * Add methods to the methods prototype.  Creates and returns new Stamp. Chainable.
     * @param methods Object(s) containing map of method names and bodies for delegation.
     * @return A new Stamp.
     */
    methods(...methods: {}[]): Stamp;

    /**
     * Take n objects and add them to the state prototype. Creates and returns new Stamp. Chainable.
     * @param states Object(s) containing map of property names and values to clone for each new object.
     * @return A new Stamp.
     */
    refs(...states: {}[]): Stamp;

    /**
     * Take n objects and merge them (but safely, no data override) to the of any future created instance.
     * Creates and returns new Stamp. Chainable.
     * @param objects Object(s) to merge for each new object.
     * @return A new Stamp.
     */
    props(...objects: {}[]): Stamp;

    /**
     * @deprecated Use .refs() instead.
     */
    state(...states: {}[]): Stamp;

    /**
     * @deprecated Use .init() instead.
     */
    enclose(...functions: Init[]): Stamp;

    /**
     * @deprecated Use .init() instead.
     */
    enclose(...functions: {}[]): Stamp;

    /**
     * Take n functions, an array of functions, or n objects and add the functions to the enclose prototype.
     * Functions passed into .enclose() are called any time an object is instantiated.
     * That happens when the stamp function is invoked, or when the .create() method is called.
     * Creates and returns new Stamp. Chainable.
     * @param functions Closures (functions) used to create private data and privileged methods.
     * @return A new Stamp.
     */
    init(...functions: Init[]): Stamp;

    /**
     * Take n functions, an array of functions, or n objects and add the functions to the enclose prototype.
     * Functions passed into .enclose() are called any time an object is instantiated.
     * That happens when the stamp function is invoked, or when the .create() method is called.
     * Creates and returns new Stamp. Chainable.
     * @param functions Function properties of these objects will be treated as closure functions.
     * @return A new Stamp.
     */
    init(...functions: {}[]): Stamp;

    /**
     * Take n objects and add them to a new stamp and any future stamp it composes with.
     * Creates and returns new Stamp. Chainable.
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     * @return A new Stamp.
     */
    static(...statics: {}[]): Stamp;

    /**
     * Take one or more Stamps and
     * combine them with `this` to produce and return a new Stamp.
     * Combining overrides properties with last-in priority.
     * NOT chainable.
     * @param stamps Stampit factories, aka Stamps.
     * @return A new Stamp composed from arguments and `this`.
     */
    compose(...stamps: Stamp[]): Stamp;
}

/**
 * Return a factory (akaStamp) function that will produce new objects using the
 * prototypes that are passed in or composed.
 * @param {object} options Stampit options object containing refs, methods, init, props, and static.
 * @param {object} options.methods A map of method names and bodies for delegation.
 * @param {object} options.refs A map of property names and values to clone for each new object.
 * @param {object} options.props A map of property names and values to clone for each new object.
 * @param {function} options.init A closure(s) (function(s)) used to create private data and privileged methods.
 * @param {object} options.static A map of properties to mixin into new and other stamp it will compose with.
 */
declare function stampit(options?: Options): Stamp;

declare namespace stampit {
    /**
     * A shortcut methods for stampit().methods()
     * @param methods Object(s) containing map of method names and bodies for delegation.
     * @return A new Stamp.
     */
    export function methods(...methods: {}[]): Stamp;

    /**
     * A shortcut methods for stampit().refs()
     * @param states Object(s) containing map of property names and values to clone for each new object.
     * @return A new Stamp.
     */
    export function refs(...states: {}[]): Stamp;

    /**
     * A shortcut methods for stampit().props()
     * @param states Object(s) to merge for each new object.
     * @return A new Stamp.
     */
    export function props(...states: {}[]): Stamp;

    /**
     * A shortcut methods for stampit().init()
     * @param functions Closures (functions) used to create private data and privileged methods.
     * @return A new Stamp.
     */
    export function init(...functions: Init[]): Stamp;

    /**
     * A shortcut methods for stampit().static()
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp (NOT OBJECT).
     * @return A new Stamp.
     */
    export function static(...statics: {}[]): Stamp;

    /**
     * Take two or more Stamps and combine them to produce a new Stamp.
     * Combining overrides properties with last-in priority.
     * @param stamps Stamps produced by stampit.
     * @return A new Stamp made of all the given.
     */
    export function compose(...stamps: Stamp[]): Stamp;

    /**
     * Take a destination object followed by one or more source objects,
     * and copy the source object properties to the destination object,
     * with last in priority overrides.
     * @param destination An object to copy properties to.
     * @param source Objects to copy properties from.
     * @return The destination object.
     */
    export function mixin(destination: any, ...source: any[]): any;

    /**
     * Alias for mixin()
     */
    export function mixIn(destination: any, ...source: any[]): any;

    /**
     * Alias for mixin()
     */
    export function extend(destination: any, ...source: any[]): any;

    /**
     * Alias for mixin()
     */
    export function assign(destination: any, ...source: any[]): any;

    /**
     * Check if an object is a Stamp.
     * @param obj An object to check.
     * @return true if the object is a Stamp; otherwise - false.
     */
    export function isStamp(obj: any): boolean;

    /**
     * Take an old-fashioned JS constructor and return a Stamp
     * that you can freely compose with other Stamps.
     * @param Constructor Old-fashioned constructor function.
     * @return A new Stamp based on the given constructor.
     */
    export function convertConstructor(Constructor: any): Stamp;
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "stampit" {
    export = stampit;
}
