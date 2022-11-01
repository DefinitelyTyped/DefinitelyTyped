import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class BusinessAssetGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdaccountTasks(): Record<string, any>;
    static get OfflineConversionDataSetTasks(): Record<string, any>;
    static get PageTasks(): Record<string, any>;
    static get PixelTasks(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
    getContainedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<string, any>): Promise<any>;
    getContainedApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedApplication(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
    getContainedCustomConversions(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createContainedCustomConversion(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getContainedInstagramAccounts(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createContainedInstagramAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedOfflineConversionDataSets(params?: Record<string, any>): Promise<any>;
    getContainedOfflineConversionDataSets(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createContainedOfflineConversionDataSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<string, any>): Promise<any>;
    getContainedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedPage(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<string, any>): Promise<any>;
    getContainedPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedPixel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
    getContainedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedProductCatalog(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetGroup>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetGroup>;
}
