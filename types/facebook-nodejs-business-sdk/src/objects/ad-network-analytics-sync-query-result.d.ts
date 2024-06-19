import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdNetworkAnalyticsSyncQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdNetworkAnalyticsSyncQueryResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AggregationPeriod(): Record<string, any>;
    static get Breakdowns(): Record<string, any>;
    static get Metrics(): Record<string, any>;
    static get OrderingColumn(): Record<string, any>;
    static get OrderingType(): Record<string, any>;
}
