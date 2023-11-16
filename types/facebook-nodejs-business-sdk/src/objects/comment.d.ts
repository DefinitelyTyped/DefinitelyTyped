import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * Comment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Comment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        admin_creator: "admin_creator";
        application: "application";
        attachment: "attachment";
        can_comment: "can_comment";
        can_hide: "can_hide";
        can_like: "can_like";
        can_remove: "can_remove";
        can_reply_privately: "can_reply_privately";
        comment_count: "comment_count";
        created_time: "created_time";
        from: "from";
        id: "id";
        is_hidden: "is_hidden";
        is_private: "is_private";
        like_count: "like_count";
        live_broadcast_timestamp: "live_broadcast_timestamp";
        message: "message";
        message_tags: "message_tags";
        object: "object";
        parent: "parent";
        permalink_url: "permalink_url";
        private_reply_conversation: "private_reply_conversation";
        user_likes: "user_likes";
    }>;
    static get CommentPrivacyValue(): Readonly<{
        declined_by_admin_assistant: "DECLINED_BY_ADMIN_ASSISTANT";
        default_privacy: "DEFAULT_PRIVACY";
        friends_and_post_owner: "FRIENDS_AND_POST_OWNER";
        friends_only: "FRIENDS_ONLY";
        graphql_multiple_value_hack_do_not_use: "GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE";
        owner_or_commenter: "OWNER_OR_COMMENTER";
        pending_approval: "PENDING_APPROVAL";
        removed_by_admin_assistant: "REMOVED_BY_ADMIN_ASSISTANT";
        side_conversation: "SIDE_CONVERSATION";
        side_conversation_and_post_owner: "SIDE_CONVERSATION_AND_POST_OWNER";
        spotlight_tab: "SPOTLIGHT_TAB";
    }>;
    static get Filter(): Readonly<{
        stream: "stream";
        toplevel: "toplevel";
    }>;
    static get LiveFilter(): Readonly<{
        filter_low_quality: "filter_low_quality";
        no_filter: "no_filter";
    }>;
    static get Order(): Readonly<{
        chronological: "chronological";
        reverse_chronological: "reverse_chronological";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    deleteLikes(params?: Record<any, any>): Promise<any>;
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLike(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    getReactions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReactions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReactions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Comment>;
    update(fields: string[], params?: Record<any, any>): Promise<Comment>;
}
