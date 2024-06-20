import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlaceTopic

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTopic extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PlaceTopic>;
}
