import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Status

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Status extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Status>;
    get(fields: string[], params?: Record<string, any>): Promise<Status>;
}
