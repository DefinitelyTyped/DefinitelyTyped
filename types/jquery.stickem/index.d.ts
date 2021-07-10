// Type definitions for non-npm package jquery.stickem.js 1.4
// Project: https://github.com/davist11/jQuery-Stickem
// Definitions by: David Paz <https://github.com/davidmpaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface StickemSettings {
    /**
     * selector for element to make sticky
     */
    item?: string | undefined;

    /**
     * selector for content container, sizes matched with `item`
     */
    container?: string | undefined;

    /**
     * css class used to apply
     */
    stickClass?: string | undefined;

    /**
     * css class used to apply when ending sticky
     */
    endStickClass?: string | undefined;

    /**
     * offset to use for the sticky element in the parent element
     */
    offset?: number | string | undefined;

    /**
     * where to place sticky element
     */
    start?: number | string | undefined;

    /**
     * Callback to execute when in stick state
     */
    onStick?: (() => void) | undefined;

    /**
     * Callback to execute when getting out of stick state
     */
    onUnstick?: (() => void) | undefined;
}

interface JQuery {
    stickem(settings?: StickemSettings): JQuery;
}
