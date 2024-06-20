import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserContext
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserContext extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<UserContext>;
}
