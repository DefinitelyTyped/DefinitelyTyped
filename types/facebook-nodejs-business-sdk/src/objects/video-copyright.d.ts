import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * VideoCopyright
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyright extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_category: "content_category";
        copyright_content_id: "copyright_content_id";
        creator: "creator";
        excluded_ownership_segments: "excluded_ownership_segments";
        id: "id";
        in_conflict: "in_conflict";
        monitoring_status: "monitoring_status";
        monitoring_type: "monitoring_type";
        ownership_countries: "ownership_countries";
        reference_file: "reference_file";
        reference_file_disabled: "reference_file_disabled";
        reference_file_disabled_by_ops: "reference_file_disabled_by_ops";
        reference_owner_id: "reference_owner_id";
        rule_ids: "rule_ids";
        tags: "tags";
        whitelisted_ids: "whitelisted_ids";
    }>;
    static get ContentCategory(): Readonly<{
        episode: "episode";
        movie: "movie";
        web: "web";
    }>;
    static get MonitoringType(): Readonly<{
        audio_only: "AUDIO_ONLY";
        video_and_audio: "VIDEO_AND_AUDIO";
        video_only: "VIDEO_ONLY";
    }>;
    getUpdateRecords(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getUpdateRecords(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getUpdateRecords(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<VideoCopyright>;
    update(fields: string[], params?: Record<any, any>): Promise<VideoCopyright>;
}
