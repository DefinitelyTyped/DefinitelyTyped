declare namespace GorillaEngine.UI {
    /**
     * TODO::
     * Margin interface for Gorilla Engine UI.
     * Configures the positioning of the text element inside the components container. Provides more precise text alignment than the `textAlign` property.
     */
    interface Margin {
        /**
         * Defines the margin properties that can be applied to UI elements.
         */
        margin: number | {
            other: number;
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
    }
}
