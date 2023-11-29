import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Avatar
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Avatar extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    getModels(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getModels(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getModels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Avatar>;
}
