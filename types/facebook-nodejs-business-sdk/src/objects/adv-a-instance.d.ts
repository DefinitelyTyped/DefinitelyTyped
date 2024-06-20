import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdvAInstance

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdvAInstance extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdvAInstance>;
}
