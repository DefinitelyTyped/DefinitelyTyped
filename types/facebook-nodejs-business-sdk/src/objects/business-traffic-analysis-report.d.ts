import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessTrafficAnalysisReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTrafficAnalysisReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_location: "audience_location";
        event_category: "event_category";
        traffic_analysis_impressions: "traffic_analysis_impressions";
    }>;
}
