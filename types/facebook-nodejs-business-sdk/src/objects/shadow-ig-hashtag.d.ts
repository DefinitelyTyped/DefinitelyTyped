import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * ShadowIGHashtag
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGHashtag extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
    getRecentMedia(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getRecentMedia(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getRecentMedia(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTopMedia(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTopMedia(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTopMedia(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<ShadowIGHashtag>;
}
