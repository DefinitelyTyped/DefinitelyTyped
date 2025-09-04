import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelCAPIIntegrationQuality
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCAPIIntegrationQuality extends AbstractCrudObject {
    static get Fields(): Readonly<{
        acr: "acr";
        data_freshness: "data_freshness";
        dedupe_key_feedback: "dedupe_key_feedback";
        event_coverage: "event_coverage";
        event_match_quality: "event_match_quality";
        event_name: "event_name";
        event_potential_aly_acr_increase: "event_potential_aly_acr_increase";
    }>;
}
