import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountIosFourteenCampaignLimits
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountIosFourteenCampaignLimits extends AbstractCrudObject {
    static get Fields(): Readonly<{
        campaign_group_limit: "campaign_group_limit";
        campaign_group_limits_details: "campaign_group_limits_details";
        campaign_limit: "campaign_limit";
    }>;
}
