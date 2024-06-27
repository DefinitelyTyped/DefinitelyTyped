import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGUserForIGOnlyAPI
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_type: "account_type";
        id: "id";
        media_count: "media_count";
        username: "username";
    }>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUserForIGOnlyAPI>;
}
