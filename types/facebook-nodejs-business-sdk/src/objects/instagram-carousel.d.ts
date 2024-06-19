import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import InstagramComment from "./instagram-comment";
/**
 * InstagramCarousel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramCarousel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<InstagramComment>;
    get(fields: Array<string>, params?: Record<string, any>): InstagramCarousel;
}
