import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAAASimilarCampaigns
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAAASimilarCampaigns extends AbstractCrudObject {
    static get Fields(): Readonly<{
        similar_campaign_limit: "similar_campaign_limit";
        similar_campaigns_info: "similar_campaigns_info";
        used_campaign_slots: "used_campaign_slots";
    }>;
}
