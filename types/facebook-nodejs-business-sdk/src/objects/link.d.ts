import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
/**
 * Link
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Link extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption: "caption";
        created_time: "created_time";
        description: "description";
        from: "from";
        icon: "icon";
        id: "id";
        link: "link";
        message: "message";
        multi_share_optimized: "multi_share_optimized";
        name: "name";
        privacy: "privacy";
        via: "via";
    }>;
    createComment(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Link>;
}
