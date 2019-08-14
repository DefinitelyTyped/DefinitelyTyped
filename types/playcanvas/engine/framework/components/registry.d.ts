declare namespace pc {

    /**
     * @name pc.ComponentSystemRegistry
     * @class Store, access and delete instances of the various ComponentSystems
     * @description Create a new ComponentSystemRegistry
     */
    class ComponentSystemRegistry {

        /**
         * @private
         * @function
         * @name pc.ComponentSystemRegistry#add
         * @description Add a new Component type
         * @param {Object} name The name of the Component
         * @param {Object} component The {pc.ComponentSystem} instance
         */
        private add(name: string, system: pc.ComponentSystem): void;

        /**
         * @private
         * @function
         * @name pc.ComponentSystemRegistry#remove
         * @description Remove a Component type
         * @param {Object} name The name of the Component remove
         */
        remove(name: string): void;

        /**
         * @private
         * @function
         * @name pc.ComponentSystemRegistry#list
         * @description Return the contents of the registry as an array, this order of the array
         * is the order in which the ComponentSystems must be initialized.
         * @returns {pc.ComponentSystem[]} An array of component systems.
         */
        list(): pc.ComponentSystem[];
    }
}
