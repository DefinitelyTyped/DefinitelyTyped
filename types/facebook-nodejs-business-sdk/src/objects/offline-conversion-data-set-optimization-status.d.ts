import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineConversionDataSetOptimizationStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetOptimizationStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event: "event";
        last_changed_time: "last_changed_time";
        last_detected_time: "last_detected_time";
        status: "status";
    }>;
}
