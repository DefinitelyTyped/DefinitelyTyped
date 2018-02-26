declare namespace pc {
    type AttributesType = 'boolean' | 'number' | 'string' | 'json' | 'asset' | 'entity' |
        'rgb' | 'rgba' | 'vec2' | 'vec3' | 'vec4' | 'curve';
    type AttributesArgs = {
        type: AttributesType;
        default?: any;
        title?: string;
        description?: string;
        placeholder?: string | string[];
        array?: boolean;
        size?: number;
        min?: number;
        max?: number;
        precision?: number;
        assetType?: string;
        curves?: string[];
        color?: string;
        enum?: object[];
    }

    /**
    * @name pc.ScriptAttributes
    * @class Container of Script Attribute definitions. Implements an interface to add/remove attributes and store their definition for a {@link ScriptType}.
    * Note: An instance of pc.ScriptAttributes is created automatically by each {@link ScriptType}.
    * @param {ScriptType} scriptType Script Type that attributes relate to.
    */
    class ScriptAttributes {
        constructor(scriptType: ScriptType)

        /**
         * @function
         * @name pc.ScriptAttributes#add
         * @description Add Attribute
         * @param {String} name Name of an attribute
         * @param {Object} args Object with Arguments for an attribute
         * @param {String} args.type Type of an attribute value, list of possible types:
         * boolean, number, string, json, asset, entity, rgb, rgba, vec2, vec3, vec4, curve
         * @param {?} [args.default] Default attribute value
         * @param {String} [args.title] Title for Editor's for field UI
         * @param {String} [args.description] Description for Editor's for field UI
         * @param {(String|String[])} [args.placeholder] Placeholder for Editor's for field UI.
         * For multi-field types, such as vec2, vec3, and others use array of strings.
         * @param {Boolean} [args.array] If attribute can hold single or multiple values
         * @param {Number} [args.size] If attribute is array, maximum number of values can be set
         * @param {Number} [args.min] Minimum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
         * @param {Number} [args.max] Maximum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
         * @param {Number} [args.precision] Level of precision for field type 'number' with floating values
         * @param {String} [args.assetType] Name of asset type to be used in 'asset' type attribute picker in Editor's UI, defaults to '*' (all)
         * @param {String[]} [args.curves] List of names for Curves for field type 'curve'
         * @param {String} [args.color] String of color channels for Curves for field type 'curve', can be any combination of `rgba` characters.
         * Defining this property will render Gradient in Editor's field UI
         * @param {Object[]} [args.enum] List of fixed choices for field, defined as array of objects, where key in object is a title of an option
         * @example
         * PlayerController.attributes.add('fullName', {
         *     type: 'string',
         * });
         * @example
         * PlayerController.attributes.add('speed', {
         *     type: 'number',
         *     title: 'Speed',
         *     placeholder: 'km/h',
         *     default: 22.2
         * });
         * @example
         * PlayerController.attributes.add('resolution', {
         *     type: 'number',
         *     default: 32,
         *     enum: [
         *        { '32x32': 32 },
         *        { '64x64': 64 },
         *        { '128x128': 128 }
         *     ]
         * });
         */
        add(name: string, args: AttributesArgs): void;

        /**
         * @function
         * @name pc.ScriptAttributes#remove
         * @description Remove Attribute.
         * @param {String} name Name of an attribute
         * @returns {Boolean} True if removed or false if not defined
         * @example
         * PlayerController.attributes.remove('fullName');
         */
        remove(name: string): boolean;

        /**
         * @function
         * @name pc.ScriptAttributes#has
         * @description Detect if Attribute is added.
         * @param {String} name Name of an attribute
         * @returns {Boolean} True if Attribute is defined
         * @example
         * if (PlayerController.attributes.has('fullName')) {
         *     // attribute `fullName` is defined
         * });
         */
        has(name: string): boolean;

        /**
         * @function
         * @name pc.ScriptAttributes#get
         * @description Get object with attribute arguments.
         * Note: Changing argument properties will not affect existing Script Instances.
         * @param {String} name Name of an attribute
         * @returns {?Object} Arguments with attribute properties
         * @example
         * // changing default value for an attribute 'fullName'
         * var attr = PlayerController.attributes.get('fullName');
         * if (attr) attr.default = 'Unknown';
         */
        get(name: string): AttributesArgs;
    }

    /**
    * @static
    * @function
    * @name pc.createScript
    * @description Method to create named {@link ScriptType}.
    * It returns new function (class) "Script Type", which is auto-registered to {@link pc.ScriptRegistry} using it's name.
    * This is the main interface to create Script Types, to define custom logic using JavaScript, that is used to create interaction for entities.
    * @param {String} name unique Name of a Script Type.
    * If a Script Type with the same name has already been registered and the new one has a `swap` method defined in its prototype,
    * then it will perform hot swapping of existing Script Instances on entities using this new Script Type.
    * Note: There is a reserved list of names that cannot be used, such as list below as well as some starting from `_` (underscore):
    * system, entity, create, destroy, swap, move, scripts, onEnable, onDisable, onPostStateChange, has, on, off, fire, once, hasEvent
    * @param {pc.Application} [app] Optional application handler, to choose which {@link pc.ScriptRegistry} to add a script to.
    * By default it will use `pc.Application.getApplication()` to get current {@link pc.Application}.
    * @returns {Function} The constructor of a {@link ScriptType}, which the developer is meant to extend by adding attributes and prototype methods.
    * @example
    * var Turning = pc.createScript('turn');
    *
    * // define `speed` attribute that is available in Editor UI
    * Turning.attributes.add('speed', {
    *     type: 'number',
    *     default: 180,
    *     placeholder: 'deg/s'
    * });
    *
    * // runs every tick
    * Turning.prototype.update = function(dt) {
    *     this.entity.rotate(0, this.speed * dt, 0);
    * };
    */
    function createScript<Instance extends ScriptType, Class extends ScriptTypeConstructor<Instance>>(name: string, app?: pc.Application): Class;

    /**
    * @name ScriptType
    * @class Represents the type of a script. It is returned by {@link pc.createScript}. Also referred to as Script Type.<br />
    * The type is to be extended using its JavaScript prototype. There is a <strong>list of methods</strong>
    * that will be executed by the engine on instances of this type, such as: <ul><li>initialize</li><li>postInitialize</li><li>update</li><li>postUpdate</li><li>swap</li></ul>
    * <strong>initialize</strong> and <strong>postInitialize</strong> - are called if defined when script is about to run for the first time - postInitialize will run after all initialize methods are executed in the same tick or enabling chain of actions.<br />
    * <strong>update</strong> and <strong>postUpdate</strong> - methods are called if defined for enabled (running state) scripts on each tick.<br />
    * <strong>swap</strong> - This method will be called when a {@link ScriptType} that already exists in the registry gets redefined.
    * If the new {@link ScriptType} has a `swap` method in its prototype, then it will be executed to perform hot-reload at runtime.
    * @property {pc.Application} app The {@link pc.Application} that the instance of this type belongs to.
    * @property {pc.Entity} entity The {@link pc.Entity} that the instance of this type belongs to.
    * @property {Boolean} enabled True if the instance of this type is in running state. False when script is not running,
    * because the Entity or any of its parents are disabled or the Script Component is disabled or the Script Instance is disabled.
    * When disabled no update methods will be called on each tick.
    * initialize and postInitialize methods will run once when the script instance is in `enabled` state during app tick.
    */
    interface ScriptTypeConstructor<S extends ScriptType> {
        [key: string]: any;

        /**
         * @private
         * @readonly
         * @static
         * @name ScriptType.__name
         * @type String
         * @description Name of a Script Type.
         */
        _name: string;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.ScriptAttributes
         * @name ScriptType.attributes
         * @description The interface to define attributes for Script Types. Refer to {@link pc.ScriptAttributes}
         * @example
         * var PlayerController = pc.createScript('playerController');
         *
         * PlayerController.attributes.add('speed', {
         *     type: 'number',
         *     title: 'Speed',
         *     placeholder: 'km/h',
         *     default: 22.2
         * });
         */
        attributes: ScriptAttributes;

        /**
         * @readonly
         * @static
         * @function
         * @name ScriptType.extend
         * @param {Object} methods Object with methods, where key - is name of method, and value - is function.
         * @description Shorthand function to extend Script Type prototype with list of methods.
         * @example
         * var PlayerController = pc.createScript('playerController');
         *
         * PlayerController.extend({
         *     initialize: function() {
         *         // called once on initialize
         *     },
         *     update: function(dt) {
         *         // called each tick
         *     }
         * })
         */
        extend?(methods: { [key: string]: () => any }): void;

        new(args: { app: pc.Application, entity: pc.Entity, enabled?: boolean}): S;
        readonly prototype: S;
    }

    interface ScriptType {
        [key: string]: any;
        app: pc.Application;
        entity: pc.Entity;
        enabled: boolean;

        /**
         * initialize is called if defined when script is about to run for the first time.
         * @memberof ScriptType
         */
        initialize?(): void;

        /**
         * postInitialize will run after all initialize methods are executed in the  
         * same tick or enabling chain of actions.
         * @memberof ScriptType
         */
        postInitialize?(): void;

        /**
         * update is called if defined for enabled (running state) scripts on each tick.
         * @param {number} dt 
         * @memberof ScriptType
         */
        update?(dt: number): void;

        /**
         * postUpdate is called if defined for enabled (running state) scripts on each tick,  
         * after update.
         * @memberof ScriptType
         */
        postUpdate?(): void;

        /**
         * This method will be called when a ScriptType that already exists in the registry   
         * gets redefined. If the new ScriptType has a `swap` method in its prototype, 
         * then it will be executed to perform hot-reload at runtime. 
         * @memberof ScriptType
         */
        swap?(): void;

        // Events

        /**
         * @function
         * @name pc.ScriptType#on
         * @description Attach an event handler to an event
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.on('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         */
        on(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.ScriptType#off
         * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
         * if scope is not provided then all events with the callback will be unbound.
         * @param {String} [name] Name of the event to unbind
         * @param {Function} [callback] Function to be unbound
         * @param {Object} [scope] Scope that was used as the this when the event is fired
         * @example
         * var handler = function () {
         * };
         * obj.on('test', handler);
         *
         * obj.off(); // Removes all events
         * obj.off('test'); // Removes all events called 'test'
         * obj.off('test', handler); // Removes all handler functions, called 'test'
         * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
         */
        off(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
         * @function
         * @name pc.ScriptType#fire
         * @description Fire an event, all additional arguments are passed on to the event listener
         * @param {Object} name Name of event to fire
         * @param {*} [...] Arguments that are passed to the event handler
         * @example
         * obj.fire('test', 'This is the message');
         */
        fire(name: string, arg1: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): any;

        /**
         * @function
         * @name pc.ScriptType#once
         * @description Attach an event handler to an event. This handler will be removed after being fired once.
         * @param {String} name Name of the event to bind the callback to
         * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
         * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
         * @example
         * obj.once('test', function (a, b) {
         *     console.log(a + b);
         * });
         * obj.fire('test', 1, 2); // prints 3 to the console
         * obj.fire('test', 1, 2); // not going to get handled
         */
        once(name: string, callback: (...args: any[]) => void, scope: any): any;

        /**
        * @function
        * @name pc.ScriptType#hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * obj.on('test', function () { }); // bind an event to 'test'
        * obj.hasEvent('test'); // returns true
        */
        hasEvent(name: string): boolean;

    }
}