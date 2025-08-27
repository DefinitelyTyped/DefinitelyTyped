import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import Dataset from "./dataset";
import ProductCatalog from "./product-catalog";
/**
 * WhatsAppBusinessAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_review_status: "account_review_status";
        analytics: "analytics";
        auth_international_rate_eligibility: "auth_international_rate_eligibility";
        business_verification_status: "business_verification_status";
        country: "country";
        creation_time: "creation_time";
        currency: "currency";
        health_status: "health_status";
        id: "id";
        is_enabled_for_insights: "is_enabled_for_insights";
        linked_commerce_account: "linked_commerce_account";
        marketing_messages_lite_api_status: "marketing_messages_lite_api_status";
        message_template_namespace: "message_template_namespace";
        name: "name";
        on_behalf_of_business_info: "on_behalf_of_business_info";
        owner_business: "owner_business";
        owner_business_info: "owner_business_info";
        ownership_type: "ownership_type";
        primary_business_location: "primary_business_location";
        primary_funding_id: "primary_funding_id";
        purchase_order_number: "purchase_order_number";
        status: "status";
        timezone_id: "timezone_id";
    }>;
    static get BusinessVerificationStatus(): Readonly<{
        expired: "expired";
        failed: "failed";
        ineligible: "ineligible";
        not_verified: "not_verified";
        pending: "pending";
        pending_need_more_info: "pending_need_more_info";
        pending_submission: "pending_submission";
        rejected: "rejected";
        revoked: "revoked";
        verified: "verified";
    }>;
    static get Tasks(): Readonly<{
        develop: "DEVELOP";
        manage: "MANAGE";
        manage_extensions: "MANAGE_EXTENSIONS";
        manage_phone: "MANAGE_PHONE";
        manage_phone_assets: "MANAGE_PHONE_ASSETS";
        manage_templates: "MANAGE_TEMPLATES";
        messaging: "MESSAGING";
        view_cost: "VIEW_COST";
        view_phone_assets: "VIEW_PHONE_ASSETS";
        view_templates: "VIEW_TEMPLATES";
    }>;
    static get Category(): Readonly<{
        authentication: "AUTHENTICATION";
        marketing: "MARKETING";
        utility: "UTILITY";
    }>;
    static get DisplayFormat(): Readonly<{
        order_details: "ORDER_DETAILS";
    }>;
    static get ParameterFormat(): Readonly<{
        named: "NAMED";
        positional: "POSITIONAL";
    }>;
    static get SubCategory(): Readonly<{
        order_details: "ORDER_DETAILS";
        order_status: "ORDER_STATUS";
    }>;
    static get ProviderName(): Readonly<{
        billdesk: "BILLDESK";
        payu: "PAYU";
        razorpay: "RAZORPAY";
        upi_vpa: "UPI_VPA";
        zaakpay: "ZAAKPAY";
    }>;
    getActivities(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCallAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversationAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDataset(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createDataset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Dataset>;
    getFlows(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createFlow(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createGeneratePaymentConfigurationOauthLink(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getMessageCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMessageTemplatePreviews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    createMigrateFlow(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    createMigrateMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    deletePaymentConfiguration(params?: Record<string, any>): Promise<any>;
    getPaymentConfiguration(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPaymentConfiguration(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getPaymentConfigurations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPhoneNumbers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoneNumber(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getPricingAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductCatalog(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSetOboMobilityIntent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createSetSolutionMigrationIntent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getSolutions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getTemplateAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTemplateGroupAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTemplateGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTemplateGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getTemplatePerformanceMetrics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpsertMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getWelcomeMessageSequences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
    update(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
}
