import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { MenuNodeCollection } from "./types";
import { TypedHash } from "@pnp/common";
/**
 * Result from adding a navigation node
 *
 */
export interface NavigationNodeAddResult {
    data: any;
    node: NavigationNode;
}
/**
 * Represents a collection of navigation nodes
 *
 */
export declare class NavigationNodes extends SharePointQueryableCollection {
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    getById(id: number): NavigationNode;
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    add(title: string, url: string, visible?: boolean): Promise<NavigationNodeAddResult>;
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    moveAfter(nodeId: number, previousNodeId: number): Promise<void>;
}
/**
 * Represents an instance of a navigation node
 *
 */
export declare class NavigationNode extends SharePointQueryableInstance {
    /**
     * Represents the child nodes of this node
     */
    readonly children: NavigationNodes;
    /**
     * Deletes this node and any child nodes
     */
    delete(): Promise<void>;
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    update(properties: TypedHash<string | number | boolean>): Promise<NavNodeUpdateResult>;
}
export interface NavNodeUpdateResult {
    data: any;
    node: NavigationNode;
}
/**
 * Exposes the navigation components
 *
 */
export declare class Navigation extends SharePointQueryable {
    /**
     * Gets the quicklaunch navigation nodes for the current context
     *
     */
    readonly quicklaunch: NavigationNodes;
    /**
     * Gets the top bar navigation nodes for the current context
     *
     */
    readonly topNavigationBar: NavigationNodes;
}
export interface INavigationService {
    getMenuState(menuNodeKey?: string, depth?: number, mapProviderName?: string, customProperties?: string): Promise<MenuNodeCollection>;
    getMenuNodeKey(currentUrl: string, mapProviderName?: string): Promise<string>;
}
/**
 * Represents the top level navigation service
 */
export declare class NavigationService extends SharePointQueryable implements INavigationService {
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    getMenuState(menuNodeKey?: string, depth?: number, mapProviderName?: string, customProperties?: string): Promise<MenuNodeCollection>;
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    getMenuNodeKey(currentUrl: string, mapProviderName?: string): Promise<string>;
}
