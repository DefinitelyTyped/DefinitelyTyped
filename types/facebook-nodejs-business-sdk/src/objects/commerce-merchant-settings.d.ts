import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * CommerceMerchantSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        braintree_merchant_id: "braintree_merchant_id";
        checkout_message: "checkout_message";
        contact_email: "contact_email";
        cta: "cta";
        disable_checkout_urls: "disable_checkout_urls";
        display_name: "display_name";
        external_merchant_id: "external_merchant_id";
        facebook_channel: "facebook_channel";
        feature_eligibility: "feature_eligibility";
        has_discount_code: "has_discount_code";
        has_onsite_intent: "has_onsite_intent";
        id: "id";
        instagram_channel: "instagram_channel";
        merchant_alert_email: "merchant_alert_email";
        merchant_page: "merchant_page";
        merchant_status: "merchant_status";
        onsite_commerce_merchant: "onsite_commerce_merchant";
        payment_provider: "payment_provider";
        privacy_url_by_locale: "privacy_url_by_locale";
        review_rejection_messages: "review_rejection_messages";
        review_rejection_reasons: "review_rejection_reasons";
        supported_card_types: "supported_card_types";
        terms: "terms";
        terms_url_by_locale: "terms_url_by_locale";
        whatsapp_channel: "whatsapp_channel";
    }>;
    createAcknowledgeOrder(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCommerceOrders(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceOrders(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommercePayouts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCommercePayouts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCommercePayouts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceTransactions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCommerceTransactions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceTransactions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOnsiteConversionEvents(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getOnsiteConversionEvents(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getOnsiteConversionEvents(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOrderManagementApps(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getOrderManagementApps(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getOrderManagementApps(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOrderManagementApp(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getProductCatalogs(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getProductCatalogs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReturns(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReturns(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReturns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSellerIssues(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSellerIssues(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSellerIssues(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSetupStatus(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSetupStatus(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSetupStatus(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getShippingProfiles(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getShippingProfiles(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getShippingProfiles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShippingProfile(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getShops(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getShops(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxSettings(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTaxSettings(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTaxSettings(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createWhatsappChannel(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<CommerceMerchantSettings>;
}
