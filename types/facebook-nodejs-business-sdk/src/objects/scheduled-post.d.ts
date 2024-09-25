import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ScheduledPost
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ScheduledPost extends AbstractCrudObject {
    static get Fields(): Readonly<{
        admin_creator: "admin_creator";
        creation_time: "creation_time";
        feed_audience_description: "feed_audience_description";
        feed_targeting: "feed_targeting";
        id: "id";
        is_post_in_good_state: "is_post_in_good_state";
        message: "message";
        modified_time: "modified_time";
        og_action_summary: "og_action_summary";
        permalink_url: "permalink_url";
        place: "place";
        privacy_description: "privacy_description";
        scheduled_failure_notice: "scheduled_failure_notice";
        scheduled_publish_time: "scheduled_publish_time";
        story_token: "story_token";
        thumbnail: "thumbnail";
        video_id: "video_id";
    }>;
}
