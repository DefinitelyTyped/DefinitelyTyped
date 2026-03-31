declare namespace GorillaEngine.UI {
    /**
     * Margin interface for Gorilla Engine UI.
     * Configures the positioning of the text element inside the components container. Provides more precise text alignment than the `textAlign` property.
     */
    interface Margin {
        /**
         * Defines the margin properties that can be applied to UI elements.
         */
        margin: number | {
            /**The default margin for sides not explicitly set. */
            other: number;
            /** The margin on the left side.*/
            left: number;
            /** The margin on the top side.*/
            top: number;
            /** The margin on the right side.*/
            right: number;
            /** The margin on the bottom side.*/
            bottom: number;
        };
    }
}
