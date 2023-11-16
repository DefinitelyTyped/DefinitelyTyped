import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * HighDemandPeriodTimeSuggestionWeeklySegment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriodTimeSuggestionWeeklySegment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        days: "days";
        end_minute: "end_minute";
        start_minute: "start_minute";
        timezone_type: "timezone_type";
    }>;
}
