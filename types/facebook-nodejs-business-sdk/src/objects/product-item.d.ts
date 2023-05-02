import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class ProductItem extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AgeGroup(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get Gender(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get ReviewStatus(): Record<string, any>;
    static get ShippingWeightUnit(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    static get CommerceTaxCategory(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    static get ErrorType(): Record<string, any>;
    static get MarkedForProductLaunch(): Record<string, any>;
    static get OriginCountry(): Record<string, any>;
    static get WaComplianceCategory(): Record<string, any>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProductSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductItem>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductItem>;
}
