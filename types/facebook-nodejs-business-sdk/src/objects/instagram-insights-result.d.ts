import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramInsightsResult

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramInsightsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Breakdown(): Record<string, any>;
    static get Metric(): Record<string, any>;
    static get Period(): Record<string, any>;
    static get MetricType(): Record<string, any>;
    static get Timeframe(): Record<string, any>;
}
