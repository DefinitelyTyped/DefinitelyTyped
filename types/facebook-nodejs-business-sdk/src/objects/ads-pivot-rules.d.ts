import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPivotRules
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPivotRules extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        creator: "creator";
        description: "description";
        id: "id";
        name: "name";
        permission: "permission";
        rules: "rules";
        scope: "scope";
        update_by: "update_by";
        update_time: "update_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPivotRules>;
}
