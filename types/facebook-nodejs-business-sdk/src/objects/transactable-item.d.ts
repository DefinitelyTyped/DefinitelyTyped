import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * TransactableItem
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TransactableItem extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_title: "action_title";
        applinks: "applinks";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        description: "description";
        duration_time: "duration_time";
        duration_type: "duration_type";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        order_index: "order_index";
        price: "price";
        price_type: "price_type";
        sanitized_images: "sanitized_images";
        session_type: "session_type";
        time_padding_after_end: "time_padding_after_end";
        title: "title";
        transactable_item_id: "transactable_item_id";
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
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<TransactableItem>;
}
