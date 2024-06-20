import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OwnedDomain

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OwnedDomain extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<OwnedDomain>;
}
