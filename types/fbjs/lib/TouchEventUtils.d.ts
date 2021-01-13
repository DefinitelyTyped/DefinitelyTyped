declare namespace TouchEventUtils {
    /**
     * Utility function for common case of extracting out the primary touch from a
     * touch event.
     * - `touchEnd` events usually do not have the `touches` property.
     *   http://stackoverflow.com/questions/3666929/
     *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
     *
     * @param {Event} nativeEvent Native event that may or may not be a touch.
     * @return {TouchesObject?} an object with pageX and pageY or null.
     */
    var extractSingleTouch: (
        nativeEvent,
    ) => {
        pageX: number;
        pageY: number;
    } | null;
}
export = TouchEventUtils;
