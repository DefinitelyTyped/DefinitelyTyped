import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountCampaignAttributionOptionInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCampaignAttributionOptionInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_eligible: "is_eligible";
        value: "value";
    }>;
}
