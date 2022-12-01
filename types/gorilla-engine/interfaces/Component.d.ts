declare namespace GorillaEngine.UI {
    abstract class Component {
        id: string;
        children: Component[];
        parent: Component;
        on(event: string, handler);
        appendChild(child: Component);
        removeChild(child: Component);
        insertBefore(child: Component, beforeChild: Component);
    }
}
