import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductCatalog from "./product-catalog";
/**
 * WhatsAppBusinessAccount

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get DisplayFormat(): Record<string, any>;
    static get SubCategory(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getConversationAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDccConfig(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlows(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFlow(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMessageCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMessageTemplatePreviews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    createMigrateMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoneNumber(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductCatalog(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSetOboMobilityIntent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getSolutions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    getTemplateAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTemplatePerformanceMetrics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpsertMessageTemplate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<WhatsAppBusinessAccount>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
}
