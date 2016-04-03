declare module goog {
    function require(name: 'goog.dom.RangeEndpoint'): typeof goog.dom.RangeEndpoint;
}

declare module goog.dom {

    /**
     * Constants for selection endpoints.
     * @enum {number}
     */
    type RangeEndpoint = number;
    var RangeEndpoint: {
        START: RangeEndpoint;
        END: RangeEndpoint;
    };
}
