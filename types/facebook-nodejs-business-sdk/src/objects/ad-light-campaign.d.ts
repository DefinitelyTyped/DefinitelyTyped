import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightCampaign
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightCampaign extends AbstractCrudObject {
    static get Fields(): Readonly<{
        campaign_id: "campaign_id";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLightCampaign>;
}
