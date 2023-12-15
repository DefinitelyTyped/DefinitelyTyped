// type aliases that mention the range of allowed values
type integer = number;
type floatBetween0And1 = number;

declare namespace Parallax {
    /**
     * The parallax options object can be used to configure the parallax effect
     * programmatically.
     * Alternatively, you can specify these options as HTML `data-*` attributes on
     * the scene HTML element.
     * Some options can also be updated programmatically at runtime through the
     * `Parallax` object.
     */
    interface ParallaxOptions {
        /**
         * Makes mouse input relative to the position of the scene element.
         *
         * No effect when gyroscope is used.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-relative-input`
         *
         * This option cannot be updated at runtime.
         */
        relativeInput?: boolean;

        /**
         * Clips mouse input to the bounds of the scene.
         * This means the movement stops as soon as the edge of the scene element is
         * reached by the cursor.
         *
         * No effect when gyroscope is used, or `hoverOnly` is active.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-clip-relative-input`
         *
         * This option cannot be updated at runtime.
         */
        clipRelativeInput?: boolean;

        /**
         * Parallax will only be in effect while the cursor is over the scene
         * element, otherwise all layers move back to their initial position.
         * Works best in combination with `relativeInput`.
         *
         * No effect when gyroscope is used.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-hover-only`
         *
         * This option cannot be updated at runtime.
         */
        hoverOnly?: boolean;

        /**
         * Allows usage of a different element for cursor input.
         *
         * Will only work in combination with `relativeInput`, setting `hoverOnly`
         * might make sense too.
         * No effect when gyroscope is used.
         *
         * Defaults to `null`.
         *
         * Corresponding scene HTML attribute: `data-input-element` (the attribute
         * takes a
         * [query selector string](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
         * to identify the input element)
         *
         * This option can be updated at runtime though `Parallax.setInputElement`.
         */
        inputElement?: HTMLElement | null;

        /**
         * Caches the initial X axis value on initialization and calculates motion
         * relative to this.
         *
         * No effect when cursor is used.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-calibrate-x`
         *
         * This option can be updated at runtime though `Parallax.calibrate(x, y)`.
         */
        calibrateX?: boolean;

        /**
         * Caches the initial Y axis value on initialization and calculates motion
         * relative to this.
         *
         * No effect when cursor is used.
         *
         * Defaults to `true`.
         *
         * Corresponding scene HTML attribute: `data-calibrate-y`
         *
         * This option can be updated at runtime though `Parallax.calibrate(x, y)`.
         */
        calibrateY?: boolean;

        /**
         * Inverts the movement of the layers relative to the input.
         * Setting both the `invertX` and `invertY` values to `false` will cause the
         * layers to move with the device motion or cursor.
         *
         * Defaults to `true`.
         *
         * Corresponding scene HTML attribute: `data-invert-x`
         *
         * This option can be updated at runtime though `Parallax.invert(x, y)`.
         */
        invertX?: boolean;

        /**
         * Inverts the movement of the layers relative to the input.
         * Setting both the `invertX` and `invertY` values to `false` will cause the
         * layers to move with the device motion or cursor.
         *
         * Defaults to `true`.
         *
         * Corresponding scene HTML attribute: `data-invert-y`
         *
         * This option can be updated at runtime though `Parallax.invert(x, y)`.
         */
        invertY?: boolean;

        /**
         * Limits the movement of layers on the X axis.
         * Leaving this value at `false` gives complete freedom to the movement.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-limit-x`
         *
         * This option can be updated at runtime though `Parallax.limit(x, y)`.
         */
        limitX?: false | integer;

        /**
         * Limits the movement of layers on the Y axis.
         * Leaving this value at `false` gives complete freedom to the movement.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-limit-y`
         *
         * This option can be updated at runtime though `Parallax.limit(x, y)`.
         */
        limitY?: false | integer;

        /**
         * Multiplies the input motion by this value, increasing or decreasing the
         * movement speed and range.
         *
         * Defaults to `10.0`.
         *
         * Corresponding scene HTML attribute: `data-scalar-x`
         *
         * This option can be updated at runtime though `Parallax.scalar(x, y)`.
         */
        scalarX?: number;

        /**
         * Multiplies the input motion by this value, increasing or decreasing the
         * movement speed and range.
         *
         * Defaults to `10.0`.
         *
         * Corresponding scene HTML attribute: `data-scalar-y`
         *
         * This option can be updated at runtime though `Parallax.scalar(x, y)`.
         */
        scalarY?: number;

        /**
         * Amount of friction applied to the layers.
         * At `1` the layers will instantly go to their new positions, everything
         * below `1` adds some easing.
         * The default value of `0.1` adds some sensible easing.
         * Try `0.15` or `0.075` for some difference.
         *
         * Defaults to `0.1`.
         *
         * Corresponding scene HTML attribute: `data-friction-x`
         *
         * This option can be updated at runtime though `Parallax.friction(x, y)`.
         */
        frictionX?: floatBetween0And1;

