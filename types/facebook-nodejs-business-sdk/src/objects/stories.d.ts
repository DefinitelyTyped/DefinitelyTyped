import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * Stories
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Stories extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        media_id: "media_id";
        media_type: "media_type";
        post_id: "post_id";
        status: "status";
        url: "url";
        id: "id";
    }>;
    static get Status(): Readonly<{
        archived: "ARCHIVED";
        published: "PUBLISHED";
    }>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Stories>;
}
