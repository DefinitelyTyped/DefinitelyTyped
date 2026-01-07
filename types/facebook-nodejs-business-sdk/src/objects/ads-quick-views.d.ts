import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsQuickViews
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsQuickViews extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribution_windows: "attribution_windows";
        breakdowns: "breakdowns";
        column_fields: "column_fields";
        description: "description";
        id: "id";
        name: "name";
        owner: "owner";
        permission: "permission";
        quick_view_type: "quick_view_type";
        sort: "sort";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsQuickViews>;
}
