import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignDeliveryEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryEstimate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get OptimizationGoal(): Record<string, any>;
}
