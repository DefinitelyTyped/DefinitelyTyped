// Type definitions for stampit 4.3
// Project: https://github.com/stampit-org/stampit, https://stampit.js.org
// Definitions by: Vasyl Boroviak <https://github.com/koresar>
//                 Harris Lummis <https://github.com/lummish>
//                 PopGoesTheWza <https://github.com/popgoesthewza>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Utility types

/**
 * @internal Base type for all `methods`-like metadata.
 * @template This The type to use for `this` within methods.
 */
interface MethodMap<This> {
    [s: string]: ((this: This, ...args: any[]) => any) | {};
}

/** @internal A plain old JavaScript object created by a `Stamp`. */
type Pojo = object; // { [s: string]: any; }

/** @internal Base type for all `properties`-like metadata. */
// TODO: discriminate Array
type PropertyMap = object; // { [s: string]: any; }

/** @internal Signature common to every `Stamp`s. */
interface StampSignature {
    (options?: PropertyMap, ...args: unknown[]): any;
    compose: ComposeMethod & stampit.Descriptor<any, any>;
}

/**
 * @internal Extracts the `Stamp` type.
 * @template Original The type to extract the `Stamp` type from.
 */
type StampType<Original> = Original extends /* disallowed types */ [] | bigint
    ? never
    : stampit.IsADescriptor<Original> extends true
    ? (Original extends stampit.ExtendedDescriptor<infer Obj, infer Stamp> ? Stamp : never)
    : unknown extends Original /* is any or unknown */
    ? stampit.Stamp<Original>
    : Original extends StampSignature
    ? Original
    : Original extends stampit.ExtendedDescriptor<infer Obj, any>
    ? stampit.Stamp<Obj>
    : Original extends Pojo
    ? stampit.Stamp<Original> /*assume it is the object from a stamp object*/
    : never;

/**
 * @internal The type of the object produced by the `Stamp`.
 * @template Original The type (either a `Stamp` or a `ExtendedDescriptor`) to get the object type from.
 */
type StampObjectType<Original> = Original extends /* disallowed types */ bigint | boolean | number | string | symbol
    ? never
    : stampit.IsADescriptor<Original> extends true
    ? (Original extends stampit.ExtendedDescriptor<infer Obj, any> ? Obj : never)
    : unknown extends Original /* is any or unknown */
    ? Original
    : Original extends StampSignature
    ? (Original extends stampit.Stamp<infer Obj> /* extended stamps may require infering twice */
          ? (Obj extends stampit.Stamp<infer Obj> ? Obj : Obj)
          : any)
    : Original extends stampit.ExtendedDescriptor<infer Obj, any>
    ? Obj
    : Original extends Pojo
    ? Original
    : never;

/**
 * A factory function to create plain object instances.
 * @template Obj The object type that the `Stamp` will create.
 */
interface FactoryFunction<Obj> {
    (options?: PropertyMap, ...args: any[]): StampObjectType<Obj>;
}

/**
 * @internal Chainables `Stamp` additionnal methods
 * @template Obj The object type that the `Stamp` will create.
 */
type StampChainables<Obj> = Chainables<StampObjectType<Obj>, StampType<Obj>>;

/**
 * @internal Chainables `Stamp` additionnal methods
 * @template Obj The object type that the `Stamp` will create.
 * @template S̤t̤a̤m̤p̤ The type of the `Stamp` (when extending a `Stamp`.)
 */
