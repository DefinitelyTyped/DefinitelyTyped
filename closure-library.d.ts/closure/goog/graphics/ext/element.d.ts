declare module goog {
    function require(name: 'goog.graphics.ext.Element'): typeof goog.graphics.ext.Element;
}

declare module goog.graphics.ext {

    /**
     * Base class for a wrapper around the goog.graphics wrapper that enables
     * more advanced functionality.
     * @param {goog.graphics.ext.Group?} group Parent for this element.
     * @param {goog.graphics.Element} wrapper The thin wrapper to wrap.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Element extends goog.events.EventTarget {
        constructor(group: goog.graphics.ext.Group, wrapper: goog.graphics.Element);
        
        /** @return {goog.graphics.Element} The underlying thin wrapper. */
        getWrapper(): goog.graphics.Element;
        
        /**
         * @return {goog.graphics.ext.Element|goog.graphics.ext.Graphics} The graphics
         *     surface the element is a part of.
         */
        getGraphics(): goog.graphics.ext.Element|goog.graphics.ext.Graphics;
        
        /**
         * Returns the graphics implementation.
         * @return {goog.graphics.AbstractGraphics} The underlying graphics
         *     implementation drawing this element's wrapper.
         * @protected
         */
        getGraphicsImplementation(): goog.graphics.AbstractGraphics;
        
        /**
         * @return {goog.graphics.ext.Group|undefined} The parent of this element.
         */
        getParent(): goog.graphics.ext.Group|void;
        
        /**
         * @return {number} The distance from the left edge of this element to the left
         *     edge of its parent, specified in units of the parent's coordinate system.
         */
        getLeft(): number;
        
        /**
         * Sets the left coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} left The left coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setLeft(left: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The right coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getRight(): number;
        
        /**
         * Sets the right coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} right The right coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setRight(right: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The center coordinate of the element, in units of the
         * parent's coordinate system.
         */
        getCenter(): number;
        
        /**
         * Sets the center coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} center The center coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setCenter(center: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The distance from the top edge of this element to the top
         *     edge of its parent, specified in units of the parent's coordinate system.
         */
        getTop(): number;
        
        /**
         * Sets the top coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element.
         * @param {string|number} top The top coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setTop(top: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The bottom coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getBottom(): number;
        
        /**
         * Sets the bottom coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element.
         * @param {string|number} bottom The bottom coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setBottom(bottom: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The middle coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getMiddle(): number;
        
        /**
         * Sets the middle coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element
         * @param {string|number} middle The middle coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setMiddle(middle: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The width of the element, in units of the parent's
         *     coordinate system.
         */
        getWidth(): number;
        
        /**
         * Sets the width of the element.
         * @param {string|number} width The new width value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setWidth(width: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The minimum width of the element, in units of the parent's
         *     coordinate system.
         */
        getMinWidth(): number;
        
        /**
         * Sets the minimum width of the element.
         * @param {string|number} minWidth The minimum width of the element.
         */
        setMinWidth(minWidth: string|number): void;
        
        /**
         * @return {number} The height of the element, in units of the parent's
         *     coordinate system.
         */
        getHeight(): number;
        
        /**
         * Sets the height of the element.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setHeight(height: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} The minimum height of the element, in units of the parent's
         *     coordinate system.
         */
        getMinHeight(): number;
        
        /**
         * Sets the minimum height of the element.
         * @param {string|number} minHeight The minimum height of the element.
         */
        setMinHeight(minHeight: string|number): void;
        
        /**
         * Shortcut for setting the left and top position.
         * @param {string|number} left The left coordinate.
         * @param {string|number} top The top coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setPosition(left: string|number, top: string|number, opt_chain?: boolean): void;
        
        /**
         * Shortcut for setting the width and height.
         * @param {string|number} width The new width value.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setSize(width: string|number, height: string|number, opt_chain?: boolean): void;
        
        /**
         * Shortcut for setting the left, top, width, and height.
         * @param {string|number} left The left coordinate.
         * @param {string|number} top The top coordinate.
         * @param {string|number} width The new width value.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setBounds(left: string|number, top: string|number, width: string|number, height: string|number, opt_chain?: boolean): void;
        
        /**
         * @return {number} An estimate of the maximum x extent this element would have
         *     in a parent of no width.
         */
        getMaxX(): number;
        
