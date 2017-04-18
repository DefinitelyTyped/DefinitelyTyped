declare module goog {
    function require(name: 'goog.ui.IdleTimer'): typeof goog.ui.IdleTimer;
}

declare module goog.ui {

    /**
     * Event target that will give notification of state changes between active and
     * idle. This class is designed to require few resources while the user is
     * active.
     * @param {number} idleThreshold Amount of time in ms at which we consider the
     *     user has gone idle.
     * @param {goog.ui.ActivityMonitor=} opt_activityMonitor The activity monitor
     *     keeping track of user interaction. Defaults to a default-constructed
     *     activity monitor. If a default activity monitor is used then this class
     *     will dispose of it. If an activity monitor is passed in then the caller
     *     remains responsible for disposing of it.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IdleTimer extends goog.events.EventTarget {
        constructor(idleThreshold: number, opt_activityMonitor?: goog.ui.ActivityMonitor);
        
        /**
         * @return {number} the amount of time at which we consider the user has gone
         *     idle in ms.
         */
        getIdleThreshold(): number;
        
        /**
         * @return {goog.ui.ActivityMonitor} the activity monitor keeping track of user
         *     interaction.
         */
        getActivityMonitor(): goog.ui.ActivityMonitor;
        
        /**
         * Returns true if there has been no user action for at least the specified
         * interval, and false otherwise
         * @return {boolean} true if the user is idle, false otherwise.
         */
        isIdle(): boolean;
    }
}

declare module goog.ui.IdleTimer {

    /**
     * Event constants for the idle timer event target
     * @enum {string}
     */
    type Event = string;
    var Event: {
        BECOME_ACTIVE: Event;
        BECOME_IDLE: Event;
    };
}
