import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeShopSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeShopSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        collection_id: "collection_id";
        landing_view: "landing_view";
        shop_id: "shop_id";
    }>;
}
