declare module goog {
    function require(name: 'goog.net.xpc'): typeof goog.net.xpc;
    function require(name: 'goog.net.xpc.TransportTypes'): typeof goog.net.xpc.TransportTypes;
    function require(name: 'goog.net.xpc.ChannelStates'): typeof goog.net.xpc.ChannelStates;
}

declare module goog.net.xpc {

    /**
     * Enum used to identify transport types.
     * @enum {number}
     */
    type TransportTypes = number;
    var TransportTypes: {
        NATIVE_MESSAGING: TransportTypes;
        FRAME_ELEMENT_METHOD: TransportTypes;
        IFRAME_RELAY: TransportTypes;
        IFRAME_POLLING: TransportTypes;
        FLASH: TransportTypes;
        NIX: TransportTypes;
        DIRECT: TransportTypes;
    };

    /**
     * @enum {number}
     */
    type ChannelStates = number;
    var ChannelStates: {
        NOT_CONNECTED: ChannelStates;
        CONNECTED: ChannelStates;
        CLOSED: ChannelStates;
    };

    /**
     * Enum containing transport names. These need to correspond to the
     * transport class names for createTransport_() to work.
     * @const {!Object<string,string>}
     */
    var TransportNames: any;

    /**
     * Field names used on configuration object.
     * @const
     */
    var CfgFields: any;

    /**
     * Config properties that need to be URL sanitized.
     * @type {Array<string>}
     */
    var UriCfgFields: Array<string>;

    /**
     * The name of the transport service (used for internal signalling).
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var TRANSPORT_SERVICE_: string;

    /**
     * Transport signaling message: setup.
     * @type {string}
     */
    var SETUP: string;

    /**
     * Transport signaling message: setup for native transport protocol v2.
     * @type {string}
     */
    var SETUP_NTPV2: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var SETUP_ACK_: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     */
    var SETUP_ACK_NTPV2: string;

    /**
     * Object holding active channels.
     *
     * @package {Object<string, goog.net.xpc.CrossPageChannel>}
     */
    var channels: any;

    /**
     * The logger.
     * @type {goog.log.Logger}
     */
    var logger: goog.log.Logger;

    /**
     * Returns a random string.
     * @param {number} length How many characters the string shall contain.
     * @param {string=} opt_characters The characters used.
     * @return {string} The random string.
     */
    function getRandomString(length: number, opt_characters?: string): string;
}
