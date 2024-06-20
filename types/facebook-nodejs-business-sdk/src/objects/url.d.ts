import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * URL
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class URL extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Scopes(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<URL>;    get(fields: string[], params?: Record<string, any>): Promise<URL>;
}
