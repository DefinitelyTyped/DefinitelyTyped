import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppLinks

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppLinks extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AppLinks>;
}
