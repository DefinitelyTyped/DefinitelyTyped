declare namespace GorillaEngine.UI {
    /** Base class for controls in the Gorilla Engine UI component tree. */
    abstract class Component {
        /** Unique identifier used to look up the component. */
        id: string;
        /** Components directly contained by this component. */
        children: Component[];
        /** Component that contains this component. */
        parent: Component;
        /** Registers a handler for an event emitted by the component. */
        on(event: string, handler: any): void;
        /** Adds a component after the existing children. */
        appendChild(child: Component): void;
        /** Removes a direct child component. */
        removeChild(child: Component): void;
        /** Inserts a component immediately before another direct child. */
        insertBefore(child: Component, beforeChild: Component): void;
    }
}
