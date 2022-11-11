import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdPlacePageSet from './ad-place-page-set';
import AdCreative from './ad-creative';
import AdImage from './ad-image';
import AdLabel from './ad-label';
import PlayableContent from './playable-content';
import AdRule from './ad-rule';
import Ad from './ad';
import AdSet from './ad-set';
import AdsPixel from './ads-pixel';
import AdVideo from './ad-video';
import Campaign from './campaign';
import AdAsyncRequestSet from './ad-async-request-set';
import CustomAudience from './custom-audience';
import CustomConversion from './custom-conversion';
import AdReportRun from './ad-report-run';
import PublisherBlockList from './publisher-block-list';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import AdAccountSubscribedApps from './ad-account-subscribed-apps';
export default class AdAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Currency(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get ClaimObjective(): Record<string, any>;
    static get ContentType(): Record<string, any>;
    static get Subtype(): Record<string, any>;
    getActivities(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdPlacePageSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdPlacePageSet(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdPlacePageSet>;
    createAdPlacePageSetsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdPlacePageSet>;
    getAdSavedKeywords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdCloudPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdCreative(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdCreative>;
    getAdCreativesByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAdImages(params?: Record<string, any>): Promise<any>;
    getAdImages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdImage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdImage>;
    getAdLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdLabel>;
    getAdPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdPlayable(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PlayableContent>;
    getAdRulesHistory(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdRulesLibrary(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdRulesLibrary(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdRule>;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAd(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsVolume(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdSet>;
    getAdSetsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdsPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getAdvertisableApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAdVideos(params?: Record<string, any>): Promise<any>;
    getAdVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getAffectedAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccount>;
    createAsyncBatchRequest(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Campaign>;
    getAsyncRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAsyncAdRequestSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAsyncAdRequestSet(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAsyncRequestSet>;
    createBlockListDraft(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccount>;
    getBroadTargetingCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteCampaigns(params?: Record<string, any>): Promise<any>;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCampaign(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getCampaignsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConnectedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomAudience(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getCustomAudiencesTos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomAudiencesTo(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccount>;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomConversion>;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDeprecatedTargetingAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGeneratePreViews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getImpactingAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIosFourteenCampaignLimits(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createManagedPartnerAd(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getMatchedSearchApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMaxBid(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMinimumBudgets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOnBehalfRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductAudience(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getPromotePages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPublisherBlockLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPublisherBlockList(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PublisherBlockList>;
    getReachEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getReachFrequencyPredictions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReachFrequencyPrediction(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ReachFrequencyPrediction>;
    getSavedAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccountSubscribedApps>;
    getTargetingBrowse(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSuggestions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingValidation(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTracking(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTracking(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteUsersOfAnyAudience(params?: Record<string, any>): Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
    update(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
}
