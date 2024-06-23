import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductFeedMissingFeedItemReplacement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedMissingFeedItemReplacement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        home_listing: "home_listing";
        product_item: "product_item";
        vehicle: "vehicle";
    }>;
}
