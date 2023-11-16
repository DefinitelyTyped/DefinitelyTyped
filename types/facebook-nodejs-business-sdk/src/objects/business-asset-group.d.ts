import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * BusinessAssetGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        owner_business: "owner_business";
    }>;
    static get AdaccountTasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        draft: "DRAFT";
        manage: "MANAGE";
    }>;
    static get OfflineConversionDataSetTasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        manage: "MANAGE";
        upload: "UPLOAD";
        view: "VIEW";
    }>;
    static get PageTasks(): Readonly<{
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        cashier_role: "CASHIER_ROLE";
        create_content: "CREATE_CONTENT";
        manage: "MANAGE";
        manage_jobs: "MANAGE_JOBS";
        manage_leads: "MANAGE_LEADS";
        messaging: "MESSAGING";
        moderate: "MODERATE";
        moderate_community: "MODERATE_COMMUNITY";
        pages_messaging: "PAGES_MESSAGING";
        pages_messaging_subscriptions: "PAGES_MESSAGING_SUBSCRIPTIONS";
        profile_plus_advertise: "PROFILE_PLUS_ADVERTISE";
        profile_plus_analyze: "PROFILE_PLUS_ANALYZE";
        profile_plus_create_content: "PROFILE_PLUS_CREATE_CONTENT";
        profile_plus_facebook_access: "PROFILE_PLUS_FACEBOOK_ACCESS";
        profile_plus_full_control: "PROFILE_PLUS_FULL_CONTROL";
        profile_plus_manage: "PROFILE_PLUS_MANAGE";
        profile_plus_manage_leads: "PROFILE_PLUS_MANAGE_LEADS";
        profile_plus_messaging: "PROFILE_PLUS_MESSAGING";
        profile_plus_moderate: "PROFILE_PLUS_MODERATE";
        profile_plus_moderate_delegate_community: "PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY";
        profile_plus_revenue: "PROFILE_PLUS_REVENUE";
        read_page_mailboxes: "READ_PAGE_MAILBOXES";
        view_monetization_insights: "VIEW_MONETIZATION_INSIGHTS";
    }>;
    static get PixelTasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        analyze: "ANALYZE";
        edit: "EDIT";
        upload: "UPLOAD";
    }>;
    deleteAssignedUsers(params?: Record<any, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<any, any>): Promise<any>;
    getContainedAdAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedAdAccount(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<any, any>): Promise<any>;
    getContainedApplications(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedApplication(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<any, any>): Promise<any>;
    getContainedCustomConversions(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedCustomConversion(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<any, any>): Promise<any>;
    getContainedInstagramAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedInstagramAccount(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedOfflineConversionDataSets(params?: Record<any, any>): Promise<any>;
    getContainedOfflineConversionDataSets(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedOfflineConversionDataSet(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<any, any>): Promise<any>;
    getContainedPages(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPage(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<any, any>): Promise<any>;
    getContainedPixels(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedPixel(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<any, any>): Promise<any>;
    getContainedProductCatalogs(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createContainedProductCatalog(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    get(fields: Array<string>, params?: Record<any, any>): BusinessAssetGroup;
    update(fields: Array<string>, params?: Record<any, any>): BusinessAssetGroup;
}
