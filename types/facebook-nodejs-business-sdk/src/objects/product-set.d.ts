import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class ProductSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductSet>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ProductSet>;
}
