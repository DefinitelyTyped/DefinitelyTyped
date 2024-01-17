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
    getAutomotiveModels(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAutomotiveModels(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAutomotiveModels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDestinations(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getDestinations(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getDestinations(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFlights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getFlights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getFlights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHomeListings(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getHomeListings(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getHomeListings(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHotels(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getHotels(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getHotels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMediaTitles(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMediaTitles(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMediaTitles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getProducts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getProducts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicleOffers(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVehicleOffers(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicleOffers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicles(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVehicles(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductSet>;
    update(fields: string[], params?: Record<any, any>): Promise<ProductSet>;
}
