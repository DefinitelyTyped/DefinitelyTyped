import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * BusinessAssetGroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdaccountTasks(): Record<string, any>;
    static get OfflineConversionDataSetTasks(): Record<string, any>;
    static get PageTasks(): Record<string, any>;
    static get PixelTasks(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
    getContainedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<string, any>): Promise<any>;
    getContainedApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedApplication(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
    getContainedCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedCustomConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getContainedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedInstagramAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<string, any>): Promise<any>;
    getContainedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<string, any>): Promise<any>;
    getContainedPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
    getContainedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedProductCatalog(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;
}
