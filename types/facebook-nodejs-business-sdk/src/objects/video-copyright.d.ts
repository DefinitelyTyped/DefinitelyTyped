import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class VideoCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ContentCategory(): Record<string, any>;
    static get MonitoringType(): Record<string, any>;
    getUpdateRecords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyright>;
    update(fields: string[], params?: Record<string, any>): Promise<VideoCopyright>;
}
