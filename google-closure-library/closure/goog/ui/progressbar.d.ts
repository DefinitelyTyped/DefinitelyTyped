declare module goog {
    function require(name: 'goog.ui.ProgressBar'): typeof goog.ui.ProgressBar;
    function require(name: 'goog.ui.ProgressBar.Orientation'): typeof goog.ui.ProgressBar.Orientation;
}

declare module goog.ui {

    /**
     * This creates a progress bar object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ProgressBar extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Decorates an existing HTML DIV element as a progress bar input. If the
         * element contains a child with a class name of 'progress-bar-thumb' that will
         * be used as the thumb.
         * @param {Element} element  The HTML element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * @return {number} The value.
         */
        getValue(): number;
        
        /**
         * Sets the value
         * @param {number} v The value.
         */
        setValue(v: number): void;
        
        /**
         * @return {number} The minimum value.
         */
        getMinimum(): number;
        
        /**
         * Sets the minimum number
         * @param {number} v The minimum value.
         */
        setMinimum(v: number): void;
        
        /**
         * @return {number} The maximum value.
         */
        getMaximum(): number;
        
        /**
         * Sets the maximum number
         * @param {number} v The maximum value.
         */
        setMaximum(v: number): void;
        
        /**
         * Changes the orientation
         * @param {goog.ui.ProgressBar.Orientation} orient The orientation.
         */
        setOrientation(orient: goog.ui.ProgressBar.Orientation): void;
        
        /**
         * @return {goog.ui.ProgressBar.Orientation} The orientation of the
         *     progress bar.
         */
        getOrientation(): goog.ui.ProgressBar.Orientation;
        
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
    }
}

declare module goog.ui.ProgressBar {

    /**
     * Enum for representing the orientation of the progress bar.
     *
     * @enum {string}
     */
    type Orientation = string;
    var Orientation: {
        VERTICAL: Orientation;
        HORIZONTAL: Orientation;
    };
}
