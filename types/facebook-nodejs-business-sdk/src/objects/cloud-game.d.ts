import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CloudGame

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CloudGame extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CloudGame>;
}
