import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlaceTag

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTag extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PlaceTag>;
}
