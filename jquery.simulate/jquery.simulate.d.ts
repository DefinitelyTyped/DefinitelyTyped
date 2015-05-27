// Type definitions for jquery.simulate.js
// Project: https://github.com/jquery/jquery-simulate
// Definitions by: Derek Cicerone <https://github.com/derekcicerone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {

    /**
     * Simulates an event.
     *
     * @param type
     *            the type of event (eg: "mousemove", "keydown", etc...)
     * @param options
     *            the options for the event (these are event-specific)
     */
    simulate(type: string, options?: any): void;
}
