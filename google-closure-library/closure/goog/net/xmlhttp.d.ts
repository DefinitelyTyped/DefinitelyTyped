declare module goog {
    function require(name: 'goog.net.DefaultXmlHttpFactory'): typeof goog.net.DefaultXmlHttpFactory;
    function require(name: 'goog.net.XmlHttp'): typeof goog.net.XmlHttp;
    function require(name: 'goog.net.XmlHttp.OptionType'): typeof goog.net.XmlHttp.OptionType;
    function require(name: 'goog.net.XmlHttp.ReadyState'): typeof goog.net.XmlHttp.ReadyState;
}

declare module goog.net {

    /**
     * Default factory to use when creating xhr objects.  You probably shouldn't be
     * instantiating this directly, but rather using it via goog.net.XmlHttp.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     */
    class DefaultXmlHttpFactory extends goog.net.XmlHttpFactory {
        constructor();
    }

    /** @const */
    var XmlHttpDefines: any;

    /**
     * Static class for creating XMLHttpRequest objects.
     * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.
     */
    function XmlHttp(): goog.net.XhrLike.OrNative;
}

declare module goog.net.XmlHttp {

    /**
     * Type of options that an XmlHttp object can have.
     * @enum {number}
     */
    type OptionType = number;
    var OptionType: {
        USE_NULL_FUNCTION: OptionType;
        LOCAL_REQUEST_ERROR: OptionType;
    };

    /**
     * Status constants for XMLHTTP, matches:
     * http://msdn.microsoft.com/library/default.asp?url=/library/
     *   en-us/xmlsdk/html/0e6a34e4-f90c-489d-acff-cb44242fafc6.asp
     * @enum {number}
     */
    type ReadyState = number;
    var ReadyState: {
        UNINITIALIZED: ReadyState;
        LOADING: ReadyState;
        LOADED: ReadyState;
        INTERACTIVE: ReadyState;
        COMPLETE: ReadyState;
    };

    /**
     * Gets the options to use with the XMLHttpRequest objects obtained using
     * the static methods.
     * @return {Object} The options.
     */
    function getOptions(): Object;

    /**
     * Sets the factories for creating XMLHttpRequest objects and their options.
     * @param {Function} factory The factory for XMLHttpRequest objects.
     * @param {Function} optionsFactory The factory for options.
     * @deprecated Use setGlobalFactory instead.
     */
    function setFactory(factory: Function, optionsFactory: Function): void;

    /**
     * Sets the global factory object.
     * @param {!goog.net.XmlHttpFactory} factory New global factory object.
     */
    function setGlobalFactory(factory: goog.net.XmlHttpFactory): void;
}
