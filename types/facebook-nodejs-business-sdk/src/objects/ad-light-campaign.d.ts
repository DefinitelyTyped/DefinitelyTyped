import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightCampaign extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdLightCampaign;
}
