import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SalesRightsInventoryManagement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SalesRightsInventoryManagement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        available_impressions: "available_impressions";
        booked_impressions: "booked_impressions";
        overbooked_impressions: "overbooked_impressions";
        supported_countries: "supported_countries";
        total_impressions: "total_impressions";
        unavailable_impressions: "unavailable_impressions";
        warning_messages: "warning_messages";
    }>;
}
