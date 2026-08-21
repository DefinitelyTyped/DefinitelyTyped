import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelMicrodataStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelMicrodataStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        allowed_domains: "allowed_domains";
        errors_stats_for_time_ranges: "errors_stats_for_time_ranges";
        has_valid_events: "has_valid_events";
        suggested_allowed_domains_count_max: "suggested_allowed_domains_count_max";
        suggested_trusted_domains: "suggested_trusted_domains";
    }>;
}
