import Resource from './resource';
import { Shop } from './storefront/online_store';

export default class ShopResource extends Resource {
    /**
     * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
     * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
     */
    fetchInfo(): Promise<Shop>;

    /**
     * Fetches shop policies (privacy policy, terms of service and refund policy).
     */
    fetchPolicies(): Promise<Shop>;
}
