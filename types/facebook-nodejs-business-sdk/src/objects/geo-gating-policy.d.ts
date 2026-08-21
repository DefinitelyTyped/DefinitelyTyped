import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * GeoGatingPolicy
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GeoGatingPolicy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        after_schedule: "after_schedule";
        exclude_country: "exclude_country";
        id: "id";
        include_country: "include_country";
        name: "name";
        valid_from: "valid_from";
        valid_until: "valid_until";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<GeoGatingPolicy>;
}
