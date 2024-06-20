import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandRequest

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BrandRequest>;
}
