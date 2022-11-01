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
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getAdPlacementGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdNetworkPlacements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAemConversionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAemConversionFilter(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAggregateRevenue(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAppEventTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getAppInstalledGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAppPushDeviceToken(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAppAssets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAsset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Application>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteBanned(params?: Record<string, any>): Promise<any>;
    getButtonAutoDetectionDeviceSelection(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCloudbridgeSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCodelessEventMapping(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsPushSchedule(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInsightsPushSchedule(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getIosDialogConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getMobileSdkGk(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMonetizedDigitalStoreObjects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMonetizedDigitalStoreObject(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getObjectTypes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPurchases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSubscribedDomains(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedDomain(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getSubscribedDomainsPhishing(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
