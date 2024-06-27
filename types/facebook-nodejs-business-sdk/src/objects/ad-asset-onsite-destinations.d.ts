import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetOnsiteDestinations
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetOnsiteDestinations extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auto_optimization: "auto_optimization";
        details_page_product_id: "details_page_product_id";
        shop_collection_product_set_id: "shop_collection_product_set_id";
        storefront_shop_id: "storefront_shop_id";
    }>;
}
