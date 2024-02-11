import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdsPixelStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        diagnostics_hourly_last_timestamp: "diagnostics_hourly_last_timestamp";
        event: "event";
        value: "value";
    }>;
}