interface Chainables<Obj, S̤t̤a̤m̤p̤ extends StampSignature> {
    /**
     * Add methods to the methods prototype. Creates and returns new Stamp. **Chainable**.
     * @template This The type to use for `this` within methods.
     * @param methods Object(s) containing map of method names and bodies for delegation.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    methods<This = Obj>(...methods: Array<MethodMap<This>>): S̤t̤a̤m̤p̤;

    /**
     * Take a variable number of objects and shallow assign them to any future created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
     * @param objects Object(s) to shallow assign for each new object.
     */
    properties(...objects: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take a variable number of objects and shallow assign them to any future created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
     * @param objects Object(s) to shallow assign for each new object.
     */
    props(...objects: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take a variable number of objects and deeply merge them to any future created instance of the Stamp. Creates and returns a new Stamp. **Chainable**.
     * @param deepObjects The object(s) to deeply merge for each new object.
     */
    deepProperties(...deepObjects: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take a variable number of objects and deeply merge them to any future created instance of the Stamp. Creates and returns a new Stamp. **Chainable**.
     * @param deepObjects The object(s) to deeply merge for each new object.
     */
    deepProps(...deepObjects: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take in a variable number of functions and add them to the initializers prototype as initializers. **Chainable**.
     * @param functions Initializer functions used to create private data and privileged methods.
     */
    initializers(...functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
    initializers(functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

    /**
     * Take in a variable number of functions and add them to the initializers prototype as initializers. **Chainable**.
     * @param functions Initializer functions used to create private data and privileged methods.
     */
    init(...functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
    init(functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

    /**
     * Take n objects and add them to a new stamp and any future stamp it composes with. Creates and returns new Stamp. **Chainable**.
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     */
    staticProperties(...statics: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take n objects and add them to a new stamp and any future stamp it composes with. Creates and returns new Stamp. **Chainable**.
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     */
    statics(...statics: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Deeply merge a variable number of objects and add them to a new stamp and any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param deepStatics The object(s) containing static properties to be merged.
     */
    staticDeepProperties(...deepStatics: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Deeply merge a variable number of objects and add them to a new stamp and any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param deepStatics The object(s) containing static properties to be merged.
     */
    deepStatics(...deepStatics: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Take in a variable number of functions and add them to the composers prototype as composers. **Chainable**.
     * @param functions Composer functions that will run in sequence while creating a new stamp from a list of composables.  The resulting stamp and the composables get passed to composers.
     */
    composers(...functions: Array<stampit.Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
    composers(functions: Array<stampit.Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

    /**
     * Shallowly assign properties of Stamp arbitrary metadata and add them to a new stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param confs The object(s) containing metadata properties.
     */
    configuration(...confs: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Shallowly assign properties of Stamp arbitrary metadata and add them to a new stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param confs The object(s) containing metadata properties.
     */
    conf(...confs: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Deeply merge properties of Stamp arbitrary metadata and add them to a new Stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param deepConfs The object(s) containing metadata properties.
     */
    deepConfiguration(...deepConfs: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Deeply merge properties of Stamp arbitrary metadata and add them to a new Stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @param deepConfs The object(s) containing metadata properties.
     */
    deepConf(...deepConfs: PropertyMap[]): S̤t̤a̤m̤p̤;

    /**
     * Apply ES5 property descriptors to object instances created by the new Stamp returned by the function and any future Stamp it composes. Creates and returns a new stamp. **Chainable**.
     * @param descriptors
     */
    propertyDescriptors(...descriptors: PropertyDescriptorMap[]): S̤t̤a̤m̤p̤;

    /**
     * Apply ES5 property descriptors to a Stamp and any future Stamp it composes. Creates and returns a new stamp. **Chainable**.
     * @param descriptors
     */
    staticPropertyDescriptors(...descriptors: PropertyDescriptorMap[]): S̤t̤a̤m̤p̤;
}

/**
 * A function which creates a new `Stamp`s from a list of `Composable`s.
 * @template Obj The type of the object instance being produced by the `Stamp` or the type of the `Stamp` being created (when extending a `Stamp`.)
 */
type ComposeMethod = typeof stampit;

/**
 * A function which creates a new `Stamp`s from a list of `Composable`s.
 * @template Obj The type of the object instance being created by the `Stamp` or the type of the `Stamp` being created (when extending a `Stamp`.)
 */
// tslint:disable-next-line: no-unnecessary-generics
declare function stampit<Obj = any>(...composables: stampit.Composable[]): StampType<Obj>;

declare namespace stampit {
    /** A composable object (either a `Stamp` or a `ExtendedDescriptor`.) */
    type Composable = StampSignature | ExtendedDescriptor<any, any>;

    /**
     * A `Stamp`'s metadata.
     * @template Obj The type of the object instance being produced by the `Stamp`.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` (when extending a `Stamp`.)
     */
    interface Descriptor<Obj, S̤t̤a̤m̤p̤ extends StampSignature = Stamp<Obj>> {
        /** A set of methods that will be added to the object's delegate prototype. */
        methods?: MethodMap<Obj>;
        /** A set of properties that will be added to new object instances by assignment. */
        properties?: PropertyMap;
        /** A set of properties that will be added to new object instances by deep property merge. */
        deepProperties?: PropertyMap;
        /** A set of object property descriptors (`PropertyDescriptor`) used for fine-grained control over object property behaviors. */
        propertyDescriptors?: PropertyDescriptorMap;
        /** A set of static properties that will be copied by assignment to the `Stamp`. */
        staticProperties?: PropertyMap /* & ThisType<S> */;
        /** A set of static properties that will be added to the `Stamp` by deep property merge. */
        staticDeepProperties?: PropertyMap /* & ThisType<S> */;
        /** A set of object property descriptors (`PropertyDescriptor`) to apply to the `Stamp`. */
        staticPropertyDescriptors?: PropertyDescriptorMap /* & ThisType<S> */;
        /** An array of functions that will run in sequence while creating an object instance from a `Stamp`. `Stamp` details and arguments get passed to initializers. */
        initializers?: Initializer<Obj, S̤t̤a̤m̤p̤> | Array<Initializer<Obj, S̤t̤a̤m̤p̤>>;
        /** An array of functions that will run in sequence while creating a new `Stamp` from a list of `Composable`s. The resulting `Stamp` and the `Composable`s get passed to composers. */
        composers?: Array<Composer<S̤t̤a̤m̤p̤>>;
        /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be copied by assignment. */
        configuration?: PropertyMap /* & ThisType<S> */;
        /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be deep merged. */
        deepConfiguration?: PropertyMap /* & ThisType<S> */;
    }

    /**
     * A `stampit`'s metadata.
     * @template Obj The type of the object instance being produced by the `Stamp`.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` (when extending a `Stamp`.)
     */
    interface ExtendedDescriptor<Obj, S̤t̤a̤m̤p̤ extends StampSignature = Stamp<Obj>> extends Descriptor<Obj, S̤t̤a̤m̤p̤> {
        /** A set of properties that will be added to new object instances by assignment. */
        props?: PropertyMap;
        /** A set of properties that will be added to new object instances by deep property merge. */
        deepProps?: PropertyMap;
        /** A set of static properties that will be copied by assignment to the `Stamp`. */
        statics?: PropertyMap /* & ThisType<S> */;
        /** A set of static properties that will be added to the `Stamp` by deep property merge. */
        deepStatics?: PropertyMap /* & ThisType<S> */;
        /** An array of functions that will run in sequence while creating an object instance from a `Stamp`. `Stamp` details and arguments get passed to initializers. */
        init?: Initializer<Obj, S̤t̤a̤m̤p̤> | Array<Initializer<Obj, S̤t̤a̤m̤p̤>>;
        /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be copied by assignment. */
        conf?: PropertyMap /* & ThisType<S> */;
        /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be deep merged. */
        deepConf?: PropertyMap /* & ThisType<S> */;
        // TODO: Add description
        name?: string;
    }

    /**
     * @internal Checks that a type is a ExtendedDescriptor (except `any` and `unknown`).
     * @template Type A type to check if a ExtendedDescriptor.
     */
    // TODO: Improve test by checking the type of common keys
    type IsADescriptor<Type> = unknown extends Type
        ? (keyof Type extends never
              ? false
              : keyof Type extends infer K
              ? (K extends keyof ExtendedDescriptor<unknown> ? true : false)
              : false)
        : false;

    /**
     * A function used as `.initializers` argument.
     * @template Obj The type of the object instance being produced by the `Stamp`.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` producing the instance.
     */
    interface Initializer<Obj, S̤t̤a̤m̤p̤ extends StampSignature> {
        (this: Obj, options: /*_propertyMap*/ any, context: InitializerContext<Obj, S̤t̤a̤m̤p̤>): void | Obj;
    }

    /**
     * The `Initializer` function context.
     * @template Obj The type of the object instance being produced by the `Stamp`.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` producing the instance.
     */
    interface InitializerContext<Obj, S̤t̤a̤m̤p̤ extends StampSignature> {
        /** The object instance being produced by the `Stamp`. If the initializer returns a value other than `undefined`, it replaces the instance. */
        instance: Obj;
        /** A reference to the `Stamp` producing the instance. */
        stamp: S̤t̤a̤m̤p̤;
        /** An array of the arguments passed into the `Stamp`, including the options argument. */
        // ! above description from the specification is obscure
        args: any[];
    }

    /**
     * A function used as `.composers` argument.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` produced by the `.compose()` method.
     */
    interface Composer<S̤t̤a̤m̤p̤ extends StampSignature> {
        (parameters: ComposerParameters<S̤t̤a̤m̤p̤>): void | S̤t̤a̤m̤p̤;
    }

    /**
     * The parameters received by the current `.composers` function.
     * @template S̤t̤a̤m̤p̤ The type of the `Stamp` produced by the `.compose()` method.
     */
    interface ComposerParameters<S̤t̤a̤m̤p̤ extends StampSignature> {
        /** The result of the `Composable`s composition. */
        stamp: S̤t̤a̤m̤p̤;
        /** The list of composables the `Stamp` was just composed of. */
        composables: Composable[];
    }

    /**
     * A factory function to create plain object instances.
     *
     * It also has a `.compose()` method which is a copy of the `ComposeMethod` function and a `.compose` accessor to its `Descriptor`.
     * @template Obj The object type that the `Stamp` will create.
     */
    interface Stamp<Obj> extends FactoryFunction<Obj>, StampChainables<Obj>, StampSignature {
        /** Just like calling stamp(), stamp.create() invokes the stamp and returns a new instance. */
        create: FactoryFunction<Obj>;

        /**
         * A function which creates a new `Stamp`s from a list of `Composable`s.
         * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
         */
        compose: ComposeMethod & Descriptor<StampObjectType<Obj>>;
    }

    /**
     * A shortcut method for stampit().methods()
     *
     * Add methods to the methods prototype. Creates and returns new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @template This The type to use for `this` within methods.
     * @param methods Object(s) containing map of method names and bodies for delegation.
     */
    function methods<Obj = any>(this: StampObjectType<Obj>, ...methods: Array<MethodMap<Obj>>): StampType<Obj>;

    /**
     * A shortcut method for stampit().properties()
     *
     * Take a variable number of objects and shallow assign them to any future created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param objects Object(s) to shallow assign for each new object.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function properties<Obj = any>(...objects: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().props()
     *
     * Take a variable number of objects and shallow assign them to any future created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param objects Object(s) to shallow assign for each new object.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function props<Obj = any>(...objects: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().deepProperties()
     *
     * Take a variable number of objects and deeply merge them to any future created instance of the Stamp. Creates and returns a new Stamp.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepObjects The object(s) to deeply merge for each new object
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function deepProperties<Obj = any>(...deepObjects: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().deepProps()
     *
     * Take a variable number of objects and deeply merge them to any future created instance of the Stamp. Creates and returns a new Stamp.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepObjects The object(s) to deeply merge for each new object
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function deepProps<Obj = any>(...deepObjects: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().initializers()
     *
     * Take in a variable number of functions and add them to the initializers prototype as initializers. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param functions Initializer functions used to create private data and privileged methods
     */
    function initializers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(
        // tslint:disable-next-line: no-unnecessary-generics
        ...functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>
    ): S̤t̤a̤m̤p̤;
    function initializers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(
        // tslint:disable-next-line: no-unnecessary-generics
        functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>,
    ): S̤t̤a̤m̤p̤;

    /**
     * A shortcut method for stampit().init()
     *
     * Take in a variable number of functions and add them to the initializers prototype as initializers. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param functions Initializer functions used to create private data and privileged methods
     */
    function init<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(
        // tslint:disable-next-line: no-unnecessary-generics
        ...functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>
    ): S̤t̤a̤m̤p̤;
    function init<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(
        // tslint:disable-next-line: no-unnecessary-generics
        functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>,
    ): S̤t̤a̤m̤p̤;

    /**
     * A shortcut method for stampit().statics()
     *
     * Take n objects and add them to a new stamp and any future stamp it composes with. Creates and returns new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function staticProperties<Obj = any>(...statics: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().staticProperties()
     *
     * Take n objects and add them to a new stamp and any future stamp it composes with. Creates and returns new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function statics<Obj = any>(...statics: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().staticDeepProperties()
     *
     * Deeply merge a variable number of objects and add them to a new stamp and any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepStatics The object(s) containing static properties to be merged
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function staticDeepProperties<Obj = any>(...deepStatics: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().deepStatics()
     *
     * Deeply merge a variable number of objects and add them to a new stamp and any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepStatics The object(s) containing static properties to be merged
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function deepStatics<Obj = any>(...deepStatics: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().composers()
     *
     * Take in a variable number of functions and add them to the composers prototype as composers. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param functions Composer functions that will run in sequence while creating a new stamp from a list of composables.  The resulting stamp and the composables get passed to composers.
     */
    function composers<Obj = any>(...functions: Array<Composer<StampType<Obj>>>): StampType<Obj>;
    function composers<Obj = any>(functions: Array<Composer<StampType<Obj>>>): StampType<Obj>;

    /**
     * A shortcut method for stampit().configuration()
     *
     * Shallowly assign properties of Stamp arbitrary metadata and add them to a new stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param confs The object(s) containing metadata properties
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function configuration<Obj = any>(...confs: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().conf()
     *
     * Shallowly assign properties of Stamp arbitrary metadata and add them to a new stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param confs The object(s) containing metadata properties
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function conf<Obj = any>(...confs: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().deepConfiguration()
     *
     * Deeply merge properties of Stamp arbitrary metadata and add them to a new Stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepConfs The object(s) containing metadata properties
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function deepConfiguration<Obj = any>(...deepConfs: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().deepConf()
     *
     * Deeply merge properties of Stamp arbitrary metadata and add them to a new Stamp and any future Stamp it composes. Creates and returns a new Stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param deepConfs The object(s) containing metadata properties
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function deepConf<Obj = any>(...deepConfs: PropertyMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().propertyDescriptors()
     *
     * Apply ES5 property descriptors to object instances created by the new Stamp returned by the function and any future Stamp it composes. Creates and returns a new stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param descriptors
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function propertyDescriptors<Obj = any>(...descriptors: PropertyDescriptorMap[]): StampType<Obj>;

    /**
     * A shortcut method for stampit().staticPropertyDescriptors()
     *
     * Apply ES5 property descriptors to a Stamp and any future Stamp it composes. Creates and returns a new stamp. **Chainable**.
     * @template Obj The type of the object instance being produced by the `Stamp`. or the type of the `Stamp` being created.
     * @param descriptors
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function staticPropertyDescriptors<Obj = any>(...descriptors: PropertyDescriptorMap[]): StampType<Obj>;

    /** A function which creates a new `Stamp`s from a list of `Composable`s. */
    const compose: ComposeMethod;

    /** the version of the NPM `stampit` package. */
    const version: string;
}
export const compose: typeof stampit.compose;
export const composers: typeof stampit.composers;
export const conf: typeof stampit.conf;
export const configuration: typeof stampit.configuration;
export const deepConf: typeof stampit.deepConf;
export const deepConfiguration: typeof stampit.deepConfiguration;
export const deepProperties: typeof stampit.deepProperties;
export const deepProps: typeof stampit.deepProps;
export const deepStatics: typeof stampit.deepStatics;
export const init: typeof stampit.init;
export const initializers: typeof stampit.initializers;
export const methods: typeof stampit.methods;
export const properties: typeof stampit.properties;
export const propertyDescriptors: typeof stampit.propertyDescriptors;
export const props: typeof stampit.props;
export const staticDeepProperties: typeof stampit.staticDeepProperties;
export const staticProperties: typeof stampit.staticProperties;
export const staticPropertyDescriptors: typeof stampit.staticPropertyDescriptors;
export const version: typeof stampit.version;
// tslint:disable-next-line: npm-naming
export default stampit;
