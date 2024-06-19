import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStatsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Aggregation(): Record<string, any>;
}
