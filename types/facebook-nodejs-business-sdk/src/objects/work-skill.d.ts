import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * WorkSkill
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkSkill extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<WorkSkill>;
}
