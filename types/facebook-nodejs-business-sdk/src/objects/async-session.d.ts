import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AsyncSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncSession extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AsyncSession;
}
