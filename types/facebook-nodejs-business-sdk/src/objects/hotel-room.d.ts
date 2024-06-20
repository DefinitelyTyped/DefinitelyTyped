import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * HotelRoom

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HotelRoom extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPricingVariables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<HotelRoom>;
}
