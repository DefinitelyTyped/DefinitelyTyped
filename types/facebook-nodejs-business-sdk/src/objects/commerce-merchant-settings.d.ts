import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CommerceMerchantSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAcknowledgeOrder(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOrderMAnAgeMEntApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createOrderMAnAgeMEntApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShippingProfiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShippingProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTaxSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
