import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountUserSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUserSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SydCampaignTrendsObjective(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccountUserSettings>;
}
