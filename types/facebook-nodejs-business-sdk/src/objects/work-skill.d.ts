import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * WorkSkill
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkSkill extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
    getUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<WorkSkill>;
}
