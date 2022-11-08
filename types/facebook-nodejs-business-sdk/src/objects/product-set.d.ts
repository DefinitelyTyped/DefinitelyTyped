import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class ProductSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductSet>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductSet>;
}
