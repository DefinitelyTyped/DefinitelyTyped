import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsAnomalyDetection
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsAnomalyDetection extends AbstractCrudObject {
    static get Fields(): Readonly<{
        anomaly_data: "anomaly_data";
        day: "day";
    }>;
}
