import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * ProductSet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auto_creation_url: "auto_creation_url";
        filter: "filter";
        id: "id";
        latest_metadata: "latest_metadata";
        live_metadata: "live_metadata";
        name: "name";
        ordering_info: "ordering_info";
        product_catalog: "product_catalog";
        product_count: "product_count";
        retailer_id: "retailer_id";
    }>;
    getAutomotiveModels(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlights(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHotels(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMediaTitles(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicleOffers(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): ProductSet;
    update(fields: Array<string>, params?: Record<any, any>): ProductSet;
}
