declare namespace GorillaEngine.UI {
    /**
     * TODO::
     * Margin interface for Gorilla Engine UI.
     * I don't even know if this works
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
