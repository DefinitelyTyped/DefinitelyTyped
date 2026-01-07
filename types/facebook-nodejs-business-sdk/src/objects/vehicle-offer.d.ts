import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
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
        product_priority_0: "product_priority_0";
        product_priority_1: "product_priority_1";
        product_priority_2: "product_priority_2";
        product_priority_3: "product_priority_3";
        product_priority_4: "product_priority_4";
        sanitized_images: "sanitized_images";
        start_date: "start_date";
        start_time: "start_time";
        tags: "tags";
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
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOverrideDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<VehicleOffer>;
}
