import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelRecentEventsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelRecentEventsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        event: "event";
    }>;
}
