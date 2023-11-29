import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * VehicleOffer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VehicleOffer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount_currency: "amount_currency";
        amount_percentage: "amount_percentage";
        amount_price: "amount_price";
        amount_qualifier: "amount_qualifier";
        applinks: "applinks";
        availability: "availability";
        body_style: "body_style";
        cashback_currency: "cashback_currency";
        cashback_price: "cashback_price";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        dma_codes: "dma_codes";
        downpayment_currency: "downpayment_currency";
        downpayment_price: "downpayment_price";
        downpayment_qualifier: "downpayment_qualifier";
        drivetrain: "drivetrain";
        end_date: "end_date";
        end_time: "end_time";
        exterior_color: "exterior_color";
        fuel_type: "fuel_type";
        generation: "generation";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        interior_color: "interior_color";
        interior_upholstery: "interior_upholstery";
        make: "make";
        model: "model";
        offer_description: "offer_description";
        offer_disclaimer: "offer_disclaimer";
        offer_type: "offer_type";
        price: "price";
        sanitized_images: "sanitized_images";
        start_date: "start_date";
        start_time: "start_time";
        term_length: "term_length";
        term_qualifier: "term_qualifier";
        title: "title";
        transmission: "transmission";
        trim: "trim";
        unit_price: "unit_price";
        url: "url";
        vehicle_offer_id: "vehicle_offer_id";
        visibility: "visibility";
        year: "year";
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
    get(fields: string[], params?: Record<any, any>): Promise<VehicleOffer>;
}
