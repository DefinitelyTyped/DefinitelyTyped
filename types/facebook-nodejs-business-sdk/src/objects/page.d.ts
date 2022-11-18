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
    getAdsPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getArExperience(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    deleteBlocked(params?: Record<string, any>): Promise<any>;
    getBlocked(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getCallToActions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCanvasElements(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCanvasElement(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CanvasBodyElement>;
    getCanvases(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCanvase(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Canvas>;
    getChatPlugin(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createChatPlugin(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getClaimedUrls(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceEligibility(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceMerchantSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceOrders(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommercePayouts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConversations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopyrightManualClaim(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getCopyrightWhitelistedPartners(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCrosspostWhitelistedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomLabel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PageUserMessageThreadLabel>;
    deleteCustomUserSettings(params?: Record<string, any>): Promise<any>;
    getCustomUserSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomUserSetting(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createExtendThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getFantasyGames(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getGlobalBrandChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getImageCopyrights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createImageCopyright(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ImageCopyright>;
    getIndexedVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstantArticles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstantArticle(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<InstantArticle>;
    getInstantArticlesInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstantArticlesPublish(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getInstantArticlesStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInvoiceAccessBankAccount(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInvoiceAccessInvoiceEdit(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getLeadGenForms(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLeadGenForm(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<LeadgenForm>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    deleteLocations(params?: Record<string, any>): Promise<any>;
    getLocations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLocation(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getMediaFingerprints(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getMessagingFeatureReview(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteMessengerProfile(params?: Record<string, any>): Promise<any>;
    getMessengerProfile(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMessengerProfile(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    createNlpConfig(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getNotificationMessageTokens(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createNotificationMessagesDevSupport(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getPageBackedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getPersonas(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPersona(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Persona>;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPicture(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProfilePictureSource>;
    getPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPublishedPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRatings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getRoles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRtbDynamicPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getScheduledPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSecondaryReceivers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSetting(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getShopSetupStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getTabs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTagged(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTakeThreadControl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Page>;
    getThreadOwner(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getThreads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUnlinkAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getVideoCopyrightRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
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
    getVideoLists(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideoReels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideoReel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    getVisitorPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<Page>;
    update(fields: string[], params?: Record<string, any>): Promise<Page>;
}
