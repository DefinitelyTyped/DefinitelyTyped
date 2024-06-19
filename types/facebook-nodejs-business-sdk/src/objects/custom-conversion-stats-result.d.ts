import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomConversionStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversionStatsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Aggregation(): Record<string, any>;
}
