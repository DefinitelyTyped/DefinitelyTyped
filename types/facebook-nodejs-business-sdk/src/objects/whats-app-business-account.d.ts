import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductCatalog from './product-catalog';
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Category(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<WhatsAppBusinessAccount>;
    getAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConversationAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
    getMessageTemplates(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMessageTemplate(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<WhatsAppBusinessAccount>;
    getPhoneNumbers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoneNumber(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
    getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductCatalog(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<WhatsAppBusinessAccount>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
}
