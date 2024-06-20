import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Robot

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Robot extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Robot>;
}
