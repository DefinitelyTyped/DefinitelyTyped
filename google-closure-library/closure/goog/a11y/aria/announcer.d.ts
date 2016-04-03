declare module goog {
    function require(name: 'goog.a11y.aria.Announcer'): typeof goog.a11y.aria.Announcer;
}

declare module goog.a11y.aria {

    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Announcer extends goog.Disposable {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Announce a message to be read by any assistive technologies the user may
         * have active.
         * @param {string} message The message to announce to screen readers.
         * @param {goog.a11y.aria.LivePriority=} opt_priority The priority of the
         *     message. Defaults to POLITE.
         */
        say(message: string, opt_priority?: goog.a11y.aria.LivePriority): void;
    }
}
