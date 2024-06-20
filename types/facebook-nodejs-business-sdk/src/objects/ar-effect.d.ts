import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AREffect

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AREffect extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AREffect>;
}
