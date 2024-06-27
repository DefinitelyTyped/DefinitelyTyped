import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * RTBDynamicPost
 * @extends AbstractCrudObject
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
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): RTBDynamicPost;
}
