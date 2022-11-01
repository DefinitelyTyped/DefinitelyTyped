import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalog from './product-catalog';
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Category(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConversationAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMessageTemplate(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoneNumber(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductCatalog(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<WhatsAppBusinessAccount>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
}
