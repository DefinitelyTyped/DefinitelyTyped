import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * IGUserForIGOnlyAPI
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_type: "account_type";
        biography: "biography";
        followers_count: "followers_count";
        follows_count: "follows_count";
        id: "id";
        media_count: "media_count";
        name: "name";
        profile_picture_url: "profile_picture_url";
        user_id: "user_id";
        username: "username";
        website: "website";
    }>;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMedia(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createMediaPublish(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createMention(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createMessageAttachment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createMessage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteMessengerProfile(params?: Record<string, any>): Promise<any>;
    getMessengerProfile(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMessengerProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteWelcomeMessageFlows(params?: Record<string, any>): Promise<any>;
    getWelcomeMessageFlows(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createWelcomeMessageFlow(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUserForIGOnlyAPI>;
}
