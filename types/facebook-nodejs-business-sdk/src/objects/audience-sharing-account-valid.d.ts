import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudienceSharingAccountValid
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceSharingAccountValid extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_type: "account_type";
        business_id: "business_id";
        business_name: "business_name";
        can_ad_account_use_lookalike_container: "can_ad_account_use_lookalike_container";
        sharing_agreement_status: "sharing_agreement_status";
    }>;
}
