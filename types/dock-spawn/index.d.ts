// Type definitions for Dock Spawn
// Project: https://github.com/coderespawn/dock-spawn
// Definitions by: Drew Noakes <https://drewnoakes.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dockspawn
{
    /**
     * Dock manager manages all the dock panels in a hierarchy, similar to Visual Studio.
     * It owns an HTMLDivElement inside which all panels are docked.
     * Initially the document manager takes up the central space and acts as the root node.
     */
    class DockManager
    {
        context: DockManagerContext;

        constructor(element: HTMLDivElement);

        initialize(): void;

        rebuildLayout(node: DockNode): void;

        invalidate(): void;

        resize(width: number, height: number): void;

        /**
         * Reset the dock model. This happens when state is loaded from JSON.
         */
        setModel(model: DockModel): void;

        setRootNode(node: DockNode): void;


        /** Dock the [dialog] to the left of the [referenceNode] node */

        dockDialogLeft(referenceNode: DockNode, dialog: Dialog): DockNode;
        /** Dock the [dialog] to the right of the [referenceNode] node */
        dockDialogRight(referenceNode: DockNode, dialog: Dialog): DockNode;
        /** Dock the [dialog] above the [referenceNode] node */
        dockDialogUp(referenceNode: DockNode, dialog: Dialog): DockNode;
        /** Dock the [dialog] below the [referenceNode] node */
        dockDialogDown(referenceNode: DockNode, dialog: Dialog): DockNode;
        /** Dock the [dialog] as a tab inside the [referenceNode] node */
        dockDialogFill(referenceNode: DockNode, container: PanelContainer): DockNode;

        /** Dock the [container] to the left of the [referenceNode] node */
        dockLeft(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
        /** Dock the [container] to the right of the [referenceNode] node */
        dockRight(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
        /** Dock the [container] above the [referenceNode] node */
        dockUp(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
        /** Dock the [container] below the [referenceNode] node */
        dockDown(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
        /** Dock the [container] as a tab inside the [referenceNode] node */
        dockFill(referenceNode: DockNode, container: PanelContainer): DockNode;

        suspendLayout(): void;

        resumeLayout(): void;

        saveState(): string;
        loadState(state: string): void;
    }

    class DockManagerContext
    {
        dockManager: DockManager;
        model: DockModel;
        documentManagerView: DocumentManagerContainer;

        constructor(dockManager: DockManager);
    }

    class DockModel
    {
        rootNode: DockNode;
        documentManagerNode: DockNode;
    }

    class DockNode
    {
        constructor(container: PanelContainer);

        detachFromParent(): void;
    }

    /**
     * Tab Host control contains tabs known as TabPages.
     * The tab strip can be aligned in different orientations
     */
    class TabHost
    {
        tabStripDirection: TabStripDirection;
        displayCloseButton: boolean;
        pages: TabPage[];
        hostElement: HTMLDivElement;
        tabListElement: HTMLDivElement;
        separatorElement: HTMLDivElement;
        contentElement: HTMLDivElement;

        constructor(tabStripDirection?: TabStripDirection, displayCloseButton?: boolean)

        setActiveTab(container: PanelContainer): void;

        /** Set the selected TabPage. */
        onTabPageSelected(page: TabPage): void;

        resize(width: number, height: number): void;
    }

    class TabPage
    {
        constructor(host: TabHost, container: PanelContainer);
    }

    enum TabStripDirection
    {
        DIRECTION_TOP = 0,
        DIRECTION_BOTTOM = 1,
        DIRECTION_LEFT = 2,
        DIRECTION_RIGHT = 3
    }

    class FillDockContainer
    {
        tabOrientation: TabStripDirection;
        element: HTMLDivElement;
        tabHost: TabHost;
        dockManager: DockManager;
        name: string;
        containerType: string;
        minimumAllowedChildNodes: number;

        constructor(dockManager: DockManager, tabStripDirection?: TabStripDirection)
    }

    /**
     * The document manager is then central area of the dock layout hierarchy.
     * This is where more important panels are placed (e.g. the text editor in an IDE,
     * 3D view in a modelling package etc
     */
    class DocumentManagerContainer extends FillDockContainer
    {
        selectedTab: TabPage;

        constructor(dockManager: DockManager);

        saveState(state: string): void;
    }

    class PanelContainer
    {
        width: number;
        height: number;

        constructor(element: HTMLElement, dockManager: DockManager, title?: string);

        setTitle(title: string): void;
        setTitleIcon(iconName: string): void;
    }

    class Dialog
    {
        static fromElement(id: string, dockManager: DockManager): Dialog;

        constructor(panel: PanelContainer, dockManager: DockManager);

        setPosition(x: number, y: number): void;

        resize(width: number, height: number): void;

        setTitle(title: string): void;

        setTitleIcon(iconName: string): void;

        bringToFront(): void;
    }
}
