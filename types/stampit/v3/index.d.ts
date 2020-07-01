// Type definitions for stampit 3.0
// Project: https://github.com/stampit-org/stampit, https://stampit.js.org
// Definitions by: Vasyl Boroviak <https://github.com/koresar>
//                 Harris Lummis <https://github.com/lummish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Function used as .init() argument.
 */
type Init = (factoryArg: any, ctx?: Context) => any;

/**
 * Composer function
 */
type Composer = ({ stamp, composables }: { stamp: stampit.Stamp; composables: Composable[] }) => any;

/** The stamp Descriptor */
interface Descriptor {
    /** Create a new stamp based on this descriptor */
    (...composables: Composable[]): stampit.Stamp;
    /**
     * A hash containing methods (functions) of any future created instance.
     */
    methods?: {};
    /**
     * Initialization function(s) which will be called per each newly created
     * instance.
     */
    initializers?: Init[];
    /**
     * Properties which will shallowly copied into any future created instance.
     */
    properties?: {};
    /**
     * Properties which will be mixed to the new and any other stamp which this stamp will be composed with.
     */
    staticProperties?: {};
    /** Deeply merged properties of object instances */
    deepProperties?: {};
    /** ES5 Property Descriptors applied to object instances */
    propertyDescriptors?: {};
    /** Deeply merged properties of Stamps */
    staticDeepProperties?: {};
    /** ES5 Property Descriptors applied to Stamps */
    staticPropertyDescriptors?: {};
    /** A configuration object to be shallowly assigned to Stamps */
    configuration?: {};
    /** A configuration object to be deeply merged to Stamps */
    deepConfiguration?: {};
}

/** Any composable object (stamp or descriptor) */
type Composable = stampit.Stamp | Descriptor;

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
    stamp: stampit.Stamp;

    /**
     * The arguments list passed to the stamp.
     */
    args: any[];
}

interface Options {
    /**
     * A hash containing methods (functions) of any future created instance.
     */
    methods?: {};
    /**
     * Initialization function(s) which will be called per each newly created
     * instance.
     */
    init?: Init | Init[];
    /**
     * Initialization function(s) which will be called per each newly created
     * instance.
     */
    initializers?: Init | Init[];
    /**
     * Properties which will shallowly copied into any future created instance.
     */
    props?: {};
    /**
     * Properties which will shallowly copied into any future created instance.
     */
    properties?: {};
    /**
     * A hash containing references to the object. This hash will be shallow mixed into any future created instance.
     */
    refs?: {};
    /**
     * Properties which will be mixed to the new and any other stamp which this
     * stamp will be composed with.
     */
    staticProperties?: {};
    /**
     * Properties which will be mixed to the new and any other stamp which this
     * stamp will be composed with.
     */
    statics?: {};
    /** Deeply merged properties of object instances */
    deepProperties?: {};
    /** Deeply merged properties of object instances */
    deepProps?: {};
    /** ES5 Property Descriptors applied to object instances */
    propertyDescriptors?: {};
    /** Deeply merged properties of Stamps */
    staticDeepProperties?: {};
    /** Deeply merged properties of Stamps */
    deepStatics?: {};
    /** ES5 Property Descriptors applied to Stamps */
    staticPropertyDescriptors?: {};
    /** A configuration object to be shallowly assigned to Stamps */
    configuration?: {};
    /** A configuration object to be shallowly assigned to Stamps */
    conf?: {};
    /** A configuration object to be deeply merged to Stamps */
    deepConfiguration?: {};
    /** A configuration object to be deeply merged to Stamps */
    deepConf?: {};
    /** Callback functions to execute each time a composition occurs */
    composers?: Composer[];
}

/** Stampit Composable for main stampit() function */
type StampitComposable = stampit.Stamp | Descriptor | Options;

/**
 * Return a factory (aka Stamp) function that will produce new objects using the
 * prototypes that are passed in or composed.
 * @param options Stampit options object containing refs, methods,
 * init, props, statics, configurations, and property descriptors.
 */
declare function stampit(...composables: StampitComposable[]): stampit.Stamp;

declare namespace stampit {
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
        (state?: {}, ...encloseArgs: any[]): any;

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
        create(state?: {}, ...encloseArgs: any[]): any;

        /**
         * Stamp metadata/composer function
         */
        compose: Descriptor;

        /**
         * Add methods to the methods prototype.  Creates and returns new Stamp. Chainable.
         * @param methods Object(s) containing map of method names and bodies for delegation.
         * @return A new Stamp.
         */
        methods(...methods: Array<{}>): Stamp;

