declare namespace pc {

    /**
    * @name pc.ScriptRegistry
    * @class Container for all Script Types that are available to this application
    * @description Create an instance of a pc.ScriptRegistry.
    * Note: PlayCanvas scripts can access the Script Registry from inside the application with {@link pc.Application#scripts} {@link pc.ADDRESS_REPEAT}.
    * @param {pc.Application} app Application to attach registry to.
    */
    class ScriptRegistry {
        constructor(app: pc.Application)

        app: pc.Application;

        /**
         * @function
         * @name pc.ScriptRegistry#add
         * @description Add {@link ScriptType} to registry.
         * Note: when {@link pc.createScript} is called, it will add the {@link ScriptType} to the registry automatically.
         * If a script already exists in registry, and the new script has a `swap` method defined,
         * it will perform code hot swapping automatically in async manner.
         * @param {ScriptType} scriptType Script Type that is created using {@link pc.createScript}
         * @returns {Boolean} True if added for the first time or false if script already exists
         * @example
         * var PlayerController = pc.createScript('playerController');
         * // playerController Script Type will be added to pc.ScriptRegistry automatically
         * app.scripts.has('playerController') === true; // true
         */
        add(script: ScriptType): boolean;

        /**
         * @function
         * @name pc.ScriptRegistry#remove
         * @description Remove {@link ScriptType}.
         * @param {String} name Name of a {@link ScriptType} to remove
         * @returns {Boolean} True if removed or False if already not in registry
         * @example
         * app.scripts.remove('playerController');
         */
        remove(script: string): boolean;

        /**
         * @function
         * @name pc.ScriptRegistry#get
         * @description Get {@link ScriptType} by name.
         * @param {String} name Name of a {@link ScriptType}.
         * @returns {ScriptType} The Script Type if it exists in the registry or null otherwise.
         * @example
         * var PlayerController = app.scripts.get('playerController');
         */
        get(name: string): ScriptType;

        /**
         * @function
         * @name pc.ScriptRegistry#has
         * @description Check if a {@link ScriptType} with the specified name is in the registry.
         * @param {String} name Name of a {@link ScriptType}
         * @returns {Boolean} True if {@link ScriptType} is in registry
         * @example
         * if (app.scripts.has('playerController')) {
         *     // playerController is in pc.ScriptRegistry
         * }
         */
        has(name: string): boolean;

        /**
         * @function
         * @name pc.ScriptRegistry#list
         * @description Get list of all {@link ScriptType}s from registry.
         * @returns {ScriptType[]} list of all {@link ScriptType}s in registry
         * @example
         * // logs array of all Script Type names available in registry
         * console.log(app.scripts.list().map(function(o) {
         *     return o.name;
         * }));
         */
        list(): ScriptType[];

    }
}