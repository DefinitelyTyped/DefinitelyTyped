import Resource from './resource';
import { ID, ProductSortKeys } from './storefront/graphql';
import { Product } from './storefront/products';

export default class ProductResource extends Resource {
    /**
     * Fetches all products on the shop.
     */
    fetchAll(first?: number): Promise<Product[]>;

    /**
     * Fetches a single product by ID on the shop.
     */
    fetch(id: ID): Promise<Product>;

    /**
     * Fetches multiple products by ID on the shop.
     */
    fetchMultiple(ids: ID[]): Promise<Product[]>;

    /**
     * Fetches a single product by handle on the shop.
     */
    fetchByHandle(handle: string): Promise<Product>;

    /**
     * Fetches all products on the shop that match the query.
     */
    fetchQuery(options?: {
        first?: number;
        sortKey?: ProductSortKeys;
        query?: string;
        reverse?: boolean;
    }): Promise<Product[]>;

    /**
     * Find recommended products related to a given productId.
     * To learn more about how recommendations are generated, see https://shopify.dev/themes/product-merchandising/recommendations.
     */
    fetchRecommendations(productId: ID): Promise<Product[]>;
}
