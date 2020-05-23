/**
 * An abstract pattern followed by the different tabs of the sidebar
 */
declare class SidebarTab extends Application {
    /**
     * Only close the pop-out version of the sidebar tab
     */
    close(): any;

    /**
     * Render the SidebarTab as a pop-out container
     */
    static renderPopout(original: SidebarTab): void;
}
