import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Organization

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Organization extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Organization>;
}
