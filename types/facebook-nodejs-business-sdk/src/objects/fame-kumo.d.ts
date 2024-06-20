import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FAMEKumo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FAMEKumo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<FAMEKumo>;
}
