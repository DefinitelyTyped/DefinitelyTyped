import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import ImageCopyright from './image-copyright';
import AdVideo from './ad-video';
import InstagramUser from './instagram-user';
import InstantArticle from './instant-article';
import LeadgenForm from './leadgen-form';
import LiveVideo from './live-video';
import MediaFingerprint from './media-fingerprint';
import Persona from './persona';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import VideoCopyrightRule from './video-copyright-rule';
import VideoCopyright from './video-copyright';
export default class Page extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Attire(): Record<string, any>;
    static get FoodStyles(): Record<string, any>;
    static get PickupOptions(): Record<string, any>;
    static get TemporaryStatus(): Record<string, any>;
    static get PermittedTasks(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    static get Alignment(): Record<string, any>;
    static get EntryPointIcon(): Record<string, any>;
    static get EntryPointLabel(): Record<string, any>;
    static get GreetingDialogDisplay(): Record<string, any>;
    static get GuestChatMode(): Record<string, any>;
    static get MobileChatDisplay(): Record<string, any>;
    static get BackdatedTimeGranularity(): Record<string, any>;
    static get CheckinEntryPoint(): Record<string, any>;
    static get Formatting(): Record<string, any>;
    static get PlaceAttachmentSetting(): Record<string, any>;
    static get PostSurfacesBlacklist(): Record<string, any>;
    static get PostingToRedspace(): Record<string, any>;
    static get TargetSurface(): Record<string, any>;
    static get UnpublishedContentType(): Record<string, any>;
    static get PublishStatus(): Record<string, any>;
    static get MessagingType(): Record<string, any>;
    static get NotificationType(): Record<string, any>;
    static get SenderAction(): Record<string, any>;
    static get Platform(): Record<string, any>;
    static get Model(): Record<string, any>;
    static get DeveloperAction(): Record<string, any>;
    static get SubscribedFields(): Record<string, any>;
    createAcknowledgeOrder(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getAdsPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getAlbums(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAlbums(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getArExperience(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getArExperience(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getArExperience(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAssignedUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    deleteBlocked(params?: Record<string, any>): Promise<any>;
    getBlocked(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBlocked(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBlocked(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBlocked(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createBusinessDatum(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getCallToActions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCallToActions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCallToActions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCanvasElements(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCanvasElements(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCanvasElements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCanvasElement(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CanvasBodyElement>;
    getCanvases(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCanvases(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCanvases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCanvase(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Canvas>;
    getChatPlugin(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getChatPlugin(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getChatPlugin(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createChatPlugin(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getClaimedUrls(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getClaimedUrls(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getClaimedUrls(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceEligibility(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceEligibility(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceEligibility(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceMerchantSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceOrders(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceOrders(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommercePayouts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommercePayouts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCommerceTransactions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCommerceTransactions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConversations(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getConversations(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getConversations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCopyrightManualClaim(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getCopyrightWhitelistedPartners(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCopyrightWhitelistedPartners(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCopyrightWhitelistedPartners(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCrosspostWhitelistedPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCrosspostWhitelistedPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCrosspostWhitelistedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomLabels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomLabels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomLabel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PageUserMessageThreadLabel>;
    deleteCustomUserSettings(params?: Record<string, any>): Promise<any>;
    getCustomUserSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomUserSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomUserSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCustomUserSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getEvents(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getEvents(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExtendThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getFantasyGames(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFantasyGames(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFantasyGames(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFeed(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getFeed(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getGlobalBrandChildren(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getGlobalBrandChildren(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getGlobalBrandChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getGroups(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getGroups(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getImageCopyrights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getImageCopyrights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getImageCopyrights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createImageCopyright(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ImageCopyright>;
    getIndexedVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getIndexedVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getIndexedVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInstantArticles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstantArticles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstantArticles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInstantArticle(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<InstantArticle>;
    getInstantArticlesInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstantArticlesInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstantArticlesInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInstantArticlesPublish(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getInstantArticlesStats(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInstantArticlesStats(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInstantArticlesStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInvoiceAccessBankAccount(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInvoiceAccessBankAccount(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInvoiceAccessBankAccount(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInvoiceAccessInvoiceEdit(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getLeadGenForms(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLeadGenForms(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLeadGenForms(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLeadGenForm(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<LeadgenForm>;
    getLikes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLiveVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLiveVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteLocations(params?: Record<string, any>): Promise<any>;
    getLocations(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLocations(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLocations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLocation(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getMediaFingerprints(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMediaFingerprints(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMediaFingerprints(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMediaFingerprint(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<MediaFingerprint>;
    createMessageAttachment(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createMessage(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getMessagingFeatureReview(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMessagingFeatureReview(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMessagingFeatureReview(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteMessengerProfile(params?: Record<string, any>): Promise<any>;
    getMessengerProfile(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getMessengerProfile(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getMessengerProfile(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMessengerProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    createNlpConfig(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getNotificationMessageTokens(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getNotificationMessageTokens(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getNotificationMessageTokens(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createNotificationMessagesDevSupport(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getPageBackedInstagramAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPageBackedInstagramAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPageBackedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPageBackedInstagramAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<InstagramUser>;
    createPageWhatsappNumberVerification(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    createPassThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    createPassThreadMetadatum(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getPersonas(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPersonas(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPersonas(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPersona(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Persona>;
    getPhotos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPhotos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPicture(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProfilePictureSource>;
    getPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProductCatalogs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductCatalogs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPublishedPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPublishedPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPublishedPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRatings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRatings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRatings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReleaseThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    createRequestThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getRoles(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRoles(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRtbDynamicPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getRtbDynamicPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getRtbDynamicPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getScheduledPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getScheduledPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getScheduledPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSecondaryReceivers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSecondaryReceivers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSecondaryReceivers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSettings(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSettings(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSetting(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getShopSetupStatus(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getShopSetupStatus(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getShopSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSubscribedApps(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getTabs(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTabs(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTabs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTagged(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTagged(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTagged(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTakeThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getThreadOwner(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getThreadOwner(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getThreadOwner(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getThreads(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getThreads(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getThreads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUnlinkAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getVideoCopyrightRules(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideoCopyrightRules(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideoCopyrightRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVideoCopyrightRule(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<VideoCopyrightRule>;
    createVideoCopyright(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<VideoCopyright>;
    getVideoLists(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideoLists(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideoLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideoReels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideoReels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideoReels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVideoReel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getVideos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVideos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getVisitorPosts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getVisitorPosts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getVisitorPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Page>;
    update(fields: string[], params?: Record<string, any>): Promise<Page>;
}
