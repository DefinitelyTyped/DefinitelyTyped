import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * Flight
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Flight extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applinks: "applinks";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        custom_label_0: "custom_label_0";
        custom_label_1: "custom_label_1";
        custom_label_2: "custom_label_2";
        custom_label_3: "custom_label_3";
        custom_label_4: "custom_label_4";
        custom_number_0: "custom_number_0";
        custom_number_1: "custom_number_1";
        custom_number_2: "custom_number_2";
        custom_number_3: "custom_number_3";
        custom_number_4: "custom_number_4";
        description: "description";
        destination_airport: "destination_airport";
        destination_city: "destination_city";
        flight_id: "flight_id";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        oneway_currency: "oneway_currency";
        oneway_price: "oneway_price";
        origin_airport: "origin_airport";
        origin_city: "origin_city";
        price: "price";
        product_priority_0: "product_priority_0";
        product_priority_1: "product_priority_1";
        product_priority_2: "product_priority_2";
        product_priority_3: "product_priority_3";
        product_priority_4: "product_priority_4";
        sanitized_images: "sanitized_images";
        tags: "tags";
        unit_price: "unit_price";
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
    getOverrideDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Flight>;
    update(fields: string[], params?: Record<string, any>): Promise<Flight>;
}
