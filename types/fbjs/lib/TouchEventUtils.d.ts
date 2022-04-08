declare namespace TouchEventUtils {
    /**
     * Utility function for common case of extracting out the primary touch from a
     * touch event.
     * - `touchEnd` events usually do not have the `touches` property.
     *   http://stackoverflow.com/questions/3666929/
     *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
     */
    function extractSingleTouch(
        nativeEvent: Event,
    ): {
        pageX: number;
        pageY: number;
    } | null;
}

// tslint:disable-next-line export-just-namespace
export = TouchEventUtils;
