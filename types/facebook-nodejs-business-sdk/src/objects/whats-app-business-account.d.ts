import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductCatalog from "./product-catalog";
/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get DisplayFormat(): Record<string, any>;
    static get SubCategory(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getConversationAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getDccConfig(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFlows(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFlow(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getMessageCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMessageTemplatePreviews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMessageTemplate(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<WhatsAppBusinessAccount>;
    createMigrateMessageTemplate(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoneNumber(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductCatalog(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductCatalog>;
    getSchedules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSetOboMobilityIntent(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getSolutions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSubscribedApp(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<WhatsAppBusinessAccount>;
    getTemplateAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTemplatePerformanceMetrics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpsertMessageTemplate(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<WhatsAppBusinessAccount>;
    get(fields: Array<string>, params?: Record<string, any>): WhatsAppBusinessAccount;
    update(fields: Array<string>, params?: Record<string, any>): WhatsAppBusinessAccount;
}
