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
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdStudy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    createAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    createAdNetworkApplication(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdsPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAnPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBlockListDraft(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getBusinessAssetGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessInvoices(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getClientAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createClientApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getClientOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getClientPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createClientPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getClientPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteClients(params?: Record<string, any>): Promise<any>;
    getClients(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCollaborativeAdsCollaborationRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createCollaborativeAdsCollaborationRequest(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CPASCollaborationRequest>;
    getCollaborativeAdsSuggestedPartners(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCpasBusinessSetupConfig(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCpasBusinessSetupConfig(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CPASBusinessSetupConfig>;
    getCpasMerchantConfig(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCreditCards(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getEventSourceGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEventSourceGroup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<EventSourceGroup>;
    getExtendedCreditApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getExtendedCredits(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInitiatedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    deleteInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstagramBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getNegativeKeywordLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOfflineConversionDataSet(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getOwnedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getOwnedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    deleteOwnedBusinesses(params?: Record<string, any>): Promise<any>;
    getOwnedBusinesses(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedBusiness(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getOwnedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOwnedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getOwnedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedPage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getOwnedPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOwnedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedProductCatalog(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductCatalog>;
    getOwnedWhatsAppBusinessAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deletePages(params?: Record<string, any>): Promise<any>;
    createPartnerPremiumOption(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getPendingClientAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingClientApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingClientPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingOwnedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingOwnedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingSharedOffsiteSignalContainerBusinessObjects(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getPendingUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPixelTo(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getReceivedAudienceSharingRequests(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getSystemUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSystemUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<SystemUser>;
    get(fields: string[], params?: Record<string, any>): Promise<Business>;
    update(fields: string[], params?: Record<string, any>): Promise<Business>;
}
