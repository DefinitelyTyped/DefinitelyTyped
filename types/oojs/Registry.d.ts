declare namespace OO {
    interface RegistryEventMap {
        register: [name: string, data: unknown];
        unregister: [name: string, data: unknown];
    }

    /**
     * A map interface for associating arbitrary data with a symbolic name. Used in
     * place of a plain object to provide additional {@link OO.Registry.register registration}
     * or {@link OO.Registry.lookup lookup} functionality.
     *
     * See <https://www.mediawiki.org/wiki/OOjs/Registries_and_factories>.
     */
    interface Registry extends EventEmitter {
        /**
         * Associate one or more symbolic names with some data.
         *
         * Any existing entry with the same name will be overridden.
         *
         * @param name Symbolic name or list of symbolic names
         * @param data Data to associate with symbolic name
         * @throws {Error} Name argument must be a string or array
         */

        register(name: string | string[], data: any): void;

        /**
         * Remove one or more symbolic names from the registry.
         *
         * @param name Symbolic name or list of symbolic names
         * @throws {Error} Name argument must be a string or array
         */
        unregister(name: string | string[]): void;

        /**
         * Get data for a given symbolic name.
         *
         * @param name Symbolic name
         * @return Data associated with symbolic name
         */
        lookup(name: string): unknown | undefined;

        // #region EventEmitter overloads
        on<K extends keyof RegistryEventMap, A extends ArgTuple = [], C = null>(
            event: K,
            method: EventHandler<C, (this: C, ...args: [...A, ...RegistryEventMap[K]]) => void>,
            args?: A,
            context?: C,
        ): this;
        on<K extends string, C = null>(
            event: K extends keyof RegistryEventMap ? never : K,
            method: EventHandler<C>,
            args?: any[],
            context?: C,
        ): this;

        once<K extends keyof RegistryEventMap>(
            event: K,
            listener: (this: null, ...args: RegistryEventMap[K]) => void,
        ): this;
        once<K extends string>(
            event: K extends keyof RegistryEventMap ? never : K,
            listener: (this: null, ...args: any[]) => void,
        ): this;

        off<K extends keyof RegistryEventMap, C = null>(
            event: K,
            method?: EventHandler<C, (this: C, ...args: RegistryEventMap[K]) => void>,
            context?: C,
        ): this;
        off<K extends string, C = null>(
            event: K extends keyof RegistryEventMap ? never : K,
            method?: EventHandler<C>,
            context?: C,
        ): this;

        emit<K extends keyof RegistryEventMap>(event: K, ...args: RegistryEventMap[K]): boolean;
        emit<K extends string>(event: K extends keyof RegistryEventMap ? never : K, ...args: any[]): boolean;

        emitThrow<K extends keyof RegistryEventMap>(event: K, ...args: RegistryEventMap[K]): boolean;
        emitThrow<K extends string>(event: K extends keyof RegistryEventMap ? never : K, ...args: any[]): boolean;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        connect<T extends Partial<Record<keyof RegistryEventMap, any>>, C>(
            context: C,
            methods: EventConnectionMap<T, C, RegistryEventMap>,
        ): this;

        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        disconnect<T extends Partial<Record<keyof RegistryEventMap, any>>, C>(
            context: C,
            methods?: EventConnectionMap<T, C, RegistryEventMap>,
        ): this;
        // #endregion
    }

    interface RegistryConstructor {
        new(): Registry;
        prototype: Registry;
        static: {};
    }

    const Registry: RegistryConstructor;
}
