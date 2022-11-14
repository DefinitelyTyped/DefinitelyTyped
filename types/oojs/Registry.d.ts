declare namespace OO {
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
    }

    interface RegistryConstructor {
        new (): Registry;
        prototype: Registry;
        static: {};
    }

    const Registry: RegistryConstructor;
}
