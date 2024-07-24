import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageLocationsBreakdown
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLocationsBreakdown extends AbstractCrudObject {
    static get Fields(): Readonly<{
        location_id: "location_id";
        location_name: "location_name";
        location_type: "location_type";
        num_pages: "num_pages";
        num_pages_eligible_for_store_visit_reporting: "num_pages_eligible_for_store_visit_reporting";
        num_unpublished_or_closed_pages: "num_unpublished_or_closed_pages";
        parent_country_code: "parent_country_code";
        parent_region_id: "parent_region_id";
        parent_region_name: "parent_region_name";
    }>;
}
