import Resource from './resource';
import { CollectionSortKeys, ID } from './storefront/graphql';
import { Collection } from './storefront/products';

export default class CollectionResource extends Resource {
    /**
     * Fetches all collections on the shop, not including products.
     * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
     */
    fetchAll(first?: number): Promise<Collection[]>;

    /**
     * Fetches all collections on the shop, including products.
     */
    fetchAllWithProducts(options?: { first?: number; productsFirst?: number }): Promise<Collection[]>;

    /**
     * Fetches a single collection by ID on the shop, not including products.
     * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
     */
    fetch(id: ID): Promise<Collection>;

    /**
     * Fetches a single collection by ID on the shop, including products.
     */
    fetchWithProducts(id: ID, options?: { productsFirst?: number }): Promise<Collection>;

    /**
     * Fetches a collection by handle on the shop.
     */
    fetchByHandle(handle: string): Promise<Collection>;

    /**
     * Fetches all collections on the shop that match the query.
     */
    fetchQuery(options?: {
        first?: number;
        sortKey?: CollectionSortKeys;
        query?: string;
        reverse?: boolean;
    }): Promise<Collection[]>;
}
