import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCustomDerivedMetrics

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCustomDerivedMetrics extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdCustomDerivedMetrics>;
}
