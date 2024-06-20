import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import InstagramComment from "./instagram-comment";
/**
 * InstagramCarousel

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramCarousel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramComment>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramCarousel>;
}
