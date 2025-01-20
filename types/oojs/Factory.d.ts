declare namespace OO {
    // HACK: Omit register and unregister because Factory changed their call signatures (!)
    interface Factory extends Omit<Registry, "register" | "unregister"> {
        /**
         * Register a constructor with the factory.
         *
         *     function MyClass() {};
         *     OO.initClass( MyClass );
         *     MyClass.key = 'hello';
         *
         *     // Register class with the factory
         *     factory.register( MyClass );
         *
         *     // Instantiate a class based on its registered key (also known as a "symbolic name")
         *     factory.create( 'hello' );
         *
         * @param constructor Constructor to use when creating object
         * @param name Symbolic name to use for {@link create()}.
         *  This parameter may be omitted in favour of letting the constructor decide
         *  its own name, through `constructor.static.name`.
         * @throws {Error} If a parameter is invalid
         */
        register(
            constructor: (ConstructorLike & { static: { name: string } }) | (ConstructorLike & { key: string }),
        ): void;

        /**
         * Register a class with the factory.
         *
         *     function MyClass() {};
         *     OO.initClass( MyClass );
         *     MyClass.key = 'hello';
         *
         *     // Register class with the factory
         *     factory.register( MyClass );
         *
         *     // Instantiate a class based on its registered key (also known as a "symbolic name")
         *     factory.create( 'hello' );
         *
         * @param constructor Class to use when creating an object
         * @param key The key for {@link create}.
         *  This parameter is usually omitted in favour of letting the class declare
         *  its own key, through `MyClass.key`.
         *  For backwards-compatibility with OOjs 6.0 (2021) and older, it can also be declared
         *  via `MyClass.static.name`.
         * @throws {Error} If a parameter is invalid
         */
        register(constructor: ConstructorLike, key: string): void;

        /**
         * Unregister a class from the factory.
         *
         * @param key Constructor function or key to unregister
         * @throws {Error} If a parameter is invalid
         */
        unregister(key: string | ConstructorLike): void;

        /**
         * Create an object based on a key.
         *
         * The key is used to look up the class to use, with any subsequent arguments passed to the
         * constructor function.
         *
         * @param key Class key
         * @param args Arguments to pass to the constructor
         * @return The new object
         * @throws {Error} Unknown key
         */
        create(key: string, ...args: any[]): unknown;
    }

    interface FactoryConstructor {
        new(): Factory;
        prototype: Factory;
        super: RegistryConstructor;
        /** @deprecated Use `super` instead */
        parent: RegistryConstructor;
        static: {};
    }

    const Factory: FactoryConstructor;
}
