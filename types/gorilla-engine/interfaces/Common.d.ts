declare namespace GorillaEngine.UI {
    interface Common {
        /**
         * A unique identifier for the component. This ID is needed for referencing
         * and managing the component within the application's hierarchy.
         */
        id: string;
        /**
         * Controls the visibility of the component. If set to `false`, the component
         * will not be rendered.
         */
        visible: boolean;
        /**
         * Determines if the component is active. If `false`, the component
         * will not respond to user input (e.g., clicks, keyboard events) but may still be visible.
         */
        enabled: boolean;
        /**
         * Indicates whether the component requests keyboard focus when it becomes active or is
         * programmatically highlighted. This is important for keyboard navigation and input.
         */
        wantsKeyboardFocus: boolean;
        /**
         * If `true`, a mouse click on this component will automatically
         * transfer keyboard focus to it, allowing for immediate keyboard interaction.
         */
        clickGrabsKeyboardFocus: boolean;
        /**
         * Sets the opacity level of the component, ranging from `0.0` (fully transparent)
         * to `1.0` (fully opaque).
         */
        alpha: number;
        /**
         * If `true`, the component will always be rendered on top of other components
         * within the same stacking context, regardless of their Z-order.
         */
        alwaysOnTop: boolean;
    }
}
