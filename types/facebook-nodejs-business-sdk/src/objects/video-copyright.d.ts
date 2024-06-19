import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * VideoCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ContentCategory(): Record<string, any>;
    static get MonitoringType(): Record<string, any>;
    getUpdateRecords(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): VideoCopyright;
    update(fields: Array<string>, params?: Record<string, any>): VideoCopyright;
}
