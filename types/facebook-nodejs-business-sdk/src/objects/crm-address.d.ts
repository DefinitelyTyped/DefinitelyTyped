import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CRMAddress

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CRMAddress extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CRMAddress>;
}
