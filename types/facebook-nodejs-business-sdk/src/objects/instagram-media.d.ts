import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import InstagramComment from "./instagram-comment";
/**
 * InstagramMedia

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramComment>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramMedia>;
}
