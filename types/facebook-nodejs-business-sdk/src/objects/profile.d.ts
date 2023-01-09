import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class Profile extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ProfileType(): Record<string, any>;
    static get Type(): Record<string, any>;
    getPicture(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Profile>;
}
