import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ReachFrequencyPrediction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyPrediction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
    static get BuyingType(): Record<string, any>;
    static get InstreamPackages(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ReachFrequencyPrediction;
}
