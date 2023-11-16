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
    getAutomotiveModels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHotels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMediaTitles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicleOffers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): ProductSet;
    update(fields: string[], params?: Record<any, any>): Promise<ProductSet>;
}
