import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PanelAPIReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PanelAPIReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checksum: "checksum";
        download_url: "download_url";
        end_date: "end_date";
        export_file_type: "export_file_type";
        id: "id";
        index: "index";
        name: "name";
        number_of_chunks: "number_of_chunks";
        start_date: "start_date";
        upload_date: "upload_date";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PanelAPIReport>;
}
