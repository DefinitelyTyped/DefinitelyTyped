import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AudioCopyright
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioCopyright extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        displayed_matches_count: "displayed_matches_count";
        id: "id";
        in_conflict: "in_conflict";
        isrc: "isrc";
        match_rule: "match_rule";
        ownership_countries: "ownership_countries";
        ownership_details: "ownership_details";
        reference_file_status: "reference_file_status";
        ridge_monitoring_status: "ridge_monitoring_status";
        tags: "tags";
        update_time: "update_time";
        whitelisted_fb_users: "whitelisted_fb_users";
        whitelisted_ig_users: "whitelisted_ig_users";
    }>;
    getUpdateRecords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioCopyright>;
}
