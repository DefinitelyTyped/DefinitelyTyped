declare namespace pc {

    /**
    * @component
    * @name pc.ScriptComponent
    * @class The ScriptComponent allows you to extend the functionality of an Entity by attaching your own Script Types defined in JavaScript files
    * to be executed with access to the Entity. For more details on scripting see <a href="//developer.playcanvas.com/user-manual/scripting/">Scripting</a>.
    * @param {pc.ScriptComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @extends pc.Component
    * @property {ScriptType[]} scripts An array of all script instances attached to an entity. This Array shall not be modified by developer.
    */
    class ScriptComponent extends pc.Component {
        constructor(system: pc.ScriptComponentSystem, entity: pc.Entity)

        scripts: ScriptType[]

        /**
         * @function
         * @name pc.ScriptComponent#has
         * @description Detect if script is attached to an entity using name of {@link ScriptType}.
         * @param {String} name The name of the Script Type
         * @returns {Boolean} If script is attached to an entity
         * @example
         * if (entity.script.has('playerController')) {
         *     // entity has script
         * }
         */
        has(name: string): boolean;

        /**
         * @function
         * @name pc.ScriptComponent#create
         * @description Create a script instance using name of a {@link ScriptType} and attach to an entity script component.
         * @param {String} name The name of the Script Type
         * @param {Object} [args] Object with arguments for a script
         * @param {Boolean} [args.enabled] if script instance is enabled after creation
         * @param {Object} [args.attributes] Object with values for attributes, where key is name of an attribute
         * @returns {ScriptType} Returns an instance of a {@link ScriptType} if successfully attached to an entity,
         * or null if it failed because a script with a same name has already been added
         * or if the {@link ScriptType} cannot be found by name in the {@link pc.ScriptRegistry}.
         * @example
         * entity.script.create('playerController', {
         *     attributes: {
         *         speed: 4
         *     }
         * });
         */
        create(name: string, args?: { enabled?: boolean, attributes?: {}}): ScriptType;

        /**
         * @function
         * @name pc.ScriptComponent#destroy
         * @description Destroy the script instance that is attached to an entity.
         * @param {String} name The name of the Script Type
         * @returns {Boolean} If it was successfully destroyed
         * @example
         * entity.script.destroy('playerController');
         */
        destroy(name: string): boolean;        

        /**
         * @function
         * @name pc.ScriptComponent#move
         * @description Move script instance to different position to alter update order of scripts within entity.
         * @param {String} name The name of the Script Type
         * @param {Number} ind New position index
         * @returns {Boolean} If it was successfully moved
         * @example
         * entity.script.move('playerController', 0);
         */
        move(name: string, ind: number): boolean;
    }
}
