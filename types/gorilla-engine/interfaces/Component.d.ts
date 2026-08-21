declare namespace GorillaEngine.UI {
    abstract class Component {
        id: string;
        children: Component[];
        parent: Component;
        on(event: string, handler: any): void;
        appendChild(child: Component): void;
        removeChild(child: Component): void;
        insertBefore(child: Component, beforeChild: Component): void;
    }
}
