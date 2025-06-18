import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelEventPrediction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventPrediction extends AbstractCrudObject {
    static get Fields(): Readonly<{
        dismissed: "dismissed";
        event_type: "event_type";
        rule: "rule";
    }>;
}
