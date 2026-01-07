import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ALMEndAdvertiserInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMEndAdvertiserInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        estimated_ad_budget: "estimated_ad_budget";
        id: "id";
        parent_advertiser_id: "parent_advertiser_id";
        parent_advertiser_name: "parent_advertiser_name";
        tag: "tag";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ALMEndAdvertiserInfo>;
}
