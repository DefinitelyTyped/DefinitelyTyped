import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsSignalDiagnosticIssue
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsSignalDiagnosticIssue extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data_source_id: "data_source_id";
        data_source_type: "data_source_type";
        diagnostic_type: "diagnostic_type";
        event_name: "event_name";
        traffic_anomaly_drop_percentage: "traffic_anomaly_drop_percentage";
        traffic_anomaly_drop_timestamp: "traffic_anomaly_drop_timestamp";
    }>;
}
