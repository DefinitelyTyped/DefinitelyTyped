import BaseComponent from "./base-component";

declare class Alert extends BaseComponent {
    static NAME: "alert";
    static jQueryInterface: Alert.jQueryInterface;

    /**
     * Closes an alert by removing it from the DOM. If the .fade and .show
     * classes are present on the element, the alert will fade out before it
     * is removed.
     */
     close(): void;

     /**
      * Destroys an element's alert. (Removes stored data on the DOM element)
      */
     dispose(): void;

     /**
     * Static method which allows you to get the alert instance associated to a
     * DOM element, you can use it like this: getInstance(alert)
     */
    static getInstance(element: Element): Alert | null;

    /**
     * Static method which returns an alert instance associated to a DOM element 
     *  or create a new one in case it wasn't initialised. 
     * You can use it like this: bootstrap.Alert.getOrCreateInstance(element)
     */
    static getOrCreateInstance(element: Element): Alert | null;
}

declare namespace Alert {
    enum Events {
        /**
         * Fires immediately when the close instance method is called.
         */
        close = "close.bs.alert",

        /**
         * Fired when the alert has been closed and CSS transitions have
         * completed.
         */
        closed = "closed.bs.alert",
    }

    type jQueryInterface = (config?: "close" | "dispose") => void;
}

export default Alert;
