import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Destination
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Destination extends AbstractCrudObject {
    static get Fields(): Readonly<{
        address: "address";
        applinks: "applinks";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        description: "description";
        destination_id: "destination_id";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        name: "name";
        price: "price";
        price_change: "price_change";
        sanitized_images: "sanitized_images";
        types: "types";
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
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAugmentedRealitiesMetadata(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideosMetadata(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideosMetadata(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Destination>;
}
