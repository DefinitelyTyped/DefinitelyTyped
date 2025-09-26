import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramBusinessAsset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBusinessAsset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        ig_user_id: "ig_user_id";
        ig_username: "ig_username";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramBusinessAsset>;
}
