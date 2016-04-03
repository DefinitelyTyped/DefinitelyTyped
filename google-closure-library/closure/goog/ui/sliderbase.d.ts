declare module goog {
    function require(name: 'goog.ui.SliderBase'): typeof goog.ui.SliderBase;
    function require(name: 'goog.ui.SliderBase.Orientation'): typeof goog.ui.SliderBase.Orientation;
}

declare module goog.ui {

    /**
     * This creates a SliderBase object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {(function(number):?string)=} opt_labelFn An optional function mapping
     *     slider values to a description of the value.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class SliderBase extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: ((arg0: number) => string));
        
        /**
         * The underlying range model
         * @type {goog.ui.RangeModel}
         * @protected
         */
        rangeModel: goog.ui.RangeModel;
        
        /**
         * The minThumb dom-element, pointing to the start of the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        valueThumb: HTMLDivElement;
        
        /**
         * The maxThumb dom-element, pointing to the end of the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        extentThumb: HTMLDivElement;
        
        /**
         * The dom-element highlighting the selected range.
         * @type {HTMLDivElement}
         * @protected
         */
        rangeHighlight: HTMLDivElement;
        
        /**
         * Enables/disables true RTL behavior.  This should be called immediately after
         * construction.  This is a temporary flag to allow clients to transition
         * to the new behavior at their convenience.  At some point it will be the
         * default.
         * @param {boolean} flipForRtl True if the slider should be flipped for RTL,
         *     false otherwise.
         */
        enableFlipForRtl(flipForRtl: boolean): void;
        
        /**
         * Returns the CSS class applied to the slider element for the given
         * orientation. Subclasses must override this method.
         * @param {goog.ui.SliderBase.Orientation} orient The orientation.
         * @return {string} The CSS class applied to slider elements.
         * @protected
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
        
        /**
         * Subclasses must implement this method and set the valueThumb and
         * extentThumb to non-null values. They can also set the rangeHighlight
         * element if a range highlight is desired.
         * @type {function() : void}
         * @protected
         */
        createThumbs(): void;
        
        /**
         * Returns the value to use for the current mouse position
         * @param {goog.events.Event} e  The mouse event object.
         * @return {number} The value that this mouse position represents.
         */
        getValueFromMousePosition(e: goog.events.Event): number;
        
        /**
         * Returns whether a thumb is currently being dragged with the mouse (or via
         * touch). Note that changing the value with keyboard, mouswheel, or via
         * move-to-point click immediately sends a CHANGE event without going through a
         * dragged state.
         * @return {boolean} Whether a dragger is currently being dragged.
         */
        isDragging(): boolean;
        
        /**
         * Moves the thumbs by the specified delta as follows
         * - as long as both thumbs stay within [min,max], both thumbs are moved
         * - once a thumb reaches or exceeds min (or max, respectively), it stays
         * - at min (or max, respectively).
         * In case both thumbs have reached min (or max), no change event will fire.
         * If the specified delta is smaller than the step size, it will be rounded
         * to the step size.
         * @param {number} delta The delta by which to move the selected range.
         */
        moveThumbs(delta: number): void;
        
        /**
         * Sets the value and extent of the underlying range model. We enforce that
         * getMinimum() <= value <= getMaximum() - extent and
         * getMinExtent <= extent <= getMaximum() - getValue()
         * If this is not satisfied for the given extent, the call is ignored and no
         * CHANGE event fires. This is a utility method to allow setting the thumbs
         * simultaneously and ensuring that only one event fires.
         * @param {number} value The value to which to set the value.
         * @param {number} extent The value to which to set the extent.
         */
        setValueAndExtent(value: number, extent: number): void;
        
        /**
         * @return {number} The minimum value.
         */
        getMinimum(): number;
        
        /**
         * Sets the minimum number.
         * @param {number} min The minimum value.
         */
        setMinimum(min: number): void;
        
        /**
         * @return {number} The maximum value.
         */
        getMaximum(): number;
        
        /**
         * Sets the maximum number.
         * @param {number} max The maximum value.
         */
        setMaximum(max: number): void;
        
        /**
         * @return {HTMLDivElement} The value thumb element.
         */
        getValueThumb(): HTMLDivElement;
        
        /**
         * @return {HTMLDivElement} The extent thumb element.
         */
        getExtentThumb(): HTMLDivElement;
        
        /**
         * Call back when the internal range model changes. Sub-classes may override
         * and re-enter this method to update a11y state. Consider protected.
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        handleRangeModelChange(e: goog.events.Event): void;
        
        /**
         * Returns the position to move the handle to for a given value
         * @param {number} val  The value to get the coordinate for.
         * @return {!goog.math.Coordinate} Coordinate with either x or y set.
         */
        getThumbCoordinateForValue(val: number): goog.math.Coordinate;
        
        /**
         * Sets the value and starts animating the handle towards that position.
         * @param {number} v Value to set and animate to.
         */
        animatedSetValue(v: number): void;
        
        /**
         * @return {boolean} True if the slider is animating, false otherwise.
         */
        isAnimating(): boolean;
        
        /**
         * Sets the factory that will be used to create additional animations to be
         * played when animating to a new value.  These animations can be for any
         * element and the animations will be played in addition to the default
         * animation(s).  The animations will also be played in the same parallel queue
         * ensuring that all animations are played at the same time.
         * @see #animatedSetValue
         *
         * @param {goog.ui.SliderBase.AnimationFactory} factory The animation factory to
         *     use.  This will not change the default animations played by the slider.
         *     It will only allow for additional animations.
         */
        setAdditionalAnimations(factory: goog.ui.SliderBase.AnimationFactory): void;
        
