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
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAdPlacementGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdNetworkAnalytic(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemAttribution(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionFilter(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAemConversion(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createAemSkanReadiness(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAggregateRevenue(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAppCapiSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAppEventTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppIndexing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createAppIndexingSession(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppInstalledGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppPushDeviceToken(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAppAssets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAsset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getButtonAutoDetectionDeviceSelection(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCodelessEventMapping(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createDomainReport(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getIapPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLinkedDataset(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMmpAuditing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getMobileSdkGk(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMonetizedDigitalStoreObject(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getObjectTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOccludesPopup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createPageActivity(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    createPaymentCurrency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getServerDomainInfos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSubscribedDomains(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomain(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    deleteSubscriptions(params?: Record<string, any>): Promise<any>;
    createSubscription(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createWhatsAppBusinessSolution(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getWhatsAppBusinessSolutions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Application>;    get(fields: string[], params?: Record<string, any>): Promise<Application>;
}
