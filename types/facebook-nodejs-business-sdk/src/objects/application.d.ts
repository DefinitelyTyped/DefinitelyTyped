import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * Application

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Application extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SupportedPlatforms(): Record<string, any>;
    static get AnPlatforms(): Record<string, any>;
    static get Platform(): Record<string, any>;
    static get RequestType(): Record<string, any>;
    static get MutationMethod(): Record<string, any>;
    static get PostMethod(): Record<string, any>;
    static get LoggingSource(): Record<string, any>;
    static get LoggingTarget(): Record<string, any>;
    static get OwnerPermissions(): Record<string, any>;
    static get PartnerPermissions(): Record<string, any>;
    deleteAccounts(params?: Record<string, any>): Promise<any>;
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAdPlacementGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdNetworkAnalytic(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAemAttribution(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAemConversionFilter(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAemConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createAemSkanReadiness(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAggregateRevenue(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAppCapiSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAppEventTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAppIndexing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createAppIndexingSession(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppInstalledGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAppPushDeviceToken(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppAssets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAsset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getButtonAutoDetectionDeviceSelection(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCodelessEventMapping(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createDomainReport(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getIapPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLinkedDataset(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMmpAuditing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMobileSdkGk(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createMonetizedDigitalStoreObject(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getObjectTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createOccludesPopup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createPageActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createPaymentCurrency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getServerDomainInfos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSubscribedDomains(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSubscribedDomain(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    deleteSubscriptions(params?: Record<string, any>): Promise<any>;
    createSubscription(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createWhatsAppBusinessSolution(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getWhatsAppBusinessSolutions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<Application>;    get(fields: string[], params?: Record<string, any>): Promise<Application>;
}
