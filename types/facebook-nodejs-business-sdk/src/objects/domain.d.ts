import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Domain

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Domain extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Domain>;
}
