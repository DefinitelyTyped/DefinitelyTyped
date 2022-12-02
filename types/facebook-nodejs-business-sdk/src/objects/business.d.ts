import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import Application from './application';
import AdsPixel from './ads-pixel';
import BusinessUser from './business-user';
import CustomConversion from './custom-conversion';
import ProductCatalog from './product-catalog';
import CPASCollaborationRequest from './cpas-collaboration-request';
import CPASBusinessSetupConfig from './cpas-business-setup-config';
import EventSourceGroup from './event-source-group';
import OfflineConversionDataSet from './offline-conversion-data-set';
import SystemUser from './system-user';
export default class Business extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get TwoFactorType(): Record<string, any>;
    static get Vertical(): Record<string, any>;
    static get PermittedTasks(): Record<string, any>;
    static get SurveyBusinessType(): Record<string, any>;
    static get PagePermittedTasks(): Record<string, any>;
    createAccessToken(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdStudy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    createAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    createAdNetworkApplication(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdNetworkAnalytics(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdNetworkAnalytic(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdNetworkAnalyticsResults(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsReportingMmmReports(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsPixels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsPixels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdsPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAnPlacements(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAnPlacements(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAnPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBlockListDraft(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getBusinessAssetGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBusinessAssetGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBusinessAssetGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBusinessInvoices(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBusinessInvoices(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBusinessInvoices(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBusinessUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBusinessUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBusinessUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBusinessUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessUser>;
    createClaimCustomConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomConversion>;
    getClientAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getClientApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createClientApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getClientOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getClientOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getClientOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getClientPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createClientPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getClientPixels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientPixels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getClientProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getClientWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClientWhatsAppBusinessAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClientWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteClients(params?: Record<string, any>): Promise<any>;
    getClients(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClients(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClients(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborativeAdsCollaborationRequests(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getCollaborativeAdsCollaborationRequests(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getCollaborativeAdsCollaborationRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    createCollaborativeAdsCollaborationRequest(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CPASCollaborationRequest>;
    getCollaborativeAdsSuggestedPartners(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getCollaborativeAdsSuggestedPartners(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getCollaborativeAdsSuggestedPartners(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceMerchantSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCpasBusinessSetupConfig(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCpasBusinessSetupConfig(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCpasBusinessSetupConfig(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCpasBusinessSetupConfig(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CPASBusinessSetupConfig>;
    getCpasMerchantConfig(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCpasMerchantConfig(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCpasMerchantConfig(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCreditCards(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCreditCards(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCreditCards(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomConversion>;
    createDraftNegativeKeywordList(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getEventSourceGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getEventSourceGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getEventSourceGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createEventSourceGroup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<EventSourceGroup>;
    getExtendedCreditApplications(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getExtendedCreditApplications(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getExtendedCreditApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getExtendedCredits(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getExtendedCredits(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getExtendedCredits(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInitiatedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getInitiatedAudienceSharingRequests(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getInitiatedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    deleteInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInstagramBusinessAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstagramBusinessAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstagramBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteManagedBusinesses(params?: Record<string, any>): Promise<any>;
    createManagedBusiness(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    createManagedPartnerBusinessSetup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    deleteManagedPartnerBusinesses(params?: Record<string, any>): Promise<any>;
    createManagedPartnerBusiness(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createManagedPartnerChildBusinessAsset(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getNegativeKeywordLists(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getNegativeKeywordLists(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getNegativeKeywordLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOfflineConversionDataSet(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getOwnedAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwnedAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getOwnedApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwnedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    deleteOwnedBusinesses(params?: Record<string, any>): Promise<any>;
    getOwnedBusinesses(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedBusinesses(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedBusinesses(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwnedBusiness(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getOwnedInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOwnedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getOwnedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getOwnedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getOwnedPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwnedPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getOwnedPixels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedPixels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOwnedProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOwnedProductCatalog(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getOwnedWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOwnedWhatsAppBusinessAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOwnedWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deletePages(params?: Record<string, any>): Promise<any>;
    createPartnerPremiumOption(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getPendingClientAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingClientAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingClientAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPendingClientApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingClientApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingClientApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPendingClientPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingClientPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingClientPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPendingOwnedAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingOwnedAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingOwnedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPendingOwnedPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingOwnedPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingOwnedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPendingSharedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getPendingSharedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getPendingSharedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getPendingUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPendingUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPendingUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPicture(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPixelTo(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getReceivedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getReceivedAudienceSharingRequests(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getReceivedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getSystemUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSystemUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSystemUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSystemUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<SystemUser>;
    get(fields: string[], params?: Record<string, any>): Promise<Business>;
    update(fields: string[], params?: Record<string, any>): Promise<Business>;
}
