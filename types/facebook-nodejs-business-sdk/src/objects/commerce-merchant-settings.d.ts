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
    getCommerceOrders(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceOrders(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommercePayouts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommercePayouts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceTransactions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceTransactions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOnsiteConversionEvents(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOnsiteConversionEvents(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOnsiteConversionEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOrderManagementApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOrderManagementApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOrderManagementApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOrderManagementApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReturns(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReturns(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSellerIssues(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSellerIssues(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSellerIssues(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSetupStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSetupStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getShippingProfiles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getShippingProfiles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getShippingProfiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShippingProfile(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getShops(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getShops(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTaxSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTaxSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createWhatsappChannel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
