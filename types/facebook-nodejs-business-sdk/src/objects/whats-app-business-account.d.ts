import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalog from './product-catalog';
/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
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
    getAssignedUsers(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getConversationAnalytics(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlows(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFlow(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMessageCampaigns(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMessageTemplatePreviews(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteMessageTemplates(params?: Record<any, any>): Promise<any>;
    getMessageTemplates(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMessageTemplate(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    createMigrateMessageTemplate(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoneNumber(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<any, any>): Promise<any>;
    getProductCatalogs(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductCatalog(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getSchedules(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteSubscribedApps(params?: Record<any, any>): Promise<any>;
    getSubscribedApps(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSubscribedApp(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getTemplateAnalytics(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTemplatePerformanceMetrics(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpsertMessageTemplate(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    get(fields: Array<string>, params?: Record<any, any>): WhatsAppBusinessAccount;
    update(fields: Array<string>, params?: Record<any, any>): WhatsAppBusinessAccount;
}
