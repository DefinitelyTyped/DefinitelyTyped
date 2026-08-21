import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserContext
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserContext extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<UserContext>;
}
