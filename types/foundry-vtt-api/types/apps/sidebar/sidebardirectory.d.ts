/**
 * A shared pattern for the sidebar directory which Actors, Items, and Scenes all use
 */
declare class SidebarDirectory extends SidebarTab {
    /**
     * References to the set of Entities which are displayed in the Sidebar
     */
    entities: Entity[];

    /**
     * Reference the set of Folders which exist in this Sidebar
     */
    folders: Folder[];

    /**
     * The search string currently being filtered for
     */
    searchString: string;

    initialize(): void;

    /**
     * Given an entity type and a list of entities, set up the folder tree for that entity
     * @param folders	The Array of Folder objects to organize
     * @param entities	The Array of Entity objects to organize
     * @param sortMode	How should entities or Folders be sorted? (a)lphabetic or (n)umeric
     * @return			A tree structure containing the folders and entities
     */
    static setupFolders(
        folders: Folder[],
        entities: Entity[],
        sortMode: string,
    ): { root: boolean; content: Entity[]; children: any[] };

    static get entity(): Entity;

    static get entityLower(): Entity;

    static get collection(): Collection<Entity>;

    /**
     * When rendering a SidebarDirectory, check the render context to rebuild the tree structure if needed
     */
    render(force?: boolean, options?: RenderOptions): SidebarDirectory;

    /**
     * Collapse all subfolders in this directory
     */
    collapseAll(): void;
}
