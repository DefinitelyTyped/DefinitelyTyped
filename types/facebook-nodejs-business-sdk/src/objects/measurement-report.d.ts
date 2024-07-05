import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MeasurementReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        download_urls: "download_urls";
        id: "id";
        metadata: "metadata";
        report_type: "report_type";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<MeasurementReport>;
}
