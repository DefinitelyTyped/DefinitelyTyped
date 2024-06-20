import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASAdCreationTemplate

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdCreationTemplate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASAdCreationTemplate>;
}
