import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CommerceMerchantSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checkout_message: "checkout_message";
        contact_email: "contact_email";
        cta: "cta";
        display_name: "display_name";
        facebook_channel: "facebook_channel";
        id: "id";
        instagram_channel: "instagram_channel";
        merchant_page: "merchant_page";
        merchant_status: "merchant_status";
        onsite_commerce_merchant: "onsite_commerce_merchant";
        payment_provider: "payment_provider";
        review_rejection_messages: "review_rejection_messages";
        review_rejection_reasons: "review_rejection_reasons";
        terms: "terms";
    }>;
    createAcknowledgeOrder(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommercePayouts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommerceTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOrderMAnAgeMEntApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createOrderMAnAgeMEntApp(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSetupStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShippingProfiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShippingProfile(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getShops(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTaxSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): CommerceMerchantSettings;
}
