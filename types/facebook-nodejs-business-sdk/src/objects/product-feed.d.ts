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
    getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createRule(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getUploadSchedules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUploadSchedule(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductFeed>;
    getUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUpload(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeed>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeed>;
}
