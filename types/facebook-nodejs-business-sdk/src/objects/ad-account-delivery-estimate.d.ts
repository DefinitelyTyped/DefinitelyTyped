import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountDeliveryEstimate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDeliveryEstimate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get OptimizationGoal(): Record<string, any>;
}
