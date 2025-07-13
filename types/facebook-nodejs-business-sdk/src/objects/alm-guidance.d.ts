import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ALMGuidance
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMGuidance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        guidances: "guidances";
        parent_advertiser_id: "parent_advertiser_id";
        parent_advertiser_name: "parent_advertiser_name";
    }>;
}
