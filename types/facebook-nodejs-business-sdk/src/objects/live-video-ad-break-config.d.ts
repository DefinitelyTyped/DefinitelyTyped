import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LiveVideoAdBreakConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoAdBreakConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        default_ad_break_duration: "default_ad_break_duration";
        failure_reason_polling_interval: "failure_reason_polling_interval";
        first_break_eligible_secs: "first_break_eligible_secs";
        guide_url: "guide_url";
        is_eligible_to_onboard: "is_eligible_to_onboard";
        is_enabled: "is_enabled";
        onboarding_url: "onboarding_url";
        preparing_duration: "preparing_duration";
        time_between_ad_breaks_secs: "time_between_ad_breaks_secs";
        viewer_count_threshold: "viewer_count_threshold";
    }>;
}
