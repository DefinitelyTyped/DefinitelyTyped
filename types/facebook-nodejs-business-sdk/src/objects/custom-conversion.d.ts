import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * CustomConversion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        aggregation_rule: "aggregation_rule";
        business: "business";
        creation_time: "creation_time";
        custom_event_type: "custom_event_type";
        data_sources: "data_sources";
        default_conversion_value: "default_conversion_value";
        description: "description";
        event_source_type: "event_source_type";
        first_fired_time: "first_fired_time";
        id: "id";
        is_archived: "is_archived";
        is_unavailable: "is_unavailable";
        last_fired_time: "last_fired_time";
        name: "name";
        offline_conversion_data_set: "offline_conversion_data_set";
        pixel: "pixel";
        retention_days: "retention_days";
        rule: "rule";
    }>;
    static get CustomEventType(): Readonly<{
        add_payment_info: "ADD_PAYMENT_INFO";
        add_to_cart: "ADD_TO_CART";
        add_to_wishlist: "ADD_TO_WISHLIST";
        complete_registration: "COMPLETE_REGISTRATION";
        contact: "CONTACT";
        content_view: "CONTENT_VIEW";
        customize_product: "CUSTOMIZE_PRODUCT";
        donate: "DONATE";
        facebook_selected: "FACEBOOK_SELECTED";
        find_location: "FIND_LOCATION";
        initiated_checkout: "INITIATED_CHECKOUT";
        lead: "LEAD";
        listing_interaction: "LISTING_INTERACTION";
        other: "OTHER";
        purchase: "PURCHASE";
        schedule: "SCHEDULE";
        search: "SEARCH";
        start_trial: "START_TRIAL";
        submit_application: "SUBMIT_APPLICATION";
        subscribe: "SUBSCRIBE";
    }>;
    getStats(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getStats(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getStats(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<CustomConversion>;
    update(fields: string[], params?: Record<any, any>): Promise<CustomConversion>;
}
