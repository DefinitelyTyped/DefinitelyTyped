//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.idle
 */
export namespace Idle {
    type IdleState = "active" | "idle" | "locked";

    interface Static {
        /**
         * Returns "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
         *
         * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since
         * the last user input detected.
         */
        queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

        /**
         * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events.
         * The default interval is 60 seconds.
         *
         * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
         */
        setDetectionInterval(intervalInSeconds: number): void;

        /**
         * Fired when the system changes to an active or idle state. The event fires with "idle" if the the user has not generated
         * any input for a specified number of seconds, and "active" when the user generates input on an idle system.
         */
        onStateChanged: Events.Event<(newState: IdleState) => void>;
    }
}
