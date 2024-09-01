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
    createAcknowledgeOrder(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOrderMAnAgeMEntApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOrderMAnAgeMEntApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getShippingProfiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShippingProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
