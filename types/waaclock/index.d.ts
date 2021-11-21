// Type definitions for waaclock 0.5
// Project: https://github.com/sebpiq/WAAClock
// Definitions by: Mel Bourgeois <https://github.com/Smona>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace WAAClock {
    /**
     * Every scheduling method returns an event object.
     */
    interface Event {
        /** The deadline of the event. */
        deadline: number;

        /** Reschedule the deadline of an event, deadline is the absolute time as given by context.currentTime. */
        schedule(deadline: number): void;

        /** Sets the event's tolerance. See [the docs](https://github.com/sebpiq/WAAClock#more-infos-about-scheduling) for a detailed explanation. */
        tolerance(values: { early?: number; late?: number }): Event;

        /**
         * Sets the event to repeat every time seconds. If you want to remove the repeat you can pass null.
         *
         * Note that even if an event is dropped because it expired, subsequent "repeats" of the event will still be executed.
         */
        repeat(time: number | null): Event;

        /** Time stretches only this event. */
        timeStretch(tRef: number, ratio: number): void;

        /** Returns true if the event is repeated, false otherwise */
        isRepeated(): boolean;

        /**
         * Cancels the event execution. This will work only if the event hasn't been scheduled yet
         * (see [the docs](https://github.com/sebpiq/WAAClock#more-infos-about-scheduling) for more info).
         */
        clear(): Event;
    }
}

/**
 * WAAClock handles all the scheduling work. It is the only object you need to create directly.
 *
 * You can set the default tolerance of events with the options toleranceLate and toleranceEarly.
 */
declare class WAAClock {
    constructor(audioContext: AudioContext, opts?: { toleranceEarly?: number; toleranceLate?: number });

    /** Schedules func to run before deadline in seconds, and returns an Event object. */
    callbackAtTime(func: (e: WAAClock.Event) => void, deadline: number): WAAClock.Event;

    /** Schedules func to run after delay seconds, and returns an Event object. */
    setTimeout(func: (e: WAAClock.Event) => void, delay: number): WAAClock.Event;

    /**
     * Stretch time and repeat time of events by ratio, keeping their relative distance,
     * and taking tRef as a reference . In fact this is equivalent to changing the tempo.
     */
    timeStretch(tRef: number, events: WAAClock.Event[], ratio: number): WAAClock.Event[];

    /** Starts the clock. This will also erase all the events that were previously scheduled. */
    start(): void;

    /** Stops the clock. */
    stop(): void;
}

export = WAAClock;
