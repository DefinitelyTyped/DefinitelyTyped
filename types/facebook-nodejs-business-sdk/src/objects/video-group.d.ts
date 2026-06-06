import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_time: "created_time";
        description: "description";
        disable_reason: "disable_reason";
        id: "id";
        ig_profile_ids: "ig_profile_ids";
        is_disabled: "is_disabled";
        is_fb_video_group: "is_fb_video_group";
        last_used_time: "last_used_time";
        length: "length";
        name: "name";
        page_id: "page_id";
        page_ids: "page_ids";
        picture: "picture";
        placements: "placements";
        video_group_types: "video_group_types";
        videos: "videos";
        views: "views";
    }>;
}
