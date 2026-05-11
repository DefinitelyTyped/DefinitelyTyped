import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelRawFiresResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelRawFiresResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data_json: "data_json";
        device_type: "device_type";
        event: "event";
        event_detection_method: "event_detection_method";
        event_src: "event_src";
        placed_url: "placed_url";
        timestamp: "timestamp";
        user_pii_keys: "user_pii_keys";
    }>;
}
