// Type definitions for Cldr.js 0.4.4
// Project: https://github.com/rxaviers/cldrjs
// Definitions by: Raman But-Husaim <https://github.com/RamanBut-Husaim>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module cldr {
    /**
     * @name Attributes
     * @memberof cldr
     * @kind interface
     *
     * @description
     * The object created during instance initialization and used internally by .get()
     * to replace dynamic parts of an item path.
     */
    interface Attributes {
        /**
         * @name language
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Language subtag {@link http://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions}
         */
        language: any;

        /**
         * @name script
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Script subtag {@link http://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions}
         */
        script: any;

        /**
         * @name region
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Region subtag {@link http://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions}
         */
        region: any;

        /**
         * @name territory
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Region subtag (territory variant) {@link http://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions}
         */
        territory: any;

        /**
         * @name languageId
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Language Id {@link http://www.unicode.org/reports/tr35/#Unicode_language_identifier}
         */
        languageId: any;

        /**
         * @name maxLanguageId
         * @memberof cldr.Attributes
         * @kind property
         * @access public
         *
         * @type {any}
         *
         * @description
         * Maximized Language Id {@link http://www.unicode.org/reports/tr35/#Likely_Subtags}
         */
        maxLanguageId: any;
    }

    /**
     * @name CldrStatic
     * @memberof cldr
     * @kind interface
     *
     * @description
     * The cldr class definition.
     */
    interface CldrStatic {
        /**
         * @name get
         * @memberof cldr.CldrStatic
         * @kind function
         * @access public
         *
         * @description
         * Get the item data given its path, or 'undefined' if missing.
         *
         * @param {string} path The path to the cldr member.
         *
         * @returns {any} The cldr member.
         */
        get(path: string) : any;

        /**
         * @name get
         * @memberof cldr.CldrStatic
         * @kind function
         * @access public
         *
         * @description
         * Get the item data given its path, or 'undefined' if missing.
         *
         * @param {Array<string>} paths The array with path parts to the cldr member.
         *
         * @returns {any} The cldr member.
         */
        get(paths: string[]): any;

        /**
         * @name main
         * @memberof cldr.CldrStatic
         * @kind function
         * @access public
         *
         * @description
         * It's an alias for .get(["main/{languageId}, ...])"
         *
         * @param {string} path The path to the cldr member.
         *
         * @returns {any} The cldr member.
         */
        main(path: string): any;

        /**
         * @name main
         * @memberof cldr.CldrStatic
         * @kind function
         * @access public
         *
         * @declaration
         * It's an alias for .get(["main/{languageId}, ...])"
         *
         * @param {Array<string>} paths The array with path parts to the cldr member.
         *
         * @returns {any} The cldr member.
         */
        main(paths: string[]): any;

        /**
         * @name locale
         * @memberof cldr.CldrStatic
         * @kind property
         * @access public
         *
         * @type {string}
         *
         * @declaration
         * The locale string.
         */
        locale: string;

        /**
         * @name attributes
         * @memberof cldr.CldrStatic
         * @kind property
         * @access public
         *
         * @type {cldr.Attributes}
         *
         * @declaration
         * The object created during instance initialization and used internally by .get()
         * to replace dynamic parts of an item path.
         */
        attributes: Attributes;
    }

    /**
     * @name CldrFactory
     * @memberof cldr
     * @kind inteface
     *
     * @description
     * The factory for {@link cldr.CldrStatic} class.
     */
    interface CldrFactory {
        /**
         * @name load
         * @memberof cldr.CldrFactory
         * @kind function
         * @access public
         *
         * @description
         * Load the CLDR content in the form of JSON.
         *
         * @param {any} json The json content.
         * @param {Array<any>} otherJson Optional. The parts of the JSON.
         *
         * @returns {void}
         */
        load(json: any, ...otherJson: any[]): void;

        /**
         * @name constructor
         * @memberof cldr.CldrFactory
         * @kind function
         * @access public
         *
         * @description
         * The constructor function for {@link cldr.CldrStatic} class.
         *
         * @param {string} locale The locale name that was previously loaded.
         *
         * @returns {cldr.CldrStatic} The instance of {@link cldr.CldrStatic} class.
         */
        new (locale: string): CldrStatic;
    }
}

declare module "cldr" {
    export = cldr;
}

declare var Cldr: cldr.CldrFactory;
