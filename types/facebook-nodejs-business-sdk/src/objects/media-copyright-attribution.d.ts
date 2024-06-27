import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaCopyrightAttribution
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightAttribution extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribution_ig_target_id: "attribution_ig_target_id";
        attribution_target_email_address: "attribution_target_email_address";
        attribution_target_id: "attribution_target_id";
        attribution_target_name: "attribution_target_name";
        attribution_type: "attribution_type";
        attribution_uri: "attribution_uri";
        copyright_count: "copyright_count";
        creation_time: "creation_time";
        creator: "creator";
        id: "id";
        is_enabled: "is_enabled";
        link_title: "link_title";
        match_count: "match_count";
        owner: "owner";
        status: "status";
        title: "title";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<MediaCopyrightAttribution>;
}
