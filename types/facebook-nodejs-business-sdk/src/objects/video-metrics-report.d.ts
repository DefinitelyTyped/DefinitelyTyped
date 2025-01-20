import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoMetricsReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoMetricsReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checksum: "checksum";
        chunks: "chunks";
        end_date: "end_date";
        id: "id";
        index: "index";
        name: "name";
        platform: "platform";
        start_date: "start_date";
        type: "type";
        upload_date: "upload_date";
        url: "url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoMetricsReport>;
}
