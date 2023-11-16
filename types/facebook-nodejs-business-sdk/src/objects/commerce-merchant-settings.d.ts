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
    getCommerceOrders(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommercePayouts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCommerceTransactions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOnsiteConversionEvents(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOrderManagementApps(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createOrderManagementApp(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getReturns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSellerIssues(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSetupStatus(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShippingProfiles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShippingProfile(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTaxSettings(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createWhatsappChannel(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): CommerceMerchantSettings;
}
