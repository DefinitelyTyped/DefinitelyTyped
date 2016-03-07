declare module goog {
    function require(name: 'goog.fx.dom'): typeof goog.fx.dom;
    function require(name: 'goog.fx.dom.PredefinedEffect'): typeof goog.fx.dom.PredefinedEffect;
    function require(name: 'goog.fx.dom.Slide'): typeof goog.fx.dom.Slide;
    function require(name: 'goog.fx.dom.SlideFrom'): typeof goog.fx.dom.SlideFrom;
    function require(name: 'goog.fx.dom.Swipe'): typeof goog.fx.dom.Swipe;
    function require(name: 'goog.fx.dom.Scroll'): typeof goog.fx.dom.Scroll;
    function require(name: 'goog.fx.dom.Resize'): typeof goog.fx.dom.Resize;
    function require(name: 'goog.fx.dom.ResizeWidth'): typeof goog.fx.dom.ResizeWidth;
    function require(name: 'goog.fx.dom.ResizeHeight'): typeof goog.fx.dom.ResizeHeight;
    function require(name: 'goog.fx.dom.Fade'): typeof goog.fx.dom.Fade;
    function require(name: 'goog.fx.dom.FadeOut'): typeof goog.fx.dom.FadeOut;
    function require(name: 'goog.fx.dom.FadeIn'): typeof goog.fx.dom.FadeIn;
    function require(name: 'goog.fx.dom.FadeOutAndHide'): typeof goog.fx.dom.FadeOutAndHide;
    function require(name: 'goog.fx.dom.FadeInAndShow'): typeof goog.fx.dom.FadeInAndShow;
    function require(name: 'goog.fx.dom.BgColorTransform'): typeof goog.fx.dom.BgColorTransform;
    function require(name: 'goog.fx.dom.ColorTransform'): typeof goog.fx.dom.ColorTransform;
}

declare module goog.fx.dom {

    /**
     * Abstract class that provides reusable functionality for predefined animations
     * that manipulate a single DOM element
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start Array for start coordinates.
     * @param {Array<number>} end Array for end coordinates.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.Animation}
     * @constructor
     */
    class PredefinedEffect extends goog.fx.Animation {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
        
        /**
         * Called to update the style of the element.
         * @protected
         */
        updateStyle(): void;
        
        /**
         * Whether the DOM element being manipulated is rendered right-to-left.
         * @return {boolean} True if the DOM element is rendered right-to-left, false
         *     otherwise.
         */
        isRightToLeft(): boolean;
    }

    /**
     * Creates an animation object that will slide an element from A to B.  (This
     * in effect automatically sets up the onanimate event for an Animation object)
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 2D array for start coordinates (X, Y).
     * @param {Array<number>} end 2D array for end coordinates (X, Y).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Slide extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Slides an element from its current position.
     *
     * @param {Element} element DOM node to be used in the animation.
     * @param {Array<number>} end 2D array for end coordinates (X, Y).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Slide}
     * @constructor
     */
    class SlideFrom extends goog.fx.dom.Slide {
        constructor(element: Element, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that will slide an element into its final size.
     * Requires that the element is absolutely positioned.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 2D array for start size (W, H).
     * @param {Array<number>} end 2D array for end size (W, H).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Swipe extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that will scroll an element from A to B.
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 2D array for start scroll left and top.
     * @param {Array<number>} end 2D array for end scroll left and top.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Scroll extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that will resize an element between two widths
     * and heights.
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 2D array for start width and height.
     * @param {Array<number>} end 2D array for end width and height.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Resize extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that will resize an element between two widths
     *
     * Start and End should be numbers
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} start Start width.
     * @param {number} end End width.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class ResizeWidth extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that will resize an element between two heights
     *
     * Start and End should be numbers
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} start Start height.
     * @param {number} end End height.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class ResizeHeight extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
    }

    /**
     * Creates an animation object that fades the opacity of an element between two
     * limits.
     *
     * Start and End should be floats between 0 and 1
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>|number} start 1D Array or Number with start opacity.
     * @param {Array<number>|number} end 1D Array or Number for end opacity.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Fade extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>|number, end: Array<number>|number, time: number, opt_acc?: Function);
        
        /**
         * Animation event handler that will show the element.
         */
        show(): void;
        
        /**
         * Animation event handler that will hide the element
         */
        hide(): void;
    }

    /**
     * Fades an element out from full opacity to completely transparent.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeOut extends goog.fx.dom.Fade {
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Fades an element in from completely transparent to fully opacity.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeIn extends goog.fx.dom.Fade {
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Fades an element out from full opacity to completely transparent and then
     * sets the display to 'none'
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeOutAndHide extends goog.fx.dom.Fade {
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Sets an element's display to be visible and then fades an element in from
     * completely transparent to fully opaque.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeInAndShow extends goog.fx.dom.Fade {
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Provides a transformation of an elements background-color.
     *
     * Start and End should be 3D arrays representing R,G,B
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 3D Array for RGB of start color.
     * @param {Array<number>} end 3D Array for RGB of end color.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class BgColorTransform extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
        
        /**
         * Animation event handler that will set the background-color of an element
         */
        setColor(): void;
    }

    /**
     * Provides a transformation of an elements color.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 3D Array representing R,G,B.
     * @param {Array<number>} end 3D Array representing R,G,B.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @constructor
     * @extends {goog.fx.dom.PredefinedEffect}
     */
    class ColorTransform extends goog.fx.dom.PredefinedEffect {
        constructor(element: Element, start: Array<number>, end: Array<number>, time: number, opt_acc?: Function);
    }

    /**
     * Fade elements background color from start color to the element's current
     * background color.
     *
     * Start should be a 3D array representing R,G,B
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array<number>} start 3D Array for RGB of start color.
     * @param {number} time Length of animation in milliseconds.
     * @param {goog.events.EventHandler=} opt_eventHandler Optional event handler
     *     to use when listening for events.
     */
    function bgColorFadeIn(element: Element, start: Array<number>, time: number, opt_eventHandler?: goog.events.EventHandler<any>): void;
}
