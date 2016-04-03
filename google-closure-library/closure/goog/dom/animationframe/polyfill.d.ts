declare module goog {
    function require(name: 'goog.dom.animationFrame.polyfill'): typeof goog.dom.animationFrame.polyfill;
}

declare module goog.dom.animationFrame.polyfill {

    /**
     * Installs the requestAnimationFrame (and cancelAnimationFrame) polyfill.
     */
    var install: any;
}
