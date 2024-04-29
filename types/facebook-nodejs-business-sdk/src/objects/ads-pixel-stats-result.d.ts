import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdsPixelStatsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStatsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        aggregation: "aggregation";
        data: "data";
        start_time: "start_time";
    }>;
    static get Aggregation(): Readonly<{
        browser_type: "browser_type";
        custom_data_field: "custom_data_field";
        device_os: "device_os";
        device_type: "device_type";
        event: "event";
        event_detection_method: "event_detection_method";
        event_processing_results: "event_processing_results";
        event_source: "event_source";
        event_total_counts: "event_total_counts";
        event_value_count: "event_value_count";
        had_pii: "had_pii";
        host: "host";
        match_keys: "match_keys";
        pixel_fire: "pixel_fire";
        url: "url";
        url_by_rule: "url_by_rule";
    }>;
}
