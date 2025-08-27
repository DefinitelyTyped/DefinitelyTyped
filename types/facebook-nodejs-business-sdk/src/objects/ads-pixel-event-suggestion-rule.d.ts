import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelEventSuggestionRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventSuggestionRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        value_7d_volume: "7d_volume";
        dismissed: "dismissed";
        end_time: "end_time";
        event_type: "event_type";
        rank: "rank";
        rule: "rule";
        sample_urls: "sample_urls";
        start_time: "start_time";
    }>;
}
