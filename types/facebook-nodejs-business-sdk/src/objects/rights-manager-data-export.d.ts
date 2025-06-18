import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RightsManagerDataExport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RightsManagerDataExport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        download_uri: "download_uri";
        export_scope: "export_scope";
        id: "id";
        name: "name";
        record_type: "record_type";
        time_range_end: "time_range_end";
        time_range_start: "time_range_start";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<RightsManagerDataExport>;
}
