import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * RTBDynamicPost
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RTBDynamicPost extends AbstractCrudObject {
    static get Fields(): Readonly<{
        child_attachments: "child_attachments";
        created: "created";
        description: "description";
        id: "id";
        image_url: "image_url";
        link: "link";
        message: "message";
        owner_id: "owner_id";
        place_id: "place_id";
        product_id: "product_id";
        title: "title";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<RTBDynamicPost>;
}
