import { _SharePointQueryableInstance, _SharePointQueryableCollection, _SharePointQueryable, IDeleteable } from "../sharepointqueryable";
/**
 * Represents a collection of navigation nodes
 *
 */
export declare class _NavigationNodes extends _SharePointQueryableCollection<INavNodeInfo[]> {
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    getById(id: number): INavigationNode;
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    add(title: string, url: string, visible?: boolean): Promise<INavigationNodeAddResult>;
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    moveAfter(nodeId: number, previousNodeId: number): Promise<void>;
}
export interface INavigationNodes extends _NavigationNodes {
}
export declare const NavigationNodes: import("../sharepointqueryable").ISPInvokableFactory<INavigationNodes>;
/**
 * Represents an instance of a navigation node
 *
 */
export declare class _NavigationNode extends _SharePointQueryableInstance<INavNodeInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Represents the child nodes of this node
     */
    get children(): INavigationNodes;
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    update(properties: Partial<INavNodeInfo>): Promise<INavNodeUpdateResult>;
}
export interface INavigationNode extends _NavigationNode, IDeleteable {
}
export declare const NavigationNode: import("../sharepointqueryable").ISPInvokableFactory<INavigationNode>;
export interface INavNodeUpdateResult {
    data: any;
    node: INavigationNode;
}
/**
 * Exposes the navigation components
 *
 */
export declare class _Navigation extends _SharePointQueryable {
    /**
     * Gets the quicklaunch navigation nodes for the current context
     *
     */
    get quicklaunch(): INavigationNodes;
    /**
     * Gets the top bar navigation nodes for the current context
     *
     */
    get topNavigationBar(): INavigationNodes;
}
export interface INavigation {
    readonly quicklaunch: INavigationNodes;
    readonly topNavigationBar: INavigationNodes;
}
export declare const Navigation: import("../sharepointqueryable").ISPInvokableFactory<INavigation>;
/**
 * Represents the top level navigation service
 */
export declare class _NavigationService extends _SharePointQueryable {
    constructor(path?: string);
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    getMenuState(menuNodeKey?: string, depth?: number, mapProviderName?: string, customProperties?: string): Promise<IMenuNodeCollection>;
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    getMenuNodeKey(currentUrl: string, mapProviderName?: string): Promise<string>;
}
export interface INavigationService extends _NavigationService {
}
export declare const NavigationService: (path?: string) => INavigationService;
export interface IMenuNode {
    CustomProperties: any[];
    FriendlyUrlSegment: string;
    IsDeleted: boolean;
    IsHidden: boolean;
    Key: string;
    Nodes: IMenuNode[];
    NodeType: number;
    SimpleUrl: string;
    Title: string;
}
export interface IMenuNodeCollection {
    FriendlyUrlPrefix: string;
    Nodes: IMenuNode[];
    SimpleUrl: string;
    SPSitePrefix: string;
    SPWebPrefix: string;
    StartingNodeKey: string;
    StartingNodeTitle: string;
    Version: Date;
}
export interface ISerializableNavigationNode {
    Id: number;
    Title: string;
    Url: string;
    IsDocLib: boolean;
    IsExternal: boolean;
    ParentId: number;
    ListTemplateType: number;
    AudienceIds: string[];
    Children: ISerializableNavigationNode[];
}
/**
 * Result from adding a navigation node
 *
 */
export interface INavigationNodeAddResult {
    data: INavNodeInfo;
    node: INavigationNode;
}
/**
 * Represents the information describing a navigation node
 */
export interface INavNodeInfo {
    AudienceIds: string[] | null;
    Id: number;
    IsDocLib: boolean;
    IsExternal: boolean;
    IsVisible: boolean;
    ListTemplateType: number;
    Title: string;
    Url: string;
}
//# sourceMappingURL=types.d.ts.map