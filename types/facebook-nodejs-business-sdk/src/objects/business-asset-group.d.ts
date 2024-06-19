import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * BusinessAssetGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdaccountTasks(): Record<string, any>;
    static get OfflineConversionDataSetTasks(): Record<string, any>;
    static get PageTasks(): Record<string, any>;
    static get PixelTasks(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
    getContainedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedAdAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<string, any>): Promise<any>;
    getContainedApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedApplication(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
    getContainedCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedCustomConversion(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getContainedInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedInstagramAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<string, any>): Promise<any>;
    getContainedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPage(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<string, any>): Promise<any>;
    getContainedPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPixel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
    getContainedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedProductCatalog(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BusinessAssetGroup>;
    get(fields: Array<string>, params?: Record<string, any>): BusinessAssetGroup;
    update(fields: Array<string>, params?: Record<string, any>): BusinessAssetGroup;
}
