declare module goog {
    function require(name: 'goog.net.xpc.NixTransport'): typeof goog.net.xpc.NixTransport;
}

declare module goog.net.xpc {

    /**
     * NIX method transport.
     *
     * NOTE(user): NIX method tested in all IE versions starting from 6.0.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
     *     belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class NixTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Global name of the Wrapper VBScript class.
         * Note that this class will be stored in the *global*
         * namespace (i.e. window in browsers).
         * @type {string}
         */
        static NIX_WRAPPER: string;
        
        /**
         * Global name of the GetWrapper VBScript function. This
         * constant is used by JavaScript to call this function.
         * Note that this function will be stored in the *global*
         * namespace (i.e. window in browsers).
         * @type {string}
         */
        static NIX_GET_WRAPPER: string;
        
        /**
         * The name of the handle message method used by the wrapper class
         * when calling the transport.
         * @type {string}
         */
        static NIX_HANDLE_MESSAGE: string;
        
        /**
         * The name of the create channel method used by the wrapper class
         * when calling the transport.
         * @type {string}
         */
        static NIX_CREATE_CHANNEL: string;
        
        /**
         * A "unique" identifier that is stored in the wrapper
         * class so that the wrapper can be distinguished from
         * other objects easily.
         * @type {string}
         */
        static NIX_ID_FIELD: string;
        
        /**
         * The transport type.
         * @type {number}
         * @protected
         * @override
         */
        transportType: number;
        
        /**
         * Determines if the installed version of IE supports accessing window.opener
         * after it has been set to a non-Window/null value. NIX relies on this being
         * possible.
         * @return {boolean} Whether window.opener behavior is compatible with NIX.
         */
        static isNixSupported(): boolean;
        
        /**
         * Sends a message.
         * @param {string} service The name of the service the message is to be
         *   delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    }
}
