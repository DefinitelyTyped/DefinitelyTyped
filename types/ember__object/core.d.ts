import {
    EmberInstanceArguments,
    UnwrapComputedPropertySetters,
    EmberClassConstructor,
    Objectify,
    MixinOrLiteral,
    EmberClassArguments,
    Fix
} from '@ember/object/-private/types';

export default class CoreObject {
    /**
     * As of Ember 3.1, CoreObject constructor takes initial object properties as an argument.
     * See: https://github.com/emberjs/ember.js/commit/4709935854d4c29b0d2c054614d53fa2c55309b1
     */
    constructor(properties?: object);

    _super(...args: any[]): any;

    /**
     * An overridable method called when objects are instantiated. By default,
     * does nothing unless it is overridden during class definition.
     */
    init(): void;

    /**
     * Defines the properties that will be concatenated from the superclass (instead of overridden).
     * @default null
     */
    concatenatedProperties: any[];

    /**
     * Destroyed object property flag. If this property is true the observers and bindings were
     * already removed by the effect of calling the destroy() method.
     * @default false
     */
    isDestroyed: boolean;
    /**
     * Destruction scheduled flag. The destroy() method has been called. The object stays intact
     * until the end of the run loop at which point the isDestroyed flag is set.
     * @default false
     */
    isDestroying: boolean;

    /**
     * Destroys an object by setting the `isDestroyed` flag and removing its
     * metadata, which effectively destroys observers and bindings.
     * If you try to set a property on a destroyed object, an exception will be
     * raised.
     * Note that destruction is scheduled for the end of the run loop and does not
     * happen immediately.  It will set an isDestroying flag immediately.
     * @return receiver
     */
    destroy(): CoreObject;

    /**
     * Override to implement teardown.
     */
    willDestroy(): void;

    /**
     * Returns a string representation which attempts to provide more information than Javascript's toString
     * typically does, in a generic way for all Ember objects (e.g., "<App.Person:ember1024>").
     * @return string representation
     */
    toString(): string;

    static create<Class extends typeof CoreObject>(
        this: Class
    ): InstanceType<Class>;

    static create<
        Class extends typeof CoreObject,
        T1 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >
    >(
        this: Class,
        arg1: T1 & ThisType<T1 & InstanceType<Class>>
    ): InstanceType<Class> & T1;

    static create<
        Class extends typeof CoreObject,
        T1 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >,
        T2 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >
    >(
        this: Class,
        arg1: T1 & ThisType<T1 & InstanceType<Class>>,
        arg2: T2 & ThisType<T2 & InstanceType<Class>>
    ): InstanceType<Class> & T1 & T2;

    static create<
        Class extends typeof CoreObject,
        T1 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >,
        T2 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >,
        T3 extends EmberInstanceArguments<
            UnwrapComputedPropertySetters<InstanceType<Class>>
        >
    >(
        this: Class,
        arg1: T1 & ThisType<T1 & InstanceType<Class>>,
        arg2: T2 & ThisType<T2 & InstanceType<Class>>,
        arg3: T3 & ThisType<T3 & InstanceType<Class>>
    ): InstanceType<Class> & T1 & T2 & T3;

    static extend<Statics, Instance>(
        this: Statics & EmberClassConstructor<Instance>
    ): Objectify<Statics> & EmberClassConstructor<Instance>;

