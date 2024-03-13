import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalog from './product-catalog';
/**
 * WhatsAppBusinessAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_review_status: "account_review_status";
        analytics: "analytics";
        business_verification_status: "business_verification_status";
        country: "country";
        creation_time: "creation_time";
        currency: "currency";
        health_status: "health_status";
        id: "id";
        is_enabled_for_insights: "is_enabled_for_insights";
        message_template_namespace: "message_template_namespace";
        name: "name";
        on_behalf_of_business_info: "on_behalf_of_business_info";
        owner_business: "owner_business";
        owner_business_info: "owner_business_info";
        ownership_type: "ownership_type";
        primary_funding_id: "primary_funding_id";
        purchase_order_number: "purchase_order_number";
        status: "status";
        timezone_id: "timezone_id";
    }>;
    static get Tasks(): Readonly<{
        develop: "DEVELOP";
        manage: "MANAGE";
        manage_extensions: "MANAGE_EXTENSIONS";
        manage_phone: "MANAGE_PHONE";
        manage_phone_assets: "MANAGE_PHONE_ASSETS";
        manage_templates: "MANAGE_TEMPLATES";
        view_cost: "VIEW_COST";
        view_phone_assets: "VIEW_PHONE_ASSETS";
        view_templates: "VIEW_TEMPLATES";
    }>;
    static get Category(): Readonly<{
        authentication: "AUTHENTICATION";
        marketing: "MARKETING";
        utility: "UTILITY";
    }>;
    static get SubCategory(): Readonly<{
        custom: "CUSTOM";
        order_details: "ORDER_DETAILS";
        order_status: "ORDER_STATUS";
    }>;
    deleteAssignedUsers(params?: Record<any, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAssignedUsers(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedUsers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAudiences(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAudiences(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversationAnalytics(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getConversationAnalytics(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getConversationAnalytics(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFlows(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getFlows(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getFlows(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createFlow(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMessageCampaigns(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMessageCampaigns(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMessageCampaigns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMessageTemplatePreviews(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMessageTemplatePreviews(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMessageTemplatePreviews(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteMessageTemplates(params?: Record<any, any>): Promise<any>;
    getMessageTemplates(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMessageTemplates(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMessageTemplates(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMessageTemplate(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    createMigrateMessageTemplate(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPhoneNumbers(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPhoneNumbers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoneNumber(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<any, any>): Promise<any>;
    getProductCatalogs(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getProductCatalogs(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getProductCatalogs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductCatalog(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getSchedules(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSchedules(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSchedules(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<any, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSubscribedApps(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedApps(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getTemplateAnalytics(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTemplateAnalytics(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTemplateAnalytics(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTemplatePerformanceMetrics(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTemplatePerformanceMetrics(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTemplatePerformanceMetrics(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpsertMessageTemplate(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    get(fields: string[], params?: Record<any, any>): Promise<WhatsAppBusinessAccount>;
    update(fields: string[], params?: Record<any, any>): Promise<WhatsAppBusinessAccount>;
}
