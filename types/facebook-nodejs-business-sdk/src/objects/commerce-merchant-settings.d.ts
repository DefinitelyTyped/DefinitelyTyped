import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAcknowledgeOrder(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommercePayouts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOnsiteConversionEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOrderManagementApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOrderManagementApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSellerIssues(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSetupStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getShippingProfiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShippingProfile(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getShops(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTaxSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createWhatsappChannel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
