import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountCustomAudienceLimits
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCustomAudienceLimits extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_update_quota_in_total: "audience_update_quota_in_total";
        audience_update_quota_left: "audience_update_quota_left";
        has_hit_audience_update_limit: "has_hit_audience_update_limit";
        next_audience_update_available_time: "next_audience_update_available_time";
        rate_limit_reset_time: "rate_limit_reset_time";
    }>;
}
