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
    createAccessToken(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdStudy(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdStudy>;
    createAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccount>;
    createAdNetworkApplication(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Application>;
    getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getAdNetworkAnalyticsResults(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsReportingMmmReports(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdsPixel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdsPixel>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAnPlacements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBlockListDraft(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getBusinessAssetGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessInvoices(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBusinessUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<BusinessUser>;
    createClaimCustomConversion(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CustomConversion>;
    getClientAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createClientApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getClientOffsiteSignalContainerBusinessObjects(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getClientPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createClientPage(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getClientPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getClientWhatsAppBusinessAccounts(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    deleteClients(params?: Record<string, any>): Promise<any>;
    getClients(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCollaborativeAdsCollaborationRequests(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createCollaborativeAdsCollaborationRequest(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CPASCollaborationRequest>;
    getCollaborativeAdsSuggestedPartners(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCommerceMerchantSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCpasBusinessSetupConfig(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCpasBusinessSetupConfig(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CPASBusinessSetupConfig>;
    getCpasMerchantConfig(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCreditCards(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomConversion(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CustomConversion>;
    createDraftNegativeKeywordList(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getEventSourceGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEventSourceGroup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<EventSourceGroup>;
    getExtendedCreditApplications(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getExtendedCredits(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInitiatedAudienceSharingRequests(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    deleteInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstagramBusinessAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteManagedBusinesses(params?: Record<string, any>): Promise<any>;
    createManagedBusiness(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    createManagedPartnerBusinessSetup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    deleteManagedPartnerBusinesses(params?: Record<string, any>): Promise<any>;
    createManagedPartnerBusiness(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    createManagedPartnerChildBusinessAsset(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getNegativeKeywordLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOfflineConversionDataSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<OfflineConversionDataSet>;
    getOwnedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getOwnedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    deleteOwnedBusinesses(params?: Record<string, any>): Promise<any>;
    getOwnedBusinesses(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedBusiness(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getOwnedInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOwnedOffsiteSignalContainerBusinessObjects(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getOwnedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedPage(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Business>;
    getOwnedPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOwnedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOwnedProductCatalog(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProductCatalog>;
    getOwnedWhatsAppBusinessAccounts(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    deletePages(params?: Record<string, any>): Promise<any>;
    createPartnerPremiumOption(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getPendingClientAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingClientApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingClientPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingOwnedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingOwnedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPendingSharedOffsiteSignalContainerBusinessObjects(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getPendingUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPixelTo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getReceivedAudienceSharingRequests(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getSystemUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSystemUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<SystemUser>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Business>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Business>;
}
