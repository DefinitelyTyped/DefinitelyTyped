import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * AdAsyncRequest

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Statuses(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAsyncRequest>;
}
