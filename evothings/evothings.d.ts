// Type definitions for evothings 1.2
// Project: https://github.com/evothings/evothings-examples/tree/master/resources/libs/evothings
// Definitions by: Tijmen van Gulik <https://github.com/tijmenvangulik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module evothings {
    /**
     * Load a script.
     * @param {string} url - URL or path to the script. Relative paths are
     * relative to the HTML file that initiated script loading.
     * @param {function} callback - Optional parameterless function that will
     * be called when the script has loaded.
     * @public
     */
    export function loadScript (url : string, callback : () =>void);

    /**
     * Load array of scripts.
     * @param {array} array - Array of URL or path name stringa.
     * Relative paths are relative to the HTML file that initiated
     * script loading.
     * @param {function} loadedCallback - Optional parameterless
     * function called when all scripts in the array has loaded.
     * @public
     */
    export function loadScripts(array : string[], loadedCallback : () =>void);

    /**
     * Experimental.
     * Mark a script as loaded. This is useful if a script is designed
     * to be included both in HTML and in JavaScript.
     * @param {string} pathOrURL - URL or path to the script. Relative paths are
     * relative to the HTML file that initiated script loading.
     * @public
     */
    export function markScriptAsLoaded(pathOrURL : string);
    /**
     * <p>Add a callback that will be called when all scripts are loaded.</p>
     * <p><strong>It is good practise to always use this function when
     * loading script asynchronously or using a library that does so.</strong></p>
     * @param  {function} callback - Parameterless function that will
     * be called when all scripts have finished loading.
     * @public
     */
    export function scriptsLoaded(callback : ()=>void);

    /* ------------------ Debugging ------------------ */

    /**
     * Print a JavaScript object (dictionary). For debugging.
     *
     * @param {Object} obj - Object to print.
     * @param {function} printFun - print function (optional - defaults to
     * console.log if not given).
     *
     * @example
     * var obj = { company: 'Evothings', field: 'IoT' };
     * evothings.printObject(obj);
     * evothings.printObject(obj, console.log);
     *
     * @public
     */
    export function printObject(obj : any, printFun : () =>void);

    /* ------------------ Platform check ------------------ */

    /**
     * @namespace
     * @description Namespace for platform check functions.
     */
    export module os {
        /**
         * Returns true if current platform is iOS, false if not.
         * @return {boolean} true if platform is iOS, false if not.
         * @public
         */
        export function isIOS() : boolean;

        /**
         * Returns true if current platform is iOS 7, false if not.
         * @return {boolean} true if platform is iOS 7, false if not.
         * @public
         */
        export function isIOS7(): boolean;

        /**
         * Returns true if current platform is Android, false if not.
         * @return {boolean} true if platform is Android, false if not.
         * @public
         */
        export function isAndroid(): boolean;

        /**
         * Returns true if current platform is Windows Phone, false if not.
         * @return {boolean} true if platform is Windows Phone, false if not.
         * @public
         */
        export function isWP(): boolean;

    }


}