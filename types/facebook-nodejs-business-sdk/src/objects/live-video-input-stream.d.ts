import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LiveVideoInputStream

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoInputStream extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<LiveVideoInputStream>;
}
