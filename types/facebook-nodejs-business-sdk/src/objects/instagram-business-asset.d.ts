import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * InstagramBusinessAsset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBusinessAsset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        ig_user_id: "ig_user_id";
        ig_username: "ig_username";
    }>;
    static get PermittedTasks(): Readonly<{
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        community_activity: "COMMUNITY_ACTIVITY";
        content: "CONTENT";
        messages: "MESSAGES";
    }>;
    static get Tasks(): Readonly<{
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        community_activity: "COMMUNITY_ACTIVITY";
        content: "CONTENT";
        messages: "MESSAGES";
    }>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramBusinessAsset>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramBusinessAsset>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramBusinessAsset>;
}
