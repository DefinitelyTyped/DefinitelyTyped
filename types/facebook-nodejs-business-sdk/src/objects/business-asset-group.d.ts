import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
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
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
    getContainedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<string, any>): Promise<any>;
    getContainedApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedApplication(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
    getContainedCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedCustomConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getContainedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedInstagramAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<string, any>): Promise<any>;
    getContainedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<string, any>): Promise<any>;
    getContainedPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
    getContainedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createContainedProductCatalog(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BusinessAssetGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;
}