        /**
         * @return {number} An estimate of the maximum y extent this element would have
         *     in a parent of no height.
         */
        getMaxY(): number;
        
        /**
         * Reset the element.  This is called when the element changes size, or when
         * the coordinate system changes in a way that would affect pixel based
         * rendering
         */
        reset(): void;
        
        /**
         * Overridable function for subclass specific reset.
         * @protected
         */
        redraw(): void;
        
        /**
         * Returns whether this element's bounds depend on its parents.
         *
         * This function should be treated as if it has package scope.
         * @return {boolean} Whether this element's bounds depend on its parents.
         */
        isParentDependent(): boolean;
        
        /**
         * Overridable function for subclass specific parent dependency.
         * @return {boolean} Whether this shape's bounds depends on its parent's.
         * @protected
         */
        checkParentDependent(): boolean;
        
        /**
         * Set the rotation of this element.
         * @param {number} angle The angle of rotation, in degrees.
         */
        setRotation(angle: number): void;
        
        /**
         * @return {number} The angle of rotation of this element, in degrees.
         */
        getRotation(): number;
        
        /**
         * Called by the parent when the parent has transformed.
         *
         * Should be treated as package scope.
         */
        parentTransform(): void;
        
        /**
         * @return {boolean} Whether this element has pending transforms.
         */
        isPendingTransform(): boolean;
        
        /**
         * Performs a pending transform.
         * @protected
         */
        transform(): void;
        
        /**
         * @return {number} Returns the number of pixels per unit in the x direction.
         */
        getPixelScaleX(): number;
        
        /**
         * @return {number} Returns the number of pixels per unit in the y direction.
         */
        getPixelScaleY(): number;
    }
}

declare module goog.graphics.ext.Element {

    /**
     * Position specification types.  Start corresponds to left/top, middle to
     * center/middle, and end to right/bottom.
     * @enum {number}
     * @private
     */
    type PositionType_ = number;
    var PositionType_: {
        START: PositionType_;
        MIDDLE: PositionType_;
        END: PositionType_;
    };

    /**
     * Manages a position and size, either horizontal or vertical.
     * @param {goog.graphics.ext.Element} element The element the position applies
     *     to.
     * @param {boolean} horizontal Whether the position is horizontal or vertical.
     * @constructor
     * @private
     */
    interface Position_ {
        
        /**
         * @return {number} The minimum width/height of the element.
         */
        getMinSize(): number;
        
        /**
         * Sets the minimum width/height of the element.
         * @param {string|number} minSize The minimum width/height of the element.
         */
        setMinSize(minSize: string|number): void;
        
        /**
         * @return {number} The width/height of the element.
         */
        getSize(): number;
        
        /**
         * Sets the width/height of the element.
         * @param {string|number} size The width/height of the element.
         * @return {boolean} Whether the value was changed.
         */
        setSize(size: string|number): boolean;
        
        /**
         * @return {number} The distance from the left/top edge of this element to the
         *     left/top edge of its parent, specified in units of the parent's
         *     coordinate system.
         */
        getStart(): number;
        
        /**
         * @return {number} The middle coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getMiddle(): number;
        
        /**
         * @return {number} The end coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getEnd(): number;
        
        /**
         * Sets the position, either as a left/top, center/middle, or right/bottom
         * value.
         * @param {number|string} value The value of the coordinate.
         * @param {goog.graphics.ext.Element.PositionType_} type The type of the
         *     coordinate.
         */
        setPosition(value: number|string, type: goog.graphics.ext.Element.PositionType_): void;
        
        /**
         * @return {number} An estimate of the maximum x/y extent this element would
         *     have in a parent of no width/height.
         */
        getMaxPosition(): number;
        
        /**
         * Resets the caches of position values and coordinate values.
         */
        resetCache(): void;
        
        /**
         * @return {boolean} Whether the size or position of this element depends on
         *     the size of the parent element.
         */
        isParentDependent(): boolean;
    }
}
