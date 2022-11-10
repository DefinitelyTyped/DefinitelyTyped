import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AudioCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getUpdateRecords(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getUpdateRecords(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getUpdateRecords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioCopyright>;
}
