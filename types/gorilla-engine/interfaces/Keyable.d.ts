declare namespace GorillaEngine.UI {
    /**
     * Key Event interface for Gorilla Engine UI.
     * This interface handles key press actions and event consumption.
     */
    interface Keyable {
        /**
         * TODO:: THIS has to be a callback function rather than a string for a view model
         */
        keyPressAction: string;
        consumeEvent: boolean;
    }
}
