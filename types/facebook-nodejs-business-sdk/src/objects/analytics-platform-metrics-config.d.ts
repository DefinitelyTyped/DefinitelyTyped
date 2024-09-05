import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsPlatformMetricsConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsPlatformMetricsConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        has_a2u: "has_a2u";
        has_api_calls: "has_api_calls";
        has_app_invites: "has_app_invites";
        has_fb_login: "has_fb_login";
        has_game_requests: "has_game_requests";
        has_payments: "has_payments";
        has_referrals: "has_referrals";
        has_stories: "has_stories";
        has_structured_requests: "has_structured_requests";
    }>;
}