        /**
         * Take n objects and add them to the state prototype. Creates and returns new Stamp. Chainable.
         * @param states Object(s) containing map of property names and values to clone for each new object.
         * @return A new Stamp.
         */
        refs(...states: Array<{}>): Stamp;

        /**
         * Take a variable number of objects and shallow assign them to any future
         * created instance of the Stamp. Creates and returns new Stamp. Chainable.
         * @param objects Object(s) to shallow assign for each new object.
         * @return A new Stamp.
         */
        props(...objects: Array<{}>): Stamp;

        /**
         * Take a variable number of objects and shallow assign them to any future
         * created instance of the Stamp. Creates and returns new Stamp. Chainable.
         * @param objects Object(s) to shallow assign for each new object.
         * @return A new Stamp.
         */
        properties(...objects: Array<{}>): Stamp;

        /**
         * Take a variable number of objects and deeply merge them to any future
         * created instance of the Stamp. Creates and returns a new Stamp.
         * Chainable.
         * @param deepObjects The object(s) to deeply merge for each new object
         * @returns A new Stamp
         */
        deepProps(...deepObjects: Array<{}>): Stamp;

        /**
         * Take a variable number of objects and deeply merge them to any future
         * created instance of the Stamp. Creates and returns a new Stamp.
         * Chainable.
         * @param deepObjects The object(s) to deeply merge for each new object
         * @returns A new Stamp
         */
        deepProperties(...deepObjects: Array<{}>): Stamp;

        /**
         * @deprecated Use .init() instead.
         */
        enclose(...functions: Init[]): Stamp;

        /**
         * @deprecated Use .init() instead.
         */
        enclose(...functions: Array<{}>): Stamp;

        /**
         * Take in a variable number of functions and add them to the enclose
         * prototype as initializers.
         * @param functions Initializer functions used to create private data and
         * privileged methods
         * @returns A new stamp
         */
        init(...functions: Init[]): Stamp;

        /**
         * Take in a variable number of functions and add them to the enclose
         * prototype as initializers.
         * @param functions Initializer functions used to create private data and
         * privileged methods
         * @returns A new stamp
         */
        init(functions: Init[]): Stamp;

        /**
         * Take in a variable number of functions and add them to the enclose
         * prototype as initializers.
         * @param functions Initializer functions used to create private data and
         * privileged methods
         * @returns A new stamp
         */
        initializers(...functions: Init[]): Stamp;

        /**
         * Take in a variable number of functions and add them to the enclose
         * prototype as initializers.
         * @param functions Initializer functions used to create private data and
         * privileged methods
         * @returns A new stamp
         */
        initializers(functions: Init[]): Stamp;

        /**
         * Take n objects and add them to a new stamp and any future stamp it composes with.
         * Creates and returns new Stamp. Chainable.
         * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
         * @return A new Stamp.
         */
        statics(...statics: Array<{}>): Stamp;

        /**
         * Take n objects and add them to a new stamp and any future stamp it composes with.
         * Creates and returns new Stamp. Chainable.
         * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
         * @return A new Stamp.
         */
        staticProperties(...statics: Array<{}>): Stamp;

        /**
         * Deeply merge a variable number of objects and add them to a new stamp and
         * any future stamp it composes. Creates and returns a new Stamp. Chainable.
         * @param deepStatics The object(s) containing static properties to be
         * merged
         * @returns A new stamp
         */
        deepStatics(...deepStatics: Array<{}>): Stamp;

        /**
         * Deeply merge a variable number of objects and add them to a new stamp and
         * any future stamp it composes. Creates and returns a new Stamp. Chainable.
         * @param deepStatics The object(s) containing static properties to be
         * merged
         * @returns A new stamp
         */
        staticDeepProperties(...deepStatics: Array<{}>): Stamp;

        /**
         * Shallowly assign properties of Stamp arbitrary metadata and add them to
         * a new stamp and any future Stamp it composes. Creates and returns a new
         * Stamp. Chainable.
         * @param confs The object(s) containing metadata properties
         * @returns A new Stamp
         */
        conf(...confs: Array<{}>): Stamp;

        /**
         * Shallowly assign properties of Stamp arbitrary metadata and add them to
         * a new stamp and any future Stamp it composes. Creates and returns a new
         * Stamp. Chainable.
         * @param confs The object(s) containing metadata properties
         * @returns A new Stamp
         */
        configuration(...confs: Array<{}>): Stamp;

        /**
         * Deeply merge properties of Stamp arbitrary metadata and add them to a new
         * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
         * Chainable.
         * @param deepConfs The object(s) containing metadata properties
         * @returns A new Stamp
         */
        deepConf(...deepConfs: Array<{}>): Stamp;

