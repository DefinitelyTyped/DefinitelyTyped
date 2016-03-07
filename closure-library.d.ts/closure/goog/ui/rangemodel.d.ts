declare module goog {
    function require(name: 'goog.ui.RangeModel'): typeof goog.ui.RangeModel;
}

declare module goog.ui {

    /**
     * Creates a range model
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class RangeModel extends goog.events.EventTarget {
        constructor();
        
        /**
         * Sets the model to mute / unmute.
         * @param {boolean} muteValue Whether or not to mute the range, i.e.,
         *     suppress any CHANGE events.
         */
        setMute(muteValue: boolean): void;
        
        /**
         * Sets the value.
         * @param {number} value The new value.
         */
        setValue(value: number): void;
        
        /**
         * @return {number} the current value.
         */
        getValue(): number;
        
        /**
         * Sets the extent. The extent is the 'size' of the value.
         * @param {number} extent The new extent.
         */
        setExtent(extent: number): void;
        
        /**
         * @return {number} The extent for the range model.
         */
        getExtent(): number;
        
        /**
         * Sets the minimum
         * @param {number} minimum The new minimum.
         */
        setMinimum(minimum: number): void;
        
        /**
         * @return {number} The minimum value for the range model.
         */
        getMinimum(): number;
        
        /**
         * Sets the maximum
         * @param {number} maximum The new maximum.
         */
        setMaximum(maximum: number): void;
        
        /**
         * @return {number} The maximimum value for the range model.
         */
        getMaximum(): number;
        
        /**
         * Returns the step value. The step value is used to determine how to round the
         * value.
         * @return {?number} The maximimum value for the range model.
         */
        getStep(): number;
        
        /**
         * Sets the step. The step value is used to determine how to round the value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
        
        /**
         * Rounds to the closest step using the minimum value as the base.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStepWithMin(value: number): number;
        
        /**
         * Rounds to the closest step.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStep(value: number): number;
    }
}
