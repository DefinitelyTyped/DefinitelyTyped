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
    getActivities(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdPlacePageSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdPlacePageSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdPlacePageSet>;
    createAdPlacePageSetsAsync(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdPlacePageSet>;
    getAdSavedKeywords(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdCloudPlayables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdCreative(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdCreative>;
    getAdCreativesByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAdImages(params?: Record<string, any>): Promise<any>;
    getAdImages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdImage(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdImage>;
    getAdLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdLabel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdLabel>;
    getAdPlayables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdPlayable(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<PlayableContent>;
    getAdRulesHistory(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdRulesLibrary(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdRulesLibrary(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdRule>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAd(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Ad>;
    getAdsReportingMmmReports(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsVolume(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdSet>;
    getAdSetsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdsPixel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdsPixel>;
    getAdvertisableApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAdVideos(params?: Record<string, any>): Promise<any>;
    getAdVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdVideo>;
    getAffectedAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccount>;
    createAsyncBatchRequest(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Campaign>;
    getAsyncRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAsyncAdRequestSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAsyncAdRequestSet(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAsyncRequestSet>;
    createBlockListDraft(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccount>;
    getBroadTargetingCategories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteCampaigns(params?: Record<string, any>): Promise<any>;
    getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCampaign(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Campaign>;
    getCampaignsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConnectedInstagramAccounts(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCustomAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomAudience(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CustomAudience>;
    getCustomAudiencesTos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomAudiencesTo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccount>;
    getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomConversion(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CustomConversion>;
    getDeliveryEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getDeprecatedTargetingAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGeneratePreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getImpactingAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdReportRun>;
    getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIosFourteenCampaignLimits(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createManagedPartnerAd(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getMatchedSearchApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMaxBid(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getMinimumBudgets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOnBehalfRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductAudience(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CustomAudience>;
    getPromotePages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPublisherBlockLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPublisherBlockList(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<PublisherBlockList>;
    getReachEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getReachFrequencyPredictions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReachFrequencyPrediction(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ReachFrequencyPrediction>;
    getSavedAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccountSubscribedApps>;
    getTargetingBrowse(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSearch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSentenceLines(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSuggestions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingValidation(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTracking(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTracking(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdAccount>;
    getUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteUsersOfAnyAudience(params?: Record<string, any>): Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdAccount>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdAccount>;
}
