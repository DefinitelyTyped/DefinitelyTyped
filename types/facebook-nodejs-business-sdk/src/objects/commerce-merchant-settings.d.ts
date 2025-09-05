import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CommerceMerchantSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checkout_config: "checkout_config";
        checkout_message: "checkout_message";
        contact_email: "contact_email";
        cta: "cta";
        display_name: "display_name";
        facebook_channel: "facebook_channel";
        id: "id";
        instagram_channel: "instagram_channel";
        korea_ftc_listing: "korea_ftc_listing";
        merchant_page: "merchant_page";
        merchant_status: "merchant_status";
        offsite_iab_checkout_enabled_countries: "offsite_iab_checkout_enabled_countries";
        onsite_commerce_merchant: "onsite_commerce_merchant";
        payment_provider: "payment_provider";
        privacy_policy_localized: "privacy_policy_localized";
        return_policy_localized: "return_policy_localized";
        review_rejection_messages: "review_rejection_messages";
        review_rejection_reasons: "review_rejection_reasons";
        shops_ads_setup: "shops_ads_setup";
        terms: "terms";
    }>;
    createAcknowledgeOrder(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOrderManagementApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOrderManagementApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceMerchantSettings>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getShippingProfiles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShippingProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getShops(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTaxSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceMerchantSettings>;
}
