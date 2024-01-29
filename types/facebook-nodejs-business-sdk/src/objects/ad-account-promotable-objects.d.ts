import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountPromotableObjects
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPromotableObjects extends AbstractCrudObject {
    static get Fields(): Readonly<{
        promotable_app_ids: "promotable_app_ids";
        promotable_page_ids: "promotable_page_ids";
        promotable_urls: "promotable_urls";
    }>;
}
