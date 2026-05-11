import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsCustomPivotsPreview
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsCustomPivotsPreview extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_name: "account_name";
        ad_id: "ad_id";
        ad_name: "ad_name";
        adset_id: "adset_id";
        adset_name: "adset_name";
        campaign_id: "campaign_id";
        campaign_name: "campaign_name";
        custom_breakdown: "custom_breakdown";
    }>;
}
