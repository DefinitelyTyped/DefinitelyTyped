import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelSignalsIWLFeedbackNux
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelSignalsIWLFeedbackNux extends AbstractCrudObject {
    static get Fields(): Readonly<{
        should_ask_to_rate: "should_ask_to_rate";
    }>;
}
