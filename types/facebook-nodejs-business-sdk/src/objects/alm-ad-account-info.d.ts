import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ALMAdAccountInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMAdAccountInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        id: "id";
        managed_by: "managed_by";
        owned_by: "owned_by";
        parent_advertiser_id: "parent_advertiser_id";
        sub_vertical: "sub_vertical";
        tag: "tag";
        user_ids: "user_ids";
        vertical: "vertical";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ALMAdAccountInfo>;
}
