import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Avatar
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Avatar extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    getModels(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): Avatar;
}
