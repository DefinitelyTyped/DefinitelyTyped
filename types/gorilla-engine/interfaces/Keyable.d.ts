declare namespace GorillaEngine.UI {
    /**
     * Key Event interface for Gorilla Engine UI.
     * This interface handles key press actions and event consumption.
     */
    interface Keyable {
        /**
         *  String that represents an action in a view model.
         */
        keyPressAction: string;
        consumeEvent: boolean;
    }
}
