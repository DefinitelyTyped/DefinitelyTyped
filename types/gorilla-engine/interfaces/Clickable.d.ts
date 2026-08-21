declare namespace GorillaEngine.UI {
    /**
     * Describes an element that can respond to mouse clicks and other pointer interactions.
     */
    interface Clickable {
        /**
         * Indicates whether the component processes mouse events directly.
         */
        interceptsMouseClicks: boolean;

        /**
         * Determines if child components can process mouse events.
         */
        allowClicksOnChildren: boolean;

        /**
         * Defines the action to be triggered when a click occurs with a modifier key (e.g., Shift or Ctrl).
         */
        modifiedClickAction: string;

        /**
         * Specifies the action to be executed on a double-click event. (Requires ViewModel support)
         */
        doubleClickAction: string;

        /**
         * The action to be performed when the mouse pointer enters the control's area.
         */
        mouseEnterAction: string;

        /**
         * The action to be performed when the mouse pointer exits the control's area.
         */
        mouseExitAction: string;

        /**
         * An optional bitmask that defines the clickable region within the control.
         */
        clickMask: string;

        /**
         * Specifies the type of mouse cursor displayed when the pointer hovers over the control.
         */
        mouseCursorType:
            | "none"
            | "normal"
            | "wait"
            | "IBeam"
            | "cross hair"
            | "copying"
            | "pointing hand"
            | "dragging hand"
            | "left right resize"
            | "up down resize"
            | "up down left right resize"
            | "top edge resize"
            | "bottom edge resize"
            | "left edge resize"
            | "right edge resize"
            | "top left corner resize"
            | "top right corner resize"
            | "bottom left corner resize"
            | "bottom right corner resize";
    }
}
