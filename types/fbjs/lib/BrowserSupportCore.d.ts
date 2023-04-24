declare namespace BrowserSupportCore {
    /**
     * True if browser supports css animations.
     */
    function hasCSSAnimations(): boolean;

    /**
     * True if browser supports css transforms.
     */
    function hasCSSTransforms(): boolean;

    /**
     * True if browser supports css 3d transforms.
     */
    function hasCSS3DTransforms(): boolean;

    /**
     * True if browser supports css transitions.
     */
    function hasCSSTransitions(): boolean;
}
// eslint-disable-next-line export-just-namespace
export = BrowserSupportCore;
