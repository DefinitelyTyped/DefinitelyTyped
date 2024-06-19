import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * ProductItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItem extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AgeGroup(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get Gender(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get ReviewStatus(): Record<string, any>;
    static get ShippingWeightUnit(): Record<string, any>;
    static get VideoFetchStatus(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    static get CommerceTaxCategory(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    static get ErrorType(): Record<string, any>;
    static get MarkedForProductLaunch(): Record<string, any>;
    static get OriginCountry(): Record<string, any>;
    static get WaComplianceCategory(): Record<string, any>;
    getChannelsToIntegrityStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProductSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ProductItem;
    update(fields: Array<string>, params?: Record<string, any>): ProductItem;
}
