import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Status
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Status extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Status>;
    get(fields: Array<string>, params?: Record<string, any>): Status;
}
