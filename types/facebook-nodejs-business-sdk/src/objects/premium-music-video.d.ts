import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PremiumMusicVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PremiumMusicVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        cross_post_videos: "cross_post_videos";
        eligible_cross_post_pages: "eligible_cross_post_pages";
        id: "id";
        preferred_video_thumbnail_image_uri: "preferred_video_thumbnail_image_uri";
        premium_music_video_metadata: "premium_music_video_metadata";
        scheduled_publish_time: "scheduled_publish_time";
        title: "title";
    }>;
}
