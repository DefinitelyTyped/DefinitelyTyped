import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductFeedRule from './product-feed-rule';
import ProductFeedUpload from './product-feed-upload';
export default class ProductFeed extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Delimiter(): Record<string, any>;
    static get IngestionSourceType(): Record<string, any>;
    static get QuotedFieldsMode(): Record<string, any>;
    static get Encoding(): Record<string, any>;
    static get FeedType(): Record<string, any>;
    static get ItemSubType(): Record<string, any>;
    static get OverrideType(): Record<string, any>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAutomotiveModels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDestinations(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDestinations(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFlights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFlights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHomeListings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHomeListings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHotels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHotels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMediaTitles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMediaTitles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProducts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRules(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRules(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createRule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getUploadSchedules(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getUploadSchedules(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getUploadSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUploadSchedule(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeed>;
    getUploads(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getUploads(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpload(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVehicleOffers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVehicles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
}
