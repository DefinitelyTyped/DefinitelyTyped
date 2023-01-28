import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalog from './product-catalog';
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Category(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAudiences(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversationAnalytics(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getConversationAnalytics(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getConversationAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMessageTemplates(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMessageTemplates(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMessageTemplate(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPhoneNumbers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPhoneNumbers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoneNumber(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductCatalog(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSubscribedApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
}
