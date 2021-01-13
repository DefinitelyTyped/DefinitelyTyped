declare namespace BrowserSupportCore {
    /**
     * @return {bool} True if browser supports css animations.
     */
    var hasCSSAnimations: () => boolean;

    /**
     * @return {bool} True if browser supports css transforms.
     */
    var hasCSSTransforms: () => boolean;

    /**
     * @return {bool} True if browser supports css 3d transforms.
     */
    var hasCSS3DTransforms: () => boolean;

    /**
     * @return {bool} True if browser supports css transitions.
     */
    var hasCSSTransitions: () => boolean;
}

export = BrowserSupportCore;
