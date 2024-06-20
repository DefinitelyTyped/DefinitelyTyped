import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AsyncSession

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncSession extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AsyncSession>;
}
