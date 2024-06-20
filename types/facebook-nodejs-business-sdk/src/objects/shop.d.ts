import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Shop

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Shop extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Shop>;
}
