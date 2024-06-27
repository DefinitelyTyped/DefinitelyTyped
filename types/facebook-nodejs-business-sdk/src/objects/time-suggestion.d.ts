import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TimeSuggestion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TimeSuggestion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        high_demand_periods: "high_demand_periods";
        is_enabled: "is_enabled";
    }>;
}
