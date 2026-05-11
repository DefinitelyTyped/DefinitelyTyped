import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupAgencyFeeConfigForApi
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupAgencyFeeConfigForApi extends AbstractCrudObject {
    static get Fields(): Readonly<{
        agency_fee_pct: "agency_fee_pct";
        is_agency_fee_disabled: "is_agency_fee_disabled";
        is_default_agency_fee: "is_default_agency_fee";
    }>;
}
