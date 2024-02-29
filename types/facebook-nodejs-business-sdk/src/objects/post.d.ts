import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Comment from './comment';
/**
 * Post
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Post extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        admin_creator: "admin_creator";
        allowed_advertising_objectives: "allowed_advertising_objectives";
        application: "application";
        backdated_time: "backdated_time";
        call_to_action: "call_to_action";
        can_reply_privately: "can_reply_privately";
        caption: "caption";
        child_attachments: "child_attachments";
        comments_mirroring_domain: "comments_mirroring_domain";
        coordinates: "coordinates";
        created_time: "created_time";
        description: "description";
        event: "event";
        expanded_height: "expanded_height";
        expanded_width: "expanded_width";
        feed_targeting: "feed_targeting";
        from: "from";
        full_picture: "full_picture";
        height: "height";
        icon: "icon";
        id: "id";
        instagram_eligibility: "instagram_eligibility";
        is_app_share: "is_app_share";
        is_eligible_for_promotion: "is_eligible_for_promotion";
        is_expired: "is_expired";
        is_hidden: "is_hidden";
        is_inline_created: "is_inline_created";
        is_instagram_eligible: "is_instagram_eligible";
        is_popular: "is_popular";
        is_published: "is_published";
        is_spherical: "is_spherical";
        link: "link";
        message: "message";
        message_tags: "message_tags";
        multi_share_end_card: "multi_share_end_card";
        multi_share_optimized: "multi_share_optimized";
        name: "name";
        object_id: "object_id";
        parent_id: "parent_id";
        permalink_url: "permalink_url";
        picture: "picture";
        place: "place";
        privacy: "privacy";
        promotable_id: "promotable_id";
        promotion_status: "promotion_status";
        properties: "properties";
        scheduled_publish_time: "scheduled_publish_time";
        shares: "shares";
        source: "source";
        status_type: "status_type";
        story: "story";
        story_tags: "story_tags";
        subscribed: "subscribed";
        target: "target";
        targeting: "targeting";
        timeline_visibility: "timeline_visibility";
        type: "type";
        updated_time: "updated_time";
        via: "via";
        video_buying_eligibility: "video_buying_eligibility";
        width: "width";
    }>;
    static get BackdatedTimeGranularity(): Readonly<{
        day: "day";
        hour: "hour";
        min: "min";
        month: "month";
        none: "none";
        year: "year";
    }>;
    static get Formatting(): Readonly<{
        markdown: "MARKDOWN";
        plaintext: "PLAINTEXT";
    }>;
    static get PlaceAttachmentSetting(): Readonly<{
        value_1: "1";
        value_2: "2";
    }>;
    static get PostSurfacesBlacklist(): Readonly<{
        value_1: "1";
        value_2: "2";
        value_3: "3";
        value_4: "4";
        value_5: "5";
    }>;
    static get PostingToRedspace(): Readonly<{
        disabled: "disabled";
        enabled: "enabled";
    }>;
    static get TargetSurface(): Readonly<{
        story: "STORY";
        timeline: "TIMELINE";
    }>;
    static get UnpublishedContentType(): Readonly<{
        ads_post: "ADS_POST";
        draft: "DRAFT";
        inline_created: "INLINE_CREATED";
        published: "PUBLISHED";
        reviewable_branded_content: "REVIEWABLE_BRANDED_CONTENT";
        scheduled: "SCHEDULED";
        scheduled_recurring: "SCHEDULED_RECURRING";
    }>;
    static get FeedStoryVisibility(): Readonly<{
        hidden: "hidden";
        visible: "visible";
    }>;
    static get TimelineVisibility(): Readonly<{
        forced_allow: "forced_allow";
        hidden: "hidden";
        normal: "normal";
    }>;
    getAttachments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAttachments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAttachments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    getDynamicPosts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getDynamicPosts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getDynamicPosts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteLikes(params?: Record<any, any>): Promise<any>;
    createLike(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Post>;
    getReactions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReactions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReactions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSharedPosts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSharedPosts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedPosts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSponsorTags(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSponsorTags(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSponsorTags(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTo(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTo(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTo(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Post>;
    update(fields: string[], params?: Record<any, any>): Promise<Post>;
}