    static extend<
        Statics,
        Instance extends B1,
        T1 extends EmberClassArguments,
        B1
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>
    ): Objectify<Statics> & EmberClassConstructor<T1 & Instance>;

    static extend<
        Statics,
        Instance extends B1 & B2,
        T1 extends EmberClassArguments,
        B1,
        T2 extends EmberClassArguments,
        B2
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>,
        arg2: MixinOrLiteral<T2, B2> & ThisType<Fix<Instance & T1 & T2>>
    ): Objectify<Statics> & EmberClassConstructor<T1 & T2 & Instance>;

    static extend<
        Statics,
        Instance extends B1 & B2 & B3,
        T1 extends EmberClassArguments,
        B1,
        T2 extends EmberClassArguments,
        B2,
        T3 extends EmberClassArguments,
        B3
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>,
        arg2: MixinOrLiteral<T2, B2> & ThisType<Fix<Instance & T1 & T2>>,
        arg3: MixinOrLiteral<T3, B3> & ThisType<Fix<Instance & T1 & T2 & T3>>
    ): Objectify<Statics> & EmberClassConstructor<T1 & T2 & T3 & Instance>;

    static extend<
        Statics,
        Instance extends B1 & B2 & B3 & B4,
        T1 extends EmberClassArguments,
        B1,
        T2 extends EmberClassArguments,
        B2,
        T3 extends EmberClassArguments,
        B3,
        T4 extends EmberClassArguments,
        B4
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>,
        arg2: MixinOrLiteral<T2, B2> & ThisType<Fix<Instance & T1 & T2>>,
        arg3: MixinOrLiteral<T3, B3> & ThisType<Fix<Instance & T1 & T2 & T3>>,
        arg4: MixinOrLiteral<T4, B4> &
            ThisType<Fix<Instance & T1 & T2 & T3 & T4>>
    ): Objectify<Statics> & EmberClassConstructor<T1 & T2 & T3 & T4 & Instance>;

    static reopen<Statics, Instance>(
        this: Statics & EmberClassConstructor<Instance>
    ): Objectify<Statics> & EmberClassConstructor<Instance>;

    static reopen<
        Statics,
        Instance extends B1,
        T1 extends EmberClassArguments,
        B1
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>
    ): Objectify<Statics> & EmberClassConstructor<Instance & T1>;

    static reopen<
        Statics,
        Instance extends B1 & B2,
        T1 extends EmberClassArguments,
        B1,
        T2 extends EmberClassArguments,
        B2
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>,
        arg2: MixinOrLiteral<T2, B2> & ThisType<Fix<Instance & T1 & T2>>
    ): Objectify<Statics> & EmberClassConstructor<Instance & T1 & T2>;

    static reopen<
        Statics,
        Instance extends B1 & B2 & B3,
        T1 extends EmberClassArguments,
        B1,
        T2 extends EmberClassArguments,
        B2,
        T3 extends EmberClassArguments,
        B3
    >(
        this: Statics & EmberClassConstructor<Instance>,
        arg1: MixinOrLiteral<T1, B1> & ThisType<Fix<Instance & T1>>,
        arg2: MixinOrLiteral<T2, B2> & ThisType<Fix<Instance & T1 & T2>>,
        arg3: MixinOrLiteral<T3, B3> & ThisType<Fix<Instance & T1 & T2 & T3>>
    ): Objectify<Statics> & EmberClassConstructor<Instance & T1 & T2 & T3>;

    static reopenClass<Statics>(this: Statics): Statics;

    static reopenClass<Statics, T1 extends EmberClassArguments>(
        this: Statics,
        arg1: T1
    ): Statics & T1;

    static reopenClass<
        Statics,
        T1 extends EmberClassArguments,
        T2 extends EmberClassArguments
    >(this: Statics, arg1: T1, arg2: T2): Statics & T1 & T2;

    static reopenClass<
        Statics,
        T1 extends EmberClassArguments,
        T2 extends EmberClassArguments,
        T3 extends EmberClassArguments
    >(this: Statics, arg1: T1, arg2: T2, arg3: T3): Statics & T1 & T2 & T3;

    static detect<Statics, Instance>(
        this: Statics & EmberClassConstructor<Instance>,
        obj: any
    ): obj is Objectify<Statics> & EmberClassConstructor<Instance>;

    static detectInstance<Instance>(
        this: EmberClassConstructor<Instance>,
        obj: any
    ): obj is Instance;

    /**
     * Iterate over each computed property for the class, passing its name and any
     * associated metadata (see metaForProperty) to the callback.
     */
    static eachComputedProperty(
        callback: (...args: any[]) => any,
        binding: {}
    ): void;
    /**
     * Returns the original hash that was passed to meta().
     * @param key property name
     */
    static metaForProperty(key: string): {};
    static isClass: boolean;
    static isMethod: boolean;
}
