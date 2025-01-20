import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelEventLastFiredTime
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventLastFiredTime extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event: "event";
        last_fired_time: "last_fired_time";
    }>;
}
