import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsCreationSavedState
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsCreationSavedState extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account: "ad_account";
        id: "id";
        serialized_store_data: "serialized_store_data";
        time_updated: "time_updated";
        user: "user";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsCreationSavedState>;
}
