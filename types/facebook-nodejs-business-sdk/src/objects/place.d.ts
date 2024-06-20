import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Place

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Place extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<Place>;
}
