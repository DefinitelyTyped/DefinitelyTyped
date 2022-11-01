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
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createRule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getUploadSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUploadSchedule(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeed>;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUpload(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
}
