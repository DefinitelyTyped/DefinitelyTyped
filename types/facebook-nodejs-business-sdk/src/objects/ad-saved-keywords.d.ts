import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedKeywords
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedKeywords extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account: "account";
        id: "id";
        keywords: "keywords";
        name: "name";
        run_status: "run_status";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): AdSavedKeywords;
}
