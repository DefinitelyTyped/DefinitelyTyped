import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class HotelRoom extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPricingVariables(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPricingVariables(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPricingVariables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<HotelRoom>;
    update(fields: string[], params?: Record<string, any>): Promise<HotelRoom>;
}
