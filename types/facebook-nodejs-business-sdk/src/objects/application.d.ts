import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class Application extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SupportedPlatforms(): Record<string, any>;
    static get AnPlatforms(): Record<string, any>;
    static get Platform(): Record<string, any>;
    static get RequestType(): Record<string, any>;
    static get MutationMethod(): Record<string, any>;
    static get PostMethod(): Record<string, any>;
    static get ScoreType(): Record<string, any>;
    static get SortOrder(): Record<string, any>;
    static get LoggingSource(): Record<string, any>;
    static get LoggingTarget(): Record<string, any>;
    deleteAccounts(params?: Record<string, any>): Promise<any>;
    getAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createActivity(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAdPlacementGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdPlacementGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdPlacementGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdNetworkPlacements(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdNetworkAnalytics(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdNetworkAnalytic(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdNetworkAnalyticsResults(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAemConversionConfigs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAemConversionFilter(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAemConversionFilter(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAemConversionFilter(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAemConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createAemSkanReadiness(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAggregateRevenue(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAndroidDialogConfigs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAppEventTypes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAppEventTypes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAppEventTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppIndexing(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createAppIndexingSession(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAppInstalledGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAppInstalledGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAppInstalledGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAppPushDeviceToken(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAppAssets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAppAssets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAppAssets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAsset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteBanned(params?: Record<string, any>): Promise<any>;
    getButtonAutoDetectionDeviceSelection(
        fields: string[],
        params?: Record<string, any>,
    ): Promise<Cursor>;
    getButtonAutoDetectionDeviceSelection(
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: false,
    ): Cursor;
    getButtonAutoDetectionDeviceSelection(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor | Promise<Cursor>;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCloudbridgeSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCodelessEventMapping(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getDaChecks(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDaChecks(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getEvents(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getEvents(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsightsPushSchedule(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsightsPushSchedule(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsightsPushSchedule(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInsightsPushSchedule(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getIosDialogConfigs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLeaderboardsCreate(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createLeaderboardsDeleteEntry(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createMmpAuditing(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getMobileSdkGk(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMobileSdkGk(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMobileSdkGk(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMonetizedDigitalStoreObjects(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMonetizedDigitalStoreObject(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getObjectTypes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getObjectTypes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getObjectTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createOccludesPopup(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createPageActivity(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createPaymentCurrency(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getPermissions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPermissions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProducts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPurchases(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPurchases(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRoles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRoles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSubscribedDomains(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSubscribedDomains(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedDomains(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomain(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSubscribedDomainsPhishing(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedDomainsPhishing(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    deleteSubscriptions(params?: Record<string, any>): Promise<any>;
    createSubscription(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createUserProperty(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Application>;
    update(fields: string[], params?: Record<string, any>): Promise<Application>;
}
