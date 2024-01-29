import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * HomeListing
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HomeListing extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ac_type: "ac_type";
        additional_fees_description: "additional_fees_description";
        address: "address";
        agent_company: "agent_company";
        agent_email: "agent_email";
        agent_fb_page_id: "agent_fb_page_id";
        agent_name: "agent_name";
        agent_phone: "agent_phone";
        applinks: "applinks";
        area_size: "area_size";
        area_unit: "area_unit";
        availability: "availability";
        category_specific_fields: "category_specific_fields";
        co_2_emission_rating_eu: "co_2_emission_rating_eu";
        currency: "currency";
        days_on_market: "days_on_market";
        description: "description";
        energy_rating_eu: "energy_rating_eu";
        furnish_type: "furnish_type";
        group_id: "group_id";
        heating_type: "heating_type";
        home_listing_id: "home_listing_id";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        laundry_type: "laundry_type";
        listing_type: "listing_type";
        max_currency: "max_currency";
        max_price: "max_price";
        min_currency: "min_currency";
        min_price: "min_price";
        name: "name";
        num_baths: "num_baths";
        num_beds: "num_beds";
        num_rooms: "num_rooms";
        num_units: "num_units";
        parking_type: "parking_type";
        partner_verification: "partner_verification";
        pet_policy: "pet_policy";
        price: "price";
        property_type: "property_type";
        sanitized_images: "sanitized_images";
        unit_price: "unit_price";
        url: "url";
        visibility: "visibility";
        year_built: "year_built";
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
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<HomeListing>;
    update(fields: string[], params?: Record<any, any>): Promise<HomeListing>;
}
