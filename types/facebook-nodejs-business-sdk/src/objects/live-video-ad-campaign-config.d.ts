import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LiveVideoAdCampaignConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoAdCampaignConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        live_video_ad_type: "live_video_ad_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<LiveVideoAdCampaignConfig>;
}
