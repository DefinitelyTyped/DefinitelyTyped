import { SPConfiguration } from "@pnp/sp";
import { ClientSvcQueryable, IObjectPathBatch } from "@pnp/sp-clientsvc";
import { ITermStore, ITermStores } from "./termstores";
/**
 * Defines the publicly visible members of Taxonomy
 */
export interface ITaxonomySession {
    /**
     * The collection of term stores
     */
    termStores: ITermStores;
    /**
     * Provides access to sp.setup from @pnp/sp
     *
     * @param config Configuration
     */
    setup(config: SPConfiguration): void;
    /**
     * Creates a new batch
     */
    createBatch(): IObjectPathBatch;
    /**
     * Gets the default keyword termstore for this session
     */
    getDefaultKeywordTermStore(): ITermStore;
    /**
     * Gets the default site collection termstore for this session
     */
    getDefaultSiteCollectionTermStore(): ITermStore;
}
/**
 * The root taxonomy object
 */
export declare class Session extends ClientSvcQueryable implements ITaxonomySession {
    constructor(webUrl?: string);
    /**
     * The collection of term stores
     */
    readonly termStores: ITermStores;
    /**
     * Provides access to sp.setup from @pnp/sp
     *
     * @param config Configuration
     */
    setup(config: SPConfiguration): void;
    /**
     * Creates a new batch
     */
    createBatch(): IObjectPathBatch;
    /**
     * Gets the default keyword termstore for this session
     */
    getDefaultKeywordTermStore(): ITermStore;
    /**
     * Gets the default site collection termstore for this session
     */
    getDefaultSiteCollectionTermStore(): ITermStore;
}
