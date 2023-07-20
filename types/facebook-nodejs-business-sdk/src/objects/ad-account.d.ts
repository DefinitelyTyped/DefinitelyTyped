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
    getActivities(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getActivities(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getActivities(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdPlacePageSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdPlacePageSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdPlacePageSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
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
    getAdSavedKeywords(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdSavedKeywords(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSavedKeywords(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdCloudPlayables(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdCloudPlayables(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCloudPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdCreatives(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdCreatives(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdCreative(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdCreative>;
    getAdCreativesByLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdCreativesByLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCreativesByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAdImages(params?: Record<string, any>): Promise<any>;
    getAdImages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdImages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdImages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdImage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdImage>;
    getAdLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdLabel>;
    getAdPlayables(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdPlayables(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdPlayables(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdPlayable(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PlayableContent>;
    getAdRulesHistory(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdRulesHistory(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdRulesHistory(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdRulesLibrary(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdRulesLibrary(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdRulesLibrary(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdRulesLibrary(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdRule>;
    getAds(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAds(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAd(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsReportingMmmReports(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsReportingMmmReports(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsVolume(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsVolume(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsVolume(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsByLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsByLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdSet>;
    getAdSetsByLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdSetsByLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSetsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdsPixels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsPixels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdsPixel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getAdvertisableApplications(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdvertisableApplications(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdvertisableApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAdVideos(params?: Record<string, any>): Promise<any>;
    getAdVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getAffectedAdSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAffectedAdSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAffectedAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getApplications(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getApplications(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
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
    getAsyncRequests(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAsyncRequests(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAsyncRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAsyncAdRequestSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAsyncAdRequestSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAsyncAdRequestSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
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
    getBroadTargetingCategories(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBroadTargetingCategories(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBroadTargetingCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteCampaigns(params?: Record<string, any>): Promise<any>;
    getCampaigns(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCampaigns(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCampaign(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getCampaignsByLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCampaignsByLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaignsByLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConnectedInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getConnectedInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getConnectedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomAudiences(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomAudiences(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomAudience(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getCustomAudiencesTos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomAudiencesTos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomAudiencesTos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomAudiencesTo(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccount>;
    getCustomConversions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomConversions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomConversion>;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDeliveryEstimate(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDeprecatedTargetingAdSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDeprecatedTargetingAdSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDeprecatedTargetingAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getGeneratePreViews(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getGeneratePreViews(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getGeneratePreViews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getImpactingAdStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getImpactingAdStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getImpactingAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsightsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getIosFourteenCampaignLimits(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getIosFourteenCampaignLimits(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getIosFourteenCampaignLimits(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createManagedPartnerAd(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getMatchedSearchApplications(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMatchedSearchApplications(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMatchedSearchApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMaxBid(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMaxBid(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMaxBid(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMinimumBudgets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMinimumBudgets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMinimumBudgets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOnBehalfRequests(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOnBehalfRequests(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOnBehalfRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductAudience(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getPromotePages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPromotePages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPromotePages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPublisherBlockLists(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPublisherBlockLists(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPublisherBlockLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPublisherBlockList(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PublisherBlockList>;
    getReachEstimate(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReachEstimate(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReachEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getReachFrequencyPredictions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReachFrequencyPredictions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReachFrequencyPredictions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReachFrequencyPrediction(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ReachFrequencyPrediction>;
    getSavedAudiences(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSavedAudiences(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSavedAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSubscribedApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdAccountSubscribedApps>;
    getTargetingBrowse(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingBrowse(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingBrowse(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSearch(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingSearch(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSuggestions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingSuggestions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingSuggestions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingValidation(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingValidation(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingValidation(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTracking(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTracking(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTracking(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTracking(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdAccount>;
    getUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteUsersOfAnyAudience(params?: Record<string, any>): Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
    update(fields: string[], params?: Record<string, any>): Promise<AdAccount>;
}
