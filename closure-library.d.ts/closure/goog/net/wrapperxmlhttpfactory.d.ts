declare module goog {
    function require(name: 'goog.net.WrapperXmlHttpFactory'): typeof goog.net.WrapperXmlHttpFactory;
}

declare module goog.net {

    /**
     * An xhr factory subclass which can be constructed using two factory methods.
     * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
     * with an unchanged signature.
     * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
     *     A function which returns a new XHR object.
     * @param {function():!Object} optionsFactory A function which returns the
     *     options associated with xhr objects from this factory.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class WrapperXmlHttpFactory extends goog.net.XmlHttpFactory {
        constructor(xhrFactory: () => goog.net.XhrLike.OrNative, optionsFactory: () => Object);
    }
}
