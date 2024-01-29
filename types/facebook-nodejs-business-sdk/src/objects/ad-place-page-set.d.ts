import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdPlacePageSet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        id: "id";
        location_types: "location_types";
        name: "name";
        pages_count: "pages_count";
        parent_page: "parent_page";
    }>;
    static get LocationTypes(): Readonly<{
        home: "home";
        recent: "recent";
    }>;
    static get TargetedAreaType(): Readonly<{
        custom_radius: "CUSTOM_RADIUS";
        marketing_area: "MARKETING_AREA";
        none: "NONE";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AdPlacePageSet>;
}
