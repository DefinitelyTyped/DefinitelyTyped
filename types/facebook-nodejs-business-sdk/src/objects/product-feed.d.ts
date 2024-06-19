import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductFeedRule from "./product-feed-rule";
import ProductFeedUpload from "./product-feed-upload";
/**
 * ProductFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeed extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Delimiter(): Record<string, any>;
    static get IngestionSourceType(): Record<string, any>;
    static get QuotedFieldsMode(): Record<string, any>;
    static get Encoding(): Record<string, any>;
    static get FeedType(): Record<string, any>;
    static get ItemSubType(): Record<string, any>;
    static get OverrideType(): Record<string, any>;
    getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRule(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getUploadSchedules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUploadSchedule(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductFeed>;
    getUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpload(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ProductFeed;
    update(fields: Array<string>, params?: Record<string, any>): ProductFeed;
}
