declare namespace pc {

    /**
     * @name pc.script
     * @namespace
     * @description Functions for creating user scripts for the script component
     * @property {Boolean} legacy If True, then engine will use legacy scripting system, defaults to true (subject to change)
     */
    namespace script {

        /**
         * @function
         * @name pc.script.create
         * @description Create a script resource object. A script file should contain a single call to pc.script.create and the callback should return a script object which will be
         * instantiated when attached to Entities.
         * @param {String} name The name of the script object.
         * @param {Function} callback The callback function which is passed an {pc.Application} object,
         * which is used to access Entities and Components, and should return the Type of the script resource
         * to be instanced for each Entity.
         * @example
         * pc.script.create( function (app) {
         *  var Scriptable = function (entity) {
         *      // store entity
         *      this.entity = entity;
         *
         *      // use app
         *      app.components.model.addComponent(entity, {...});
         *  };
         *
         *  return Scriptable;
         * }
         */
        function create(name: string, callback: Function): void;

        /**
        * @function
        * @name pc.script.attribute
        * @description Creates a script attribute for the current script. The script attribute can be accessed
        * inside the script instance like so 'this.attributeName' or outside a script instance like so 'entity.script.attributeName'.
        * Script attributes can be edited from the Attribute Editor of the PlayCanvas Editor like normal Components.
        * @param {String} name The name of the attribute
        * @param {String} type The type of the attribute. Can be one of the following: 'number', 'string', 'boolean', 'asset', 'entity', 'rgb', 'rgba', 'vector', 'enumeration', 'curve', 'colorcurve'
        * @param {Object} defaultValue The default value of the attribute
        * @param {Object} options Optional parameters for the attribute. Valid values are:
        * <ul>
        *   <li>{Number} min: The minimum value of the attribute</li>
        *   <li>{Number} max: The maximum value of the attribute</li>
        *   <li>{Number} step: The step that will be used when changing the attribute value in the PlayCanvas Editor</li>
        *   <li>{Number} decimalPrecision: A number that specifies the number of decimal digits allowed for the value</li>
        *   <li>{Object[]} enumerations: An array of name, value pairs from which the user can select one if the attribute type is an enumeration</li>
        *   <li>{String[]} curves: (For 'curve' attributes only) An array of strings that define the names of each curve in the curve editor.</li>
        *   <li>{Array} color: (For 'curve' attributes only) If true then the curve attribute will be a color curve.</li>
        * </ul>
        * @example
        * pc.script.attribute('speed', 'number', 5);
        * pc.script.attribute('message', 'string', "My message");
        * pc.script.attribute('enemyPosition', 'vector', [1,0,0]);
        * pc.script.attribute('spellType', 'enumeration', 0, {
        *     enumerations: [{
        *        name: "Fire",
        *        value: 0
        *     }, {
        *        name: "Ice",
        *        value: 1
        *     }]
        *  });
        * pc.script.attribute('enemy', 'entity');
        * pc.script.attribute('enemySpeed', 'curve');
        * pc.script.attribute('enemyPosition', 'curve', null, {
        *     curves: ['x', 'y', 'z']
        * });
        * pc.script.attribute('color', 'colorcurve', null, {
        *     type: 'rgba'
        * });
        *
        * pc.script.create('scriptable', function (app) {
        *  var Scriptable = function (entity) {
        *      // store entity
        *      this.entity = entity;
        *  };
        *
        *  return Scriptable;
        * }
        */
        function attribute(name: string, type: string, defaultValue: any, options?: {
            min?: number,
            max?: number,
            step?: number,
            decimalPrecision?: number,
            enumerations?: any[],
            curves?: string[],
            color?: any[]
        }): void;

        /**
         * @function
         * @name pc.script.createLoadingScreen
         * @description Handles the creation of the loading screen of the application. A script can subscribe to
         * the events of a {@link pc.Application} to show a loading screen, progress bar etc. In order for this to work
         * you need to set the project's loading screen script to the script that calls this method.
         * @param  {Function} callback A function which can set up and tear down a customised loading screen.
         * @example
         * pc.script.createLoadingScreen(function (app) {
         *     var showSplashScreen = function () { // }
         *     var hideSplashScreen = function () { // }
         *     var showProgress = function (progress) { // }
         *     app.on("preload:start", showSplashScreen);
         *     app.on("preload:progress", showProgress);
         *     app.on("start", hideSplashScreen);
         * });
         */
        function createLoadingScreen(callback: Function): void;
    }
}
