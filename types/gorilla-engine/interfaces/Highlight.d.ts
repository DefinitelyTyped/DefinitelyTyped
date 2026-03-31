declare namespace GorillaEngine.UI {
    /**
     * Highlight interface for Gorilla Engine UI.
     * This draws an automation highlight on knobs, Combobox, Toggle and listbox controls. Currently only works for AAX plugins.
     * Note you will have to turn on this feature by setting AAXEnableParameterHighlighting in the .ugep file
     */
    interface Highlight {
        highlight: {
            /**
             * If this is set to true the highlight will be a filled circle else it will be a rectangle boundary
             */
            drawFilledCircle: boolean;
            /**
             * This determines the width of the line used to draw the highlight
             */
            lineWidth: number;
            /**
             * The x coordinate on where to draw the highlight within the control
             */
            x: number;
            /**
             * The y coordinate on where to draw the highlight within the control
             */
            y: number;
            /**
             * The highlight width. Note if this is zero or less the bounds used to draw the highlight will be the control bounds
             */
            width: number;
            /**
             * The highlight height. Note if this is zero or less the bounds used to draw the highlight will be the control bounds
             */
            height: number;
        };
    }
}
