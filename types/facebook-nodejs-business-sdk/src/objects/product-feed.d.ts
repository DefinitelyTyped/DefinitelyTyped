import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductFeedRule from "./product-feed-rule";
import ProductFeedUpload from "./product-feed-upload";
/**
 * ProductFeed

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
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getUploadSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUploadSchedule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeed>;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;    get(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
}
