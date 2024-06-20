import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * ShadowIGHashtag

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGHashtag extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getRecentMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTopMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<ShadowIGHashtag>;
}
