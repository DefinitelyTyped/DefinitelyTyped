import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelCAPISetupQuality
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCAPISetupQuality extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_match_quality: "event_match_quality";
        event_name: "event_name";
    }>;
}
