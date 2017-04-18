declare module goog {
    function require(name: 'goog.events.EventId'): typeof goog.events.EventId;
}

declare module goog.events {

    /**
     * A templated class that is used when registering for events. Typical usage:
     * <code>
     *   /** @type {goog.events.EventId<MyEventObj>}
     *   var myEventId = new goog.events.EventId(
     *       goog.events.getUniqueId(('someEvent'));
     *
     *   // No need to cast or declare here since the compiler knows the correct
     *   // type of 'evt' (MyEventObj).
     *   something.listen(myEventId, function(evt) {});
     * </code>
     *
     * @param {string} eventId
     * @template T
     * @constructor
     * @struct
     * @final
     */
    class EventId<T> {
        constructor(eventId: string);
    }
}
