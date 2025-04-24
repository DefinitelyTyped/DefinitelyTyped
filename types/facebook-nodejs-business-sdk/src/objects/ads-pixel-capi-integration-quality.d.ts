import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelCAPIIntegrationQuality
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCAPIIntegrationQuality extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_match_quality: "event_match_quality";
        event_name: "event_name";
    }>;
}
