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
    getAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createActivity(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAdPlacementGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdNetworkPlacements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAdNetworkAnalyticsResults(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAemConversionConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAemConversionFilter(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAemConversion(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createAemSkanReadiness(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAggregateRevenue(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getAndroidDialogConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAppEventTypes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAppIndexing(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createAppIndexingSession(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAppInstalledGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAppPushDeviceToken(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAppAssets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAsset(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getAuthorizedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteBanned(params?: Record<string, any>): Promise<any>;
    getButtonAutoDetectionDeviceSelection(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCloudbridgeSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCodelessEventMapping(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getDaChecks(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsPushSchedule(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInsightsPushSchedule(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getIosDialogConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLeaderboardsCreate(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createLeaderboardsDeleteEntry(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createMmpAuditing(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getMobileSdkGk(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMonetizedDigitalStoreObjects(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createMonetizedDigitalStoreObject(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getObjectTypes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createOccludesPopup(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createPageActivity(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    createPaymentCurrency(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPurchases(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSubscribedDomains(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedDomain(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    getSubscribedDomainsPhishing(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedDomainsPhishing(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Application>;
    deleteSubscriptions(params?: Record<string, any>): Promise<any>;
    createSubscription(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createUpload(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createUserProperty(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Application>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Application>;
}
