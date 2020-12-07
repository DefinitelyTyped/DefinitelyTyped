import { SharePointQueryable } from "./sharepointqueryable";
export interface RelatedItem {
    ListId: string;
    ItemId: number;
    Url: string;
    Title: string;
    WebId: string;
    IconUrl: string;
}
export interface RelatedItemManger {
    getRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
    getPageOneRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
    addSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemID: number, targetWebUrl: string, tryAddReverseLink?: boolean): Promise<void>;
    /**
     * Adds a related item link from an item specified by list name and item id, to an item specified by url
     *
     * @param sourceListName The source list name or list id
     * @param sourceItemId The source item id
     * @param targetItemUrl The target item url
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    addSingleLinkToUrl(sourceListName: string, sourceItemId: number, targetItemUrl: string, tryAddReverseLink?: boolean): Promise<void>;
    /**
     * Adds a related item link from an item specified by url, to an item specified by list name and item id
     *
     * @param sourceItemUrl The source item url
     * @param targetListName The target list name or list id
     * @param targetItemId The target item id
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    addSingleLinkFromUrl(sourceItemUrl: string, targetListName: string, targetItemId: number, tryAddReverseLink?: boolean): Promise<void>;
    deleteSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemId: number, targetWebUrl: string, tryDeleteReverseLink?: boolean): Promise<void>;
}
export declare class RelatedItemManagerImpl extends SharePointQueryable implements RelatedItemManger {
    static FromUrl(url: string): RelatedItemManagerImpl;
    getRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
    getPageOneRelatedItems(sourceListName: string, sourceItemId: number): Promise<RelatedItem[]>;
    addSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemID: number, targetWebUrl: string, tryAddReverseLink?: boolean): Promise<void>;
    /**
     * Adds a related item link from an item specified by list name and item id, to an item specified by url
     *
     * @param sourceListName The source list name or list id
     * @param sourceItemId The source item id
     * @param targetItemUrl The target item url
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    addSingleLinkToUrl(sourceListName: string, sourceItemId: number, targetItemUrl: string, tryAddReverseLink?: boolean): Promise<void>;
    /**
     * Adds a related item link from an item specified by url, to an item specified by list name and item id
     *
     * @param sourceItemUrl The source item url
     * @param targetListName The target list name or list id
     * @param targetItemId The target item id
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    addSingleLinkFromUrl(sourceItemUrl: string, targetListName: string, targetItemId: number, tryAddReverseLink?: boolean): Promise<void>;
    deleteSingleLink(sourceListName: string, sourceItemId: number, sourceWebUrl: string, targetListName: string, targetItemId: number, targetWebUrl: string, tryDeleteReverseLink?: boolean): Promise<void>;
}
