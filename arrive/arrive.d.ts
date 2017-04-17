// Type definitions for Arrive
// Project: https://github.com/uzairfarooq/arrive
// Definitions by: Alexander Makarov <https://github.com/samdark/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface ArriveOptions {
    /**
     * Defaults to false. Setting it to true would make arrive event fire on existing elements which start to satisfy selector after some modification in DOM attributes (an arrive event won't fire twice for a single element even if the option is true). If false, it'd only fire for newly created elements.
     */
    fireOnAttributesModification?: boolean
    /**
     * Defaults to false. Setting it to true would ensure that registered callbacks fire only once. No need to unbind the event if the attribute is set to true, it'll automatically unbind after firing once.
     */
    onceOnly?: boolean
}

interface JQuery {
    /**
     * Unbind all arrive events on document element
     */
    unbindArrive(): JQuery;

    /**
     * Unbind all arrive events on document element which are watching for selector specified
     * @param selector
     */
    unbindArrive(selector: string): JQuery;

    /**
     * Unbind only a specific callback
     * @param callback
     */
    unbindArrive(callback: () => void): JQuery;

    /**
     * Unbind only a specific callback on selector specified
     * @param selector
     * @param callback
     */
    unbindArrive(selector: string, callback: () => void): JQuery;

    /**
     * Watch for creation of an element which satisfies the selector specified
     * @param selector
     * @param callback
     */
    arrive(selector: string, callback: () => void): JQuery;

    /**
     * Watch for creation of an element which satisfies the selector specified
     *
     * @param selector
     * @param options
     * @param callback
     */
    arrive(selector: string, options: ArriveOptions, callback: () => void): JQuery;

    /**
     * Watch for removal of an element which satisfies the selector specified
     * @param selector
     * @param callback
     */
    leave(selector: string, callback: () => void): JQuery;
}
