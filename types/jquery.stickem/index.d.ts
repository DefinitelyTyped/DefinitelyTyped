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
    item?: string;

    /**
     * selector for content container, sizes matched with `item`
     */
    container?: string;

    /**
     * css class used to apply
     */
    stickClass?: string;

    /**
     * css class used to apply when ending sticky
     */
    endStickClass?: string;

    /**
     * offset to use for the sticky element in the parent element
     */
    offset?: number | string;

    /**
     * where to place sticky element
     */
    start?: number | string;

    /**
     * Callback to execute when in stick state
     */
    onStick?: () => void;

    /**
     * Callback to execute when getting out of stick state
     */
    onUnstick?: () => void;
}

interface JQuery {
    stickem(settings?: StickemSettings): JQuery;
}