        /**
         * Changes the orientation.
         * @param {goog.ui.SliderBase.Orientation} orient The orientation.
         */
        setOrientation(orient: goog.ui.SliderBase.Orientation): void;
        
        /**
         * @return {goog.ui.SliderBase.Orientation} the orientation of the slider.
         */
        getOrientation(): goog.ui.SliderBase.Orientation;
        
        /**
         * @return {number} The amount to increment/decrement for page up/down as well
         *     as when holding down the mouse button on the background.
         */
        getBlockIncrement(): number;
        
        /**
         * Sets the amount to increment/decrement for page up/down as well as when
         * holding down the mouse button on the background.
         *
         * @param {number} value The value to set the block increment to.
         */
        setBlockIncrement(value: number): void;
        
        /**
         * Sets the minimal value that the extent may have.
         *
         * @param {number} value The minimal value for the extent.
         */
        setMinExtent(value: number): void;
        
        /**
         * @return {number} The amount to increment/decrement for up, down, left and
         *     right arrow keys and mouse wheel events.
         */
        getUnitIncrement(): number;
        
        /**
         * Sets the amount to increment/decrement for up, down, left and right arrow
         * keys and mouse wheel events.
         * @param {number} value  The value to set the unit increment to.
         */
        setUnitIncrement(value: number): void;
        
        /**
         * @return {?number} The step value used to determine how to round the value.
         */
        getStep(): number;
        
        /**
         * Sets the step value. The step value is used to determine how to round the
         * value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
        
        /**
         * @return {boolean} Whether clicking on the backgtround should move directly to
         *     that point.
         */
        getMoveToPointEnabled(): boolean;
        
        /**
         * Sets whether clicking on the background should move directly to that point.
         * @param {boolean} val Whether clicking on the background should move directly
         *     to that point.
         */
        setMoveToPointEnabled(val: boolean): void;
        
        /**
         * @return {number} The value of the underlying range model.
         */
        getValue(): number;
        
        /**
         * Sets the value of the underlying range model. We enforce that
         * getMinimum() <= value <= getMaximum() - getExtent()
         * If this is not satisifed for the given value, the call is ignored and no
         * CHANGE event fires.
         * @param {number} value The value.
         */
        setValue(value: number): void;
        
        /**
         * @return {number} The value of the extent of the underlying range model.
         */
        getExtent(): number;
        
        /**
         * Sets the extent of the underlying range model. We enforce that
         * getMinExtent() <= extent <= getMaximum() - getValue()
         * If this is not satisifed for the given extent, the call is ignored and no
         * CHANGE event fires.
         * @param {number} extent The value to which to set the extent.
         */
        setExtent(extent: number): void;
        
        /**
         * Change the visibility of the slider.
         * You must call this if you had set the slider's value when it was invisible.
         * @param {boolean} visible Whether to show the slider.
         */
        setVisible(visible: boolean): void;
        
        /**
         * Set a11y roles and state.
         * @protected
         */
        setAriaRoles(): void;
        
        /**
         * Set a11y roles and state when values change.
         * @protected
         */
        updateAriaStates(): void;
        
        /**
         * Enables or disables mouse wheel handling for the slider. The mouse wheel
         * handler enables the user to change the value of slider using a mouse wheel.
         *
         * @param {boolean} enable Whether to enable mouse wheel handling.
         */
        setHandleMouseWheel(enable: boolean): void;
        
        /**
         * @return {boolean} Whether the slider handles mousewheel.
         */
        isHandleMouseWheel(): boolean;
        
        /**
         * Enables or disables the slider. A disabled slider will ignore all
         * user-initiated events. Also fires goog.ui.Component.EventType.ENABLE/DISABLE
         * event as appropriate.
         * @param {boolean} enable Whether to enable the slider or not.
         */
        setEnabled(enable: boolean): void;
        
        /**
         * @return {boolean} Whether the slider is enabled or not.
         */
        isEnabled(): boolean;
        
        /**
         * @return {?string} The text value for the slider's current value, or null if
         *     unavailable.
         */
        getTextValue(): string;
    }
}

declare module goog.ui.SliderBase {

    /**
     * Event types used to listen for dragging events. Note that extent drag events
     * are also sent for single-thumb sliders, since the one thumb controls both
     * value and extent together; in this case, they can simply be ignored.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // DRAG_VALUE_START: EventType;
        // DRAG_VALUE_END: EventType;
        // DRAG_EXTENT_START: EventType;
        // DRAG_EXTENT_END: EventType;
        // DRAG_START: EventType;
        // DRAG_END: EventType;
    };

    /**
     * Enum for representing the orientation of the slider.
     *
     * @enum {string}
     */
    type Orientation = string;
    var Orientation: {
        VERTICAL: Orientation;
        HORIZONTAL: Orientation;
    };

    /**
     * The factory for creating additional animations to be played when animating to
     * a new value.
     * @interface
     */
    interface AnimationFactory {
        
        /**
         * Creates an additonal animation to play when animating to a new value.
         *
         * @param {number} previousValue The previous value (before animation).
         * @param {number} newValue The new value (after animation).
         * @param {number} interval The animation interval.
         * @return {!Array<!goog.fx.TransitionBase>} The additional animations to play.
         */
        createAnimations(previousValue: number, newValue: number, interval: number): Array<goog.fx.TransitionBase>;
    }
}
