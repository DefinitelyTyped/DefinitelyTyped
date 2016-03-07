declare module goog {
    function require(name: 'goog.ui.SplitPane'): typeof goog.ui.SplitPane;
    function require(name: 'goog.ui.SplitPane.Orientation'): typeof goog.ui.SplitPane.Orientation;
}

declare module goog.ui {

    /**
     * A left/right up/down Container SplitPane.
     * Create SplitPane with two goog.ui.Component opjects to split.
     * TODO(user): Support minimum splitpane size.
     * TODO(user): Allow component change/orientation after init.
     * TODO(user): Support hiding either side of handle (plus handle).
     * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
     *
     * @param {goog.ui.Component} firstComponent Left or Top component.
     * @param {goog.ui.Component} secondComponent Right or Bottom component.
     * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class SplitPane extends goog.ui.Component {
        constructor(firstComponent: goog.ui.Component, secondComponent: goog.ui.Component, orientation: goog.ui.SplitPane.Orientation, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Determines if a given element can be decorated by this type of component.
         * @param {Element} element Element to decorate.
         * @return {boolean} True if the element can be decorated, false otherwise.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Decorates the given HTML element as a SplitPane.  Overrides {@link
         * goog.ui.Component#decorateInternal}.  Considered protected.
         * @param {Element} element Element (SplitPane div) to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Sets the initial size of the left or top component.
         * @param {number} size The size in Pixels of the container.
         */
        setInitialSize(size: number): void;
        
        /**
         * Sets the SplitPane handle size.
         * TODO(user): Make sure this works after initialization.
         * @param {number} size The size of the handle in pixels.
         */
        setHandleSize(size: number): void;
        
        /**
         * Sets whether we resize on handle drag.
         * @param {boolean} continuous The continuous resize value.
         */
        setContinuousResize(continuous: boolean): void;
        
        /**
         * Returns whether the orientation for the split pane is vertical
         * or not.
         * @return {boolean} True if the orientation is vertical, false otherwise.
         */
        isVertical(): boolean;
        
        /**
         * Sets the orientation class for the split pane handle.
         * @protected
         */
        setOrientationClassForHandle(): void;
        
        /**
         * Sets the orientation of the split pane.
         * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
         */
        setOrientation(orientation: goog.ui.SplitPane.Orientation): void;
        
        /**
         * Gets the orientation of the split pane.
         * @return {goog.ui.SplitPane.Orientation} The orientation.
         */
        getOrientation(): goog.ui.SplitPane.Orientation;
        
        /**
         * @return {?number} The size of the left/top component.
         */
        getFirstComponentSize(): number;
        
        /**
         * Set the size of the left/top component, and resize the other component based
         * on that size and handle size.
         * @param {?number=} opt_size The size of the top or left, in pixels. If
         *     unspecified, leaves the size of the first component unchanged but adjusts
         *     the size of the second component to fit the split pane size.
         */
        setFirstComponentSize(opt_size?: number): void;
        
        /**
         * Set the size of the splitpane.  This is usually called by the controlling
         * application.  This will set the SplitPane BorderBoxSize.
         * @param {!goog.math.Size} size The size to set the splitpane.
         * @param {?number=} opt_firstComponentSize The size of the top or left
         *     component, in pixels.
         */
        setSize(size: goog.math.Size, opt_firstComponentSize?: number): void;
    }
}

declare module goog.ui.SplitPane {

    /**
     * Events.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
    };

    /**
     * Z indices for iframe overlay and splitter handle.
     * @enum {number}
     * @private
     */
    type IframeOverlayIndex_ = number;
    var IframeOverlayIndex_: {
        HIDDEN: IframeOverlayIndex_;
        OVERLAY: IframeOverlayIndex_;
        SPLITTER_HANDLE: IframeOverlayIndex_;
    };

    /**
    * Orientation values for the splitpane.
    * @enum {string}
    */
    type Orientation = string;
    var Orientation: {
        HORIZONTAL: Orientation;
        VERTICAL: Orientation;
    };
}
