declare namespace GorillaEngine.UI {
    /**
     * KeyboardFocus interface for Gorilla Engine UI.
     * Defines how a cotrol appears when it has the keyboard focus
     */
    interface KeyboardFocus {
        keyboardFocus: {
            /**
             * Defines the color of the focus border.
             */
            color?: string;
            /**
             * Defines the line width of the focus border.
             */
            lineWidth?: number;
            /**
             * Defines the corner radius of the focus border.
             */
            cornerRadius?: number;
        };
    }
}