        /**
         * Deeply merge properties of Stamp arbitrary metadata and add them to a new
         * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
         * Chainable.
         * @param deepConfs The object(s) containing metadata properties
         * @returns A new Stamp
         */
        deepConfiguration(...deepConfs: Array<{}>): Stamp;

        /**
         * Apply ES5 property descriptors to object instances created by the new
         * Stamp returned by the function and any future Stamp it composes. Creates
         * and returns a new stamp. Chainable.
         * @param descriptors
         * @returns A new Stamp
         */
        propertyDescriptors(...descriptors: Array<{}>): Stamp;

        /**
         * Apply ES5 property descriptors to a Stamp and any future Stamp it
         * composes. Creates and returns a new stamp. Chainable.
         * @param descriptors
         * @returns A new Stamp
         */
        staticPropertyDescriptors(...descriptors: Array<{}>): Stamp;
    }
    /**
     * A shortcut methods for stampit().methods()
     * @param methods Object(s) containing map of method names and bodies for delegation.
     * @return A new Stamp.
     */
    function methods(...methods: Array<{}>): Stamp;

    /**
     * A shortcut methods for stampit().refs()
     * @param states Object(s) containing map of property names and values to clone for each new object.
     * @return A new Stamp.
     */
    function refs(...states: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().props()
     * @param objects Object(s) to shallow assign for each new object.
     * @return A new Stamp.
     */
    function props(...objects: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().properties()
     * @param objects Object(s) to shallow assign for each new object.
     * @return A new Stamp.
     */
    function properties(...objects: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().deepProps()
     * @param deepObjects The object(s) to deeply merge for each new object
     * @returns A new Stamp
     */
    function deepProps(...deepObjects: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().deepProperties()
     * @param deepObjects The object(s) to deeply merge for each new object
     * @returns A new Stamp
     */
    function deepProperties(...deepObjects: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().init()
     * @param functions Initializer functions used to create private data and
     * privileged methods
     * @returns A new stamp
     */
    function init(...functions: Init[]): Stamp;

    /**
     * A shortcut method for stampit().init()
     * @param functions Initializer functions used to create private data and
     * privileged methods
     * @returns A new stamp
     */
    function init(functions: Init[]): Stamp;

    /**
     * A shortcut method for stampit().initializers()
     * @param functions Initializer functions used to create private data and
     * privileged methods
     * @returns A new stamp
     */
    function initializers(...functions: Init[]): Stamp;

    /**
     * A shortcut method for stampit().initializers()
     * @param functions Initializer functions used to create private data and
     * privileged methods
     * @returns A new stamp
     */
    function initializers(functions: Init[]): Stamp;

    /**
     * A shortcut method for stampit().statics()
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     * @return A new Stamp.
     */
    function statics(...statics: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().staticProperties()
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     * @return A new Stamp.
     */
    function staticProperties(...statics: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().deepStatics()
     * @param deepStatics The object(s) containing static properties to be
     * merged
     * @returns A new stamp
     */
    function deepStatics(...deepStatics: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().staticDeepProperties()
     * @param deepStatics The object(s) containing static properties to be
     * merged
     * @returns A new stamp
     */
    function staticDeepProperties(...deepStatics: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().conf()
     * @param confs The object(s) containing metadata properties
     * @returns A new Stamp
     */
    function conf(...confs: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().configuration()
     * @param confs The object(s) containing metadata properties
     * @returns A new Stamp
     */
    function configuration(...confs: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().deepConf()
     * @param deepConfs The object(s) containing metadata properties
     * @returns A new Stamp
     */
    function deepConf(...deepConfs: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().deepConfiguration()
     * @param deepConfs The object(s) containing metadata properties
     * @returns A new Stamp
     */
    function deepConfiguration(...deepConfs: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().propertyDescriptors()
     * @param descriptors
     * @returns A new Stamp
     */
    function propertyDescriptors(...descriptors: Array<{}>): Stamp;

    /**
     * A shortcut method for stampit().staticPropertyDescriptors()
     * @param descriptors
     * @returns A new Stamp
     */
    function staticPropertyDescriptors(...descriptors: Array<{}>): Stamp;

    /**
     * Take two or more Composables and combine them to produce a new Stamp.
     * Combining overrides properties with last-in priority.
     * @param composables Composable objects used to create the stamp.
     * @return A new Stamp made of all the given composables.
     */
    function compose(...composables: Composable[]): Stamp;
}

export = stampit;
