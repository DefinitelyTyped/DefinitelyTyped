import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * VideoCopyright
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ContentCategory(): Record<string, any>;
    static get MonitoringType(): Record<string, any>;
    getUpdateRecords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyright>;    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyright>;
}
