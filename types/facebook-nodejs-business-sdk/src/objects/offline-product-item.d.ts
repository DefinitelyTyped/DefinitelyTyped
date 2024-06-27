import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OfflineProductItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineProductItem extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applinks: "applinks";
        brand: "brand";
        category: "category";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        description: "description";
        id: "id";
        image_fetch_status: "image_fetch_status";
        image_url: "image_url";
        images: "images";
        name: "name";
        offline_product_item_id: "offline_product_item_id";
        price: "price";
        sanitized_images: "sanitized_images";
        url: "url";
        visibility: "visibility";
    }>;
    static get ImageFetchStatus(): Readonly<{
        direct_upload: "DIRECT_UPLOAD";
        fetched: "FETCHED";
        fetch_failed: "FETCH_FAILED";
        no_status: "NO_STATUS";
        outdated: "OUTDATED";
        partial_fetch: "PARTIAL_FETCH";
    }>;
    static get Visibility(): Readonly<{
        published: "PUBLISHED";
        staging: "STAGING";
    }>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): OfflineProductItem;
}
