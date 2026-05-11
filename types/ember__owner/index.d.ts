/**
 * The name for a factory consists of a namespace and the name of a specific
 * type within that namespace, like `'service:session'`.
 */
export type FullName<Type extends string = string, Name extends string = string> = `${Type}:${Name}`;

/**
 * A type registry for the DI system, which other participants in the DI system
 * can register themselves into with declaration merging. The contract for this
 * type is that its keys are the `Type` from a `FullName`, and each value for a
 * `Type` is another registry whose keys are the `Name` from a `FullName`. The
 * mechanic for providing a registry is [declaration merging][handbook].
 *
 * [handbook]: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 *
 * For example, Ember's `@ember/service` module includes this set of definitions:
 *
 * ```ts
 * export default class Service extends EmberObject {}
 *
 * // For concrete singleton classes to be merged into.
 * interface Registry extends Record<string, Service> {}
 *
 * declare module '@ember/owner' {
 *   service: Registry;
 * }
 * ```
 *
 * Declarations of services can then include the registry:
 *
 * ```ts
 * import Service from '@ember/service';
 *
 * export default class Session extends Service {
 *   login(username: string, password: string) {
 *     // ...
 *   }
 * }
 *
 * declare module '@ember/service' {
 *   interface Registry {
 *     session: Session;
 *   }
 * }
 * ```
 *
 * Then users of the `Owner` API will be able to do things like this with strong
 * type safety guarantees:
 *
 * ```ts
 * getOwner(this)?.lookup('service:session').login("hello", "1234abcd");
 * ```
 *
 * @internal
 */
export interface DIRegistry extends Record<string, Record<string, unknown>> {}

type ValidType = keyof DIRegistry & string;
type ValidName<Type extends ValidType> = keyof DIRegistry[Type] & string;

type ResolveFactoryManager<
    Type extends string,
    Name extends string,
> = DIRegistry[Type][Name] extends infer RegistryEntry ? RegistryEntry extends object ? FactoryManager<RegistryEntry>
    : FactoryManager<object> | undefined
    : never;

/**
 * Framework objects in an Ember application (components, services, routes,
 * etc.) are created via a factory and dependency injection system. Each of
 * these objects is the responsibility of an "owner", which handled its
 * instantiation and manages its lifetime.
 */
export default interface Owner {
    /**
     * Given a {@linkcode FullName} return a corresponding instance.
     */
    lookup<Type extends ValidType, Name extends ValidName<Type>>(
        fullName: FullName<Type, Name>,
        options?: RegisterOptions,
    ): DIRegistry[Type][Name];

    /**
     * Registers a factory or value that can be used for dependency injection
     * (with `inject`) or for service lookup. Each factory is registered with a
     * full name including two parts: `'type:name'`.
     *
     * - To override the default of instantiating the class on the `Factory`,
     *   pass the `{ instantiate: false }` option. This is useful when you have
     *   already instantiated the class to use with this factory.
     * - To override the default singleton behavior and instead create multiple
     *   instances, pass the `{ singleton: false }` option.
     */
    // Dear future maintainer: yes, I know that `Factory<object> | object` is
    // an exceedingly weird type here. This is how we type it internally in
    // Ember itself. We actually allow more or less *anything* to be passed
    // here. In the future, we may possibly be able to update this to actually
    // take advantage of the `FullName` here to require that the registered
    // factory and corresponding options do the right thing (passing an *actual*
    // factory, not needing `create` if `options.instantiate` is `false`, etc.)
    // but doing so will require rationalizing Ember's own internals and may
    // need a full Ember RFC.
    register(fullName: FullName, factory: Factory<object> | object, options?: RegisterOptions): void;

    /**
     * Given a fullName of the form `'type:name'`, like `'route:application'`,
     * return a corresponding factory manager.
     *
     * Any instances created via the factory's `.create()` method must be
     * destroyed manually by the caller of `.create()`. Typically, this is done
     * during the creating objects own `destroy` or `willDestroy` methods.
     */
    factoryFor<Type extends ValidType, Name extends ValidName<Type>>(
        fullName: FullName<Type, Name>,
    ): ResolveFactoryManager<Type, Name>;
}

export interface RegisterOptions {
    instantiate?: boolean | undefined;
    singleton?: boolean | undefined;
}

/**
 * Registered factories are instantiated by having create called on them.
 * Additionally they are singletons by default, so each time they are looked up
 * they return the same instance.
 *
 * However, that behavior can be modified with the `instantiate` and `singleton`
 * options to the {@linkcode Owner.register} method.
 */
export interface Factory<T> {
    /**
     * A function that will create an instance of the class with any
     * dependencies injected.
     *
     * @param initialValues Any values to set on an instance of the class
     */
    create(initialValues?: Partial<T>): T;
}

/**
 * A manager which can be used for introspection of the factory's class or for
 * the creation of factory instances with initial properties. The manager is an
 * object with the following properties:
 *
 * - `class` - The registered or resolved class.
 * - `create` - A function that will create an instance of the class with any
 *   dependencies injected.
 *
 * @note `FactoryManager` is *not* user-constructible; the only legal way to get
 *   a `FactoryManager` is via {@linkcode Owner.factoryFor}.
 */
export interface FactoryManager<T> extends Factory<T> {
    /** The registered or resolved class. */
    readonly class: Factory<T>;
}

/**
 * A record mapping all known items of a given type: if the item is known it
 * will be `true`; otherwise it will be `false` or `undefined`.
 */
export type KnownForTypeResult<Type extends string> = {
    [FullName in `${Type}:${string}`]: boolean | undefined;
};

/**
 * The contract a custom resolver must implement. Most apps never need to think
 * about this: the application's resolver is supplied by `ember-resolver` in
 * the default blueprint.
 */
export interface Resolver {
    resolve: (name: string) => Factory<object> | object | undefined;
    knownForType?: <Type extends string>(type: Type) => KnownForTypeResult<Type>;
    lookupDescription?: (fullName: FullName) => string;
    makeToString?: (factory: Factory<object>, fullName: FullName) => string;
    normalize?: (fullName: FullName) => string;
}

export function getOwner(object: object): Owner | undefined;

export function setOwner(object: object, owner: Owner): void;

// Don't export things unless we *intend* to.
export {};
