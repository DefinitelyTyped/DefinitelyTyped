import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * Hotel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hotel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        address: "address";
        applinks: "applinks";
        brand: "brand";
        category: "category";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        description: "description";
        guest_ratings: "guest_ratings";
        hotel_id: "hotel_id";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        lowest_base_price: "lowest_base_price";
        loyalty_program: "loyalty_program";
        margin_level: "margin_level";
        name: "name";
        phone: "phone";
        sale_price: "sale_price";
        sanitized_images: "sanitized_images";
        star_rating: "star_rating";
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
    getHotelRooms(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getHotelRooms(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getHotelRooms(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideosMetadata(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideosMetadata(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Hotel>;
    update(fields: string[], params?: Record<any, any>): Promise<Hotel>;
}
