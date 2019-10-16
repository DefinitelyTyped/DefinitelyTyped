// Type definitions for stampit 4.3
// Project: https://github.com/stampit-org/stampit, https://stampit.js.org
// Definitions by: Vasyl Boroviak <https://github.com/koresar>
//                 Harris Lummis <https://github.com/lummish>
//                 PopGoesTheWza <https://github.com/popgoesthewza>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Utility types

/**
 * @internal Base type for all `methods`-like metadata.
 * @template This The type to use for `this` within methods.
 */
type _methodMap<This> = { [s: string]: (this: This, ...args: Array<any>) => any };

/** @internal A plain old JavaScript object created by a `Stamp`. */
type _pojo = object; // { [s: string]: any; }

/** @internal Base type for all `properties`-like metadata. */
// TODO: discriminate Array
type _propertyMap = object; // { [s: string]: any; }

/** @internal Signature common to every `Stamp`s. */
interface StampSignature {
  (options?: _propertyMap, ...args: Array<unknown>): any;
  compose: ComposeMethod & stampit.Descriptor<any, any>;
}

/**
 * @internal Extracts the `Stamp` type.
 * @template Original The type to extract the `Stamp` type from.
 */
type StampType<Original> = Original extends [] | bigint ? never // disallowed types
  : stampit.IsADescriptor<Original> extends true ? (// is a Descriptor
    Original extends stampit.Descriptor<infer Obj, infer Stamp> ? Stamp // infer the stamp type
    : never)
  : unknown extends Original ? stampit.Stamp<Original> // is any or unknown
  : Original extends StampSignature ? Original // is a stamp
  : Original extends stampit.Descriptor<infer Obj, any> ? stampit.Stamp<Obj> // attempt to infer from descriptor
  : Original extends _pojo ? stampit.Stamp<Original> // assume it is the object from a stamp object
  : never;

/**
 * @internal The type of the object produced by the `Stamp`.
 * @template Original The type (either a `Stamp` or a `Descriptor`) to get the object type from.
 */
type StampObjectType<Original> = Original extends bigint | boolean | number | string | symbol ? never // disallowed types
  : stampit.IsADescriptor<Original> extends true ? (// is a Descriptor
    Original extends stampit.Descriptor<infer Obj, any> ? Obj // infer the object type
    : never)
  : unknown extends Original ? Original // is any | unknown
  : Original extends StampSignature ? (// is a stamp
    Original extends stampit.Stamp<infer Obj> ? ( // infer the object type from the stamp
      Obj extends stampit.Stamp<infer Obj> ? Obj // infering twice is sometime necessary with extended stamps
      : Obj)
    : any)
  : Original extends stampit.Descriptor<infer Obj, any> ? Obj // attempt to infer from descriptor
  : Original extends _pojo ? Original // assume it is the object from a stamp object
  : never;

/**
 * A factory function to create plain object instances.
 * @template Obj The object type that the `Stamp` will create.
 * @return {Obj} The object created by the `Stamp`.
 */
interface FactoryFunction<Obj> {
  /**
   * @param {_propertyMap} [options] Properties to set on the new object instance.
   * @param {Array<any>} args Remaining arguments passed to all `.initializers` functions.
   * **WARNING** Avoid using different `.initializers` functions that expect different arguments.
   * `.initializers` functions that take arguments should not be considered safe to compose
   * with other `.initializers` functions that also take arguments. Taking arguments with
   * an `.initializers` function is an anti-pattern that should be avoided, when possible.
   * @return {Obj} The object created by the `Stamp`.
   */
  (options?: _propertyMap, ...args: Array<any>): StampObjectType<Obj>;
}

/**
 * @internal Chainables `Stamp` additionnal methods
 * @template Obj The object type that the `Stamp` will create.
 */
type StampChainables<O> = Chainables<StampObjectType<O>, StampType<O>>

/**
 * @internal Chainables `Stamp` additionnal methods
 * @template Obj The object type that the `Stamp` will create.
 * @template S̤t̤a̤m̤p̤ The type of the `Stamp` (when extending a `Stamp`.)
 */
