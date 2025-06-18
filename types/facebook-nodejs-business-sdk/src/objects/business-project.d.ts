import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessProject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        created_time: "created_time";
        creator: "creator";
        id: "id";
        name: "name";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessProject>;
}
