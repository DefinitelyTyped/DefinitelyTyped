import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightCampaignGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightCampaignGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLightCampaignGroup>;
}