interface Chainables<Obj, S̤t̤a̤m̤p̤ extends StampSignature>  {
  /**
   * Add methods to the methods prototype. Creates and returns new Stamp. **Chainable**.
   * @template This The type to use for `this` within methods.
   * @param methods Object(s) containing map of method names and bodies for delegation.
   * @return {Stamp} A new Stamp.
   */
  methods<This = Obj>(...methods: Array<_methodMap<This>>): S̤t̤a̤m̤p̤;

  /**
   * Take a variable number of objects and shallow assign them to any future
   * created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
   * @param objects Object(s) to shallow assign for each new object.
   * @return {Stamp} A new Stamp.
   */
  properties(...objects: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take a variable number of objects and shallow assign them to any future
   * created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
   * @param objects Object(s) to shallow assign for each new object.
   * @return {Stamp} A new Stamp.
   */
  props(...objects: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take a variable number of objects and deeply merge them to any future
   * created instance of the Stamp. Creates and returns a new Stamp.
   * **Chainable**.
   * @param deepObjects The object(s) to deeply merge for each new object.
   * @return {Stamp} A new Stamp.
   */
  deepProperties(...deepObjects: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take a variable number of objects and deeply merge them to any future
   * created instance of the Stamp. Creates and returns a new Stamp.
   * **Chainable**.
   * @param deepObjects The object(s) to deeply merge for each new object.
   * @return {Stamp} A new Stamp.
   */
  deepProps(...deepObjects: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take in a variable number of functions and add them to the initializers
   * prototype as initializers. **Chainable**.
   * @param functions Initializer functions used to create private data and
   * privileged methods.
   * @return {Stamp} A new Stamp.
   */
  initializers(...functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  initializers(functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

  /**
   * Take in a variable number of functions and add them to the initializers
   * prototype as initializers. **Chainable**.
   * @param functions Initializer functions used to create private data and
   * privileged methods.
   * @return {Stamp} A new Stamp.
   */
  init(...functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  init(functions: Array<stampit.Initializer<Obj, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

  /**
   * Take n objects and add them to a new stamp and any future stamp it composes with.
   * Creates and returns new Stamp. **Chainable**.
   * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
   * @return {Stamp} A new Stamp.
   */
  staticProperties(...statics: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take n objects and add them to a new stamp and any future stamp it composes with.
   * Creates and returns new Stamp. **Chainable**.
   * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
   * @return {Stamp} A new Stamp.
   */
  statics(...statics: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Deeply merge a variable number of objects and add them to a new stamp and
   * any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
   * @param deepStatics The object(s) containing static properties to be
   * merged.
   * @return {Stamp} A new Stamp.
   */
  staticDeepProperties(...deepStatics: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Deeply merge a variable number of objects and add them to a new stamp and
   * any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
   * @param deepStatics The object(s) containing static properties to be
   * merged.
   * @return {Stamp} A new Stamp.
   */
  deepStatics(...deepStatics: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Take in a variable number of functions and add them to the composers
   * prototype as composers. **Chainable**.
   * @param functions Composer functions that will run in sequence while creating
   * a new stamp from a list of composables.  The resulting stamp and the
   * composables get passed to composers.
   * @return {Stamp} A new Stamp.
   */
  composers(...functions: Array<stampit.Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  composers(functions: Array<stampit.Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
// composers?: Array<Composer<S̤t̤a̤m̤p̤>>;

  /**
   * Shallowly assign properties of Stamp arbitrary metadata and add them to
   * a new stamp and any future Stamp it composes. Creates and returns a new
   * Stamp. **Chainable**.
   * @param confs The object(s) containing metadata properties.
   * @return {Stamp} A new Stamp.
   */
  configuration(...confs: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Shallowly assign properties of Stamp arbitrary metadata and add them to
   * a new stamp and any future Stamp it composes. Creates and returns a new
   * Stamp. **Chainable**.
   * @param confs The object(s) containing metadata properties.
   * @return {Stamp} A new Stamp.
   */
  conf(...confs: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Deeply merge properties of Stamp arbitrary metadata and add them to a new
   * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
   * **Chainable**.
   * @param deepConfs The object(s) containing metadata properties.
   * @return {Stamp} A new Stamp.
   */
  deepConfiguration(...deepConfs: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Deeply merge properties of Stamp arbitrary metadata and add them to a new
   * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
   * **Chainable**.
   * @param deepConfs The object(s) containing metadata properties.
   * @return {Stamp} A new Stamp.
   */
  deepConf(...deepConfs: Array<_propertyMap>): S̤t̤a̤m̤p̤;

  /**
   * Apply ES5 property descriptors to object instances created by the new
   * Stamp returned by the function and any future Stamp it composes. Creates
   * and returns a new stamp. **Chainable**.
   * @param descriptors
   * @return {Stamp} A new Stamp.
   */
  propertyDescriptors(...descriptors: Array<PropertyDescriptorMap>): S̤t̤a̤m̤p̤;

  /**
   * Apply ES5 property descriptors to a Stamp and any future Stamp it
   * composes. Creates and returns a new stamp. **Chainable**.
   * @param descriptors
   * @return {Stamp} A new Stamp.
   */
  staticPropertyDescriptors(...descriptors: Array<PropertyDescriptorMap>): S̤t̤a̤m̤p̤;
}

/**
 * A function which creates a new `Stamp`s from a list of `Composable`s.
 * @template Obj The type of the object instance being produced by the `Stamp`
 * or the type of the `Stamp` being created (when extending a `Stamp`.)
 * @param {Array<Composable>} composables A list of `Composable`s.
 * @return {Stamp} The new `Stamp`.
 */
type ComposeMethod = typeof stampit;

/**
 * A function which creates a new `Stamp`s from a list of `Composable`s.
 * @template Obj The type of the object instance being created by the `Stamp`
 * or the type of the `Stamp` being created (when extending a `Stamp`.)
 * @param {Array<Composable>} composables A list of `Composable`s.
 * @return {Stamp} The new `Stamp`.
 */
export function stampit<Obj = any>(...composables: Array<stampit.Composable>): StampType<Obj>;

export namespace stampit {
  /** A composable object (either a `Stamp` or a `Descriptor`.) */
  type Composable = StampSignature | Descriptor<any, StampSignature>;

  /**
   * A `Stamp`'s metadata.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * @template S̤t̤a̤m̤p̤ The type of the `Stamp` (when extending a `Stamp`.)
   */
  interface Descriptor<Obj, S̤t̤a̤m̤p̤ extends StampSignature = Stamp<Obj>> {
    /** A set of methods that will be added to the object's delegate prototype. */
    methods?: _methodMap<Obj>;
    /** A set of properties that will be added to new object instances by assignment. */
    properties?: _propertyMap;
    /** A set of properties that will be added to new object instances by assignment. */
    props?: _propertyMap;
    /** A set of properties that will be added to new object instances by deep property merge. */
    deepProperties?: _propertyMap;
    /** A set of properties that will be added to new object instances by deep property merge. */
    deepProps?: _propertyMap;
    /** A set of object property descriptors (`PropertyDescriptor`) used for fine-grained control over object property behaviors. */
    propertyDescriptors?: PropertyDescriptorMap;
    /** A set of static properties that will be copied by assignment to the `Stamp`. */
    staticProperties?: _propertyMap /* & ThisType<S> */;
    /** A set of static properties that will be copied by assignment to the `Stamp`. */
    statics?: _propertyMap /* & ThisType<S> */;
    /** A set of static properties that will be added to the `Stamp` by deep property merge. */
    staticDeepProperties?: _propertyMap /* & ThisType<S> */;
    /** A set of static properties that will be added to the `Stamp` by deep property merge. */
    deepStatics?: _propertyMap /* & ThisType<S> */;
    /** A set of object property descriptors (`PropertyDescriptor`) to apply to the `Stamp`. */
    staticPropertyDescriptors?: PropertyDescriptorMap /* & ThisType<S> */;
    /** An array of functions that will run in sequence while creating an object instance from a `Stamp`. `Stamp` details and arguments get passed to initializers. */
    initializers?: Initializer<Obj, S̤t̤a̤m̤p̤> | Array<Initializer<Obj, S̤t̤a̤m̤p̤>>;
    /** An array of functions that will run in sequence while creating an object instance from a `Stamp`. `Stamp` details and arguments get passed to initializers. */
    init?: Initializer<Obj, S̤t̤a̤m̤p̤> | Array<Initializer<Obj, S̤t̤a̤m̤p̤>>;
    /** An array of functions that will run in sequence while creating a new `Stamp` from a list of `Composable`s. The resulting `Stamp` and the `Composable`s get passed to composers. */
    composers?: Array<Composer<S̤t̤a̤m̤p̤>>;
    /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be copied by assignment. */
    configuration?: _propertyMap /* & ThisType<S> */;
    /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be copied by assignment. */
    conf?: _propertyMap /* & ThisType<S> */;
    /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be deep merged. */
    deepConfiguration?: _propertyMap /* & ThisType<S> */;
    /** A set of options made available to the `Stamp` and its initializers during object instance creation. These will be deep merged. */
    deepConf?: _propertyMap /* & ThisType<S> */;
    // TODO: Add description
    name?: string;
  }

  /**
   * @internal Checks that a type is a Descriptor (except `any` and `unknown`).
   * @template Type A type to check if a Descriptor.
   * @return {boolean} `true` if the type `T` can be infered as a Descriptor, `false` otherwise.
   */
  // TODO: Improve test by checking the type of common keys
  type IsADescriptor<Type> =
    unknown extends Type ? (
      keyof Type extends never ? false
      : keyof Type extends infer K ? (K extends keyof Descriptor<unknown> ? true : false)
      : false)
    : false;

  /**
   * A function used as `.initializers` argument.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * @template S̤t̤a̤m̤p̤ The type of the `Stamp` producing the instance.
   * @return {Obj} The object produced by the `Stamp`.
   */
  interface Initializer<Obj, S̤t̤a̤m̤p̤ extends StampSignature> {
    /**
     * @param {_propertyMap} options The `options` argument passed into the stamp,
     * containing properties that may be used by initializers. (Cf. the `Descriptor`
     * attributes `configuration` and `deepConfiguration`.)
     * @param {InitializerContext} context The context of current `.initializers` function.
     * @return {void | Obj} The object produced by the `Stamp`.
     */
    // ??? should the type of `this` be the object or the stamp
    (/* this: S̤t̤a̤m̤p̤, */ options: /*_propertyMap*/ any, context: InitializerContext<Obj, S̤t̤a̤m̤p̤>): void | Obj;
  }

  /**
   * The `Initializer` function context.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * @template S̤t̤a̤m̤p̤ The type of the `Stamp` producing the instance.
   */
  interface InitializerContext<Obj, S̤t̤a̤m̤p̤ extends StampSignature> {
    /**
     * The object instance being produced by the `Stamp`. If the initializer returns a
     * value other than `undefined`, it replaces the instance.
     */
    instance: Obj;
    /** A reference to the `Stamp` producing the instance. */
    stamp: S̤t̤a̤m̤p̤;
    /** An array of the arguments passed into the `Stamp`, including the options argument. */
    // ! above description from the specification is obscure
    args: Array<any>;
  }

  /**
   * A function used as `.composers` argument.
   * @template S̤t̤a̤m̤p̤ The type of the `Stamp` produced by the `.compose()` method.
   * @return {Stamp} The new `Stamp`.
   */
  interface Composer<S̤t̤a̤m̤p̤ extends StampSignature> {
    /**
     * @param {ComposerParameters} parameters The parameters recieved by the current `.composers` function.
     * @return {Stamp} The new `Stamp`.
     */
    // ??? should the type of `this` be the object or the stamp
    (/* this: S, */ parameters: ComposerParameters<S̤t̤a̤m̤p̤>): S̤t̤a̤m̤p̤;
  }

  /**
   * The parameters received by the current `.composers` function.
   * @template S̤t̤a̤m̤p̤ The type of the `Stamp` produced by the `.compose()` method.
   */
  interface ComposerParameters<S̤t̤a̤m̤p̤ extends StampSignature> {
    /** The result of the `Composable`s composition. */
    stamp: S̤t̤a̤m̤p̤;
    /** The list of composables the `Stamp` was just composed of. */
    composables: Array<Composable>;
  }

  /**
   * A factory function to create plain object instances.
   *
   * It also has a `.compose()` method which is a copy of the `ComposeMethod` function and a `.compose` accessor to its `Descriptor`.
   * @template Obj The object type that the `Stamp` will create.
   * @return {Obj} The object produced by the `Stamp`.
   */
  interface Stamp<Obj> extends FactoryFunction<Obj>, StampChainables<Obj>, StampSignature {
    // /**
    //  * @param {_propertyMap} [options] Properties to set on the new object instance.
    //  * @param {Array<any>} args Remaining arguments passed to all `.initializers` functions.
    //  * **WARNING** Avoid using different `.initializers` functions that expect different arguments.
    //  * `.initializers` functions that take arguments should not be considered safe to compose
    //  * with other `.initializers` functions that also take arguments. Taking arguments with
    //  * an `.initializers` function is an anti-pattern that should be avoided, when possible.
    //  * @return {Obj} The object produced by the `Stamp`.
    //  */
    // (options?: _propertyMap, ...args: Array<any>): Obj;

    /**
     * Just like calling stamp(), stamp.create() invokes the stamp and returns a new instance.
     * @param {_propertyMap} [options] Properties to set on the new object instance.
     * @param {Array<any>} args Remaining arguments passed to all `.initializers` functions.
     * **WARNING** Avoid using different `.initializers` functions that expect different arguments.
     * `.initializers` functions that take arguments should not be considered safe to compose
     * with other `.initializers` functions that also take arguments. Taking arguments with
     * an `.initializers` function is an anti-pattern that should be avoided, when possible.
     * @return {Obj} The object produced by the `Stamp`.
     */
    create: FactoryFunction<Obj>;

    /**
     * A function which creates a new `Stamp`s from a list of `Composable`s.
     * @template Obj The type of the object instance being produced by the `Stamp`.
     * or the type of the `Stamp` being created.
     * @param {Array<Composable>} composables A list of `Composable`s.
     * @return {Stamp} The new `Stamp`.
     */
    compose: ComposeMethod & Descriptor<StampObjectType<Obj>>;
  }

  /**
   * A shortcut method for stampit().methods()
   *
   * Add methods to the methods prototype. Creates and returns new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @template This The type to use for `this` within methods.
   * @param methods Object(s) containing map of method names and bodies for delegation.
   * @return {Stamp} A new Stamp.
   */
  function methods<Obj = any, This = StampObjectType<Obj>>(...methods: Array<_methodMap<Obj>>): StampType<Obj>;

  /**
   * A shortcut method for stampit().properties()
   *
   * Take a variable number of objects and shallow assign them to any future
   * created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param objects Object(s) to shallow assign for each new object.
   * @return {Stamp} A new Stamp.
   */
  function properties<Obj = any>(...objects: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().props()
   *
   * Take a variable number of objects and shallow assign them to any future
   * created instance of the Stamp. Creates and returns new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param objects Object(s) to shallow assign for each new object.
   * @return {Stamp} A new Stamp.
   */
  function props<Obj = any>(...objects: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().deepProperties()
   *
   * Take a variable number of objects and deeply merge them to any future
   * created instance of the Stamp. Creates and returns a new Stamp.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepObjects The object(s) to deeply merge for each new object
   * @return {Stamp} A new Stamp.
   */
  function deepProperties<Obj = any>(...deepObjects: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().deepProps()
   *
   * Take a variable number of objects and deeply merge them to any future
   * created instance of the Stamp. Creates and returns a new Stamp.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepObjects The object(s) to deeply merge for each new object
   * @return {Stamp} A new Stamp.
   */
  function deepProps<Obj = any>(...deepObjects: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().initializers()
   *
   * Take in a variable number of functions and add them to the initializers
   * prototype as initializers. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param functions Initializer functions used to create private data and
   * privileged methods
   * @return {Stamp} A new Stamp.
   */
  function initializers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(...functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  function initializers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

  /**
   * A shortcut method for stampit().init()
   *
   * Take in a variable number of functions and add them to the initializers
   * prototype as initializers. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param functions Initializer functions used to create private data and
   * privileged methods
   * @return {Stamp} A new Stamp.
   */
  function init<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(...functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  function init<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(functions: Array<Initializer<StampObjectType<Obj>, S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;

  /**
   * A shortcut method for stampit().statics()
   *
   * Take n objects and add them to a new stamp and any future stamp it composes with.
   * Creates and returns new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
   * @return {Stamp} A new Stamp.
   */
  function staticProperties<Obj = any>(...statics: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().staticProperties()
   *
   * Take n objects and add them to a new stamp and any future stamp it composes with.
   * Creates and returns new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
   * @return {Stamp} A new Stamp.
   */
  function statics<Obj = any>(...statics: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().staticDeepProperties()
   *
   * Deeply merge a variable number of objects and add them to a new stamp and
   * any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepStatics The object(s) containing static properties to be merged
   * @return {Stamp} A new Stamp.
   */
  function staticDeepProperties<Obj = any>(...deepStatics: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().deepStatics()
   *
   * Deeply merge a variable number of objects and add them to a new stamp and
   * any future stamp it composes. Creates and returns a new Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepStatics The object(s) containing static properties to be merged
   * @return {Stamp} A new Stamp.
   */
  function deepStatics<Obj = any>(...deepStatics: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().composers()
   *
   * Take in a variable number of functions and add them to the composers
   * prototype as composers. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param functions Composer functions that will run in sequence while creating
   * a new stamp from a list of composables.  The resulting stamp and the
   * composables get passed to composers.
   * @return {Stamp} A new Stamp.
   */
  function composers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(...functions: Array<Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
  function composers<Obj = any, S̤t̤a̤m̤p̤ extends StampSignature = StampType<Obj>>(functions: Array<Composer<S̤t̤a̤m̤p̤>>): S̤t̤a̤m̤p̤;
// composers?: Array<Composer<S̤t̤a̤m̤p̤>>;

  /**
   * A shortcut method for stampit().configuration()
   *
   * Shallowly assign properties of Stamp arbitrary metadata and add them to
   * a new stamp and any future Stamp it composes. Creates and returns a new
   * Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param confs The object(s) containing metadata properties
   * @return {Stamp} A new Stamp.
   */
  function configuration<Obj = any>(...confs: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().conf()
   *
   * Shallowly assign properties of Stamp arbitrary metadata and add them to
   * a new stamp and any future Stamp it composes. Creates and returns a new
   * Stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param confs The object(s) containing metadata properties
   * @return {Stamp} A new Stamp.
   */
  function conf<Obj = any>(...confs: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().deepConfiguration()
   *
   * Deeply merge properties of Stamp arbitrary metadata and add them to a new
   * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
   * **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepConfs The object(s) containing metadata properties
   * @return {Stamp} A new Stamp.
   */
  function deepConfiguration<Obj = any>(...deepConfs: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().deepConf()
   *
   * Deeply merge properties of Stamp arbitrary metadata and add them to a new
   * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
   * **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param deepConfs The object(s) containing metadata properties
   * @return {Stamp} A new Stamp.
   */
  function deepConf<Obj = any>(...deepConfs: Array<_propertyMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().propertyDescriptors()
   *
   * Apply ES5 property descriptors to object instances created by the new
   * Stamp returned by the function and any future Stamp it composes. Creates
   * and returns a new stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param descriptors
   * @return {Stamp} A new Stamp.
   */
  function propertyDescriptors<Obj = any>(...descriptors: Array<PropertyDescriptorMap>): StampType<Obj>;

  /**
   * A shortcut method for stampit().staticPropertyDescriptors()
   *
   * Apply ES5 property descriptors to a Stamp and any future Stamp it
   * composes. Creates and returns a new stamp. **Chainable**.
   * @template Obj The type of the object instance being produced by the `Stamp`.
   * or the type of the `Stamp` being created.
   * @param descriptors
   * @return {Stamp} A new Stamp.
   */
  function staticPropertyDescriptors<Obj = any>(...descriptors: Array<PropertyDescriptorMap>): StampType<Obj>;

  /**
   * A function which creates a new `Stamp`s from a list of `Composable`s.
   * @param {Array<Composable>} composables A list of `Composable`s.
   * @return {Stamp} The new `Stamp`.
   */
  const compose: ComposeMethod;

  /** the version of the NPM `stampit` package. */
  const version: string;
}

export default stampit;
export const compose: typeof stampit.compose;
export const composers: typeof stampit.composers; // !!!
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
