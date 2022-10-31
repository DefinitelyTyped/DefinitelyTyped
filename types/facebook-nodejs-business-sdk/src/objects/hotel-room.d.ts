import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class HotelRoom extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPricingVariables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<HotelRoom>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<HotelRoom>;
}
