import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAcknowledgeOrder(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOnsiteConversionEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOrderManagementApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOrderManagementApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSellerIssues(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getShippingProfiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShippingProfile(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTaxSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createWhatsappChannel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
