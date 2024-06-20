import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightCampaignGroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightCampaignGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdLightCampaignGroup>;
}
