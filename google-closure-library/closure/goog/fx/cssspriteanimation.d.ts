declare module goog {
    function require(name: 'goog.fx.CssSpriteAnimation'): typeof goog.fx.CssSpriteAnimation;
}

declare module goog.fx {

    /**
     * This animation class is used to animate a CSS sprite (moving a background
     * image).  This moves through a series of images in a single image sprite. By
     * default, the animation loops when done.  Looping can be disabled by setting
     * {@code opt_disableLoop} and results in the animation stopping on the last
     * image in the image sprite.  You should set up the {@code background-image}
     * and size in a CSS rule for the relevant element.
     *
     * @param {Element} element The HTML element to animate the background for.
     * @param {goog.math.Size} size The size of one image in the image sprite.
     * @param {goog.math.Box} box The box describing the layout of the sprites to
     *     use in the large image.  The sprites can be position horizontally or
     *     vertically and using a box here allows the implementation to know which
     *     way to go.
     * @param {number} time The duration in milliseconds for one iteration of the
     *     animation.  For example, if the sprite contains 4 images and the duration
     *     is set to 400ms then each sprite will be displayed for 100ms.
     * @param {function(number) : number=} opt_acc Acceleration function,
     *    returns 0-1 for inputs 0-1.  This can be used to make certain frames be
     *    shown for a longer period of time.
     * @param {boolean=} opt_disableLoop Whether the animation should be halted
     *    after a single loop of the images in the sprite.
     *
     * @constructor
     * @extends {goog.fx.Animation}
     * @final
     */
    class CssSpriteAnimation extends goog.fx.Animation {
        constructor(element: Element, size: goog.math.Size, box: goog.math.Box, time: number, opt_acc?: (arg0: number) => number, opt_disableLoop?: boolean);
        
        /**
         * Clears the background position style set directly on the element
         * by the animation. Allows to apply CSS styling for background position on the
         * same element when the sprite animation is not runniing.
         */
        clearSpritePosition(): void;
    }
}