        /**
         * Amount of friction applied to the layers.
         * At `1` the layers will instantly go to their new positions, everything
         * below `1` adds some easing.
         * The default value of `0.1` adds some sensible easing.
         * Try `0.15` or `0.075` for some difference.
         *
         * Defaults to `0.1`.
         *
         * Corresponding scene HTML attribute: `data-friction-y`
         *
         * This option can be updated at runtime though `Parallax.friction(x, y)`.
         */
        frictionY?: floatBetween0And1;

        /**
         * X origin of the mouse input.
         * The default of `0.5` refers to the center of the screen or element,
         * `0` is the left border, `1` the right.
         *
         * No effect when gyroscope is used.
         *
         * Defaults to `0.5`.
         *
         * Corresponding scene HTML attribute: `data-origin-x`
         *
         * This option can be updated at runtime though `Parallax.origin(x, y)`.
         */
        originX?: floatBetween0And1;

        /**
         * Y origin of the mouse input.
         * The default of `0.5` refers to the center of the screen or element,
         * `0` is the top border, `1` the bottom.
         *
         * No effect when gyroscope is used.
         *
         * Defaults to `0.5`.
         *
         * Corresponding scene HTML attribute: `data-origin-y`
         *
         * This option can be updated at runtime though `Parallax.origin(x, y)`.
         */
        originY?: floatBetween0And1;

        /**
         * Decimals the element positions will be rounded to.
         * `1` is a sensible default which you should not need to change in the next
         * few years, unless you have a very interesting and unique setup.
         *
         * Defaults to `1`.
         *
         * Corresponding scene HTML attribute: `data-precision`
         *
         * This option cannot be updated at runtime.
         */
        precision?: integer;

        /**
         * String that will be fed to `querySelectorAll` on the scene element to
         * select the layer elements.
         * When `null`, will simply select all direct child elements.
         * Use `.layer` for legacy behaviour, selecting only child elements having
         * the class name `layer`.
         *
         * Defaults to `null`.
         *
         * Corresponding scene HTML attribute: `data-selector`
         *
         * This option cannot be updated at runtime.
         */
        selector?: string | null;

        /**
         * Set to `true` to enable interactions with the scene and layer elements.
         * When set to the default of `false`, the CSS attribute
         * `pointer-events: none` will be applied for performance reasons.
         * Setting this to `true` alone will not be enough to fully interact with
         * all layers, since they will be overlapping.
         * You have to either set `position: absolute` on all layer child elements,
         * or keep `pointerEvents` at `false` and set `pointer-events: all` for the
         * interactable elements only.
         *
         * Defaults to `false`.
         *
         * Corresponding scene HTML attribute: `data-pointer-events`
         *
         * This option cannot be updated at runtime.
         */
        pointerEvents?: boolean;

        /**
         * Callback function that will be called as soon as the `Parallax` instance
         * has finished its setup.
         * This might currently take up to `1000ms` (`calibrationDelay * 2`).
         *
         * Defaults to `null`.
         *
         * This option does not have a corresponding scene HTML attribute.
         *
         * This option cannot be updated at runtime.
         */
        onReady?: null | (() => void);
    }
}

/**
 * A `Parallax` object adds the parallax effect for a given scene.
 */
declare class Parallax {
    /**
     * Creates and enables a parallax effect on the given `scene`.
     *
     * @param scene the scene element contains the layers with `data-depth`
     *  attributes to apply the parallax effect to.
     * @param options the options object can be used to configure the parallax
     *  effect programmatically.
     */
    constructor(scene: HTMLElement, options?: Parallax.ParallaxOptions);

    /**
     * Enables a disabled `Parallax` instance.
     */
    enable(): void;

    /**
     * Disables a running `Parallax` instance.
     */
    disable(): void;

    /**
     * Completely destroys a `Parallax` instance, allowing it to be garbage
     * collected.
     */
    destroy(): void;

    /**
     * Returns the version number of the Parallax library.
     */
    version(): "3.1.0";

    /**
     * @see {@link ParallaxOptions.inputElement}
     */
    setInputElement(element: HTMLElement | null): void;

    /**
     * @see {@link ParallaxOptions.calibrateX}
     * @see {@link ParallaxOptions.calibrateY}
     */
    calibrate(x?: boolean, y?: boolean): void;

    /**
     * @see {@link ParallaxOptions.invertX}
     * @see {@link ParallaxOptions.invertY}
     */
    invert(x?: boolean, y?: boolean): void;

    /**
     * @see {@link ParallaxOptions.limitX}
     * @see {@link ParallaxOptions.limitY}
     */
    limit(x?: false | integer, y?: false | integer): void;

    /**
     * @see {@link ParallaxOptions.scalarX}
     * @see {@link ParallaxOptions.scalarY}
     */
    scalar(x?: number, y?: number): void;

    /**
     * @see {@link ParallaxOptions.frictionX}
     * @see {@link ParallaxOptions.frictionY}
     */
    friction(x: floatBetween0And1, y: floatBetween0And1): void;

    /**
     * @see {@link ParallaxOptions.originX}
     * @see {@link ParallaxOptions.originY}
     */
    origin(x: floatBetween0And1, y: floatBetween0And1): void;
}

export = Parallax;
