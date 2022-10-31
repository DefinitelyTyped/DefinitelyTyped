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
    createAcknowledgeOrder(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getAdsPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getArExperience(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    deleteBlocked(params?: Record<string, any>): Promise<any>;
    getBlocked(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBlocked(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    createBusinessDatum(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getCallToActions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCanvasElements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCanvasElement(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<CanvasBodyElement>;
    getCanvases(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCanvase(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Canvas>;
    getChatPlugin(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createChatPlugin(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getClaimedUrls(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceEligibility(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceMerchantSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceOrders(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommercePayouts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCommerceTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getConversations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopyrightManualClaim(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getCopyrightWhitelistedPartners(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getCrosspostWhitelistedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomLabel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<PageUserMessageThreadLabel>;
    deleteCustomUserSettings(params?: Record<string, any>): Promise<any>;
    getCustomUserSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCustomUserSetting(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createExtendThreadControl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getFantasyGames(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getGlobalBrandChildren(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getImageCopyrights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createImageCopyright(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ImageCopyright>;
    getIndexedVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInstantArticles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstantArticle(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<InstantArticle>;
    getInstantArticlesInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstantArticlesPublish(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getInstantArticlesStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInvoiceAccessBankAccount(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInvoiceAccessInvoiceEdit(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getLeadGenForms(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLeadGenForm(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<LeadgenForm>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<LiveVideo>;
    deleteLocations(params?: Record<string, any>): Promise<any>;
    getLocations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLocation(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getMediaFingerprints(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMediaFingerprint(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<MediaFingerprint>;
    createMessageAttachment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    createMessage(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getMessagingFeatureReview(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteMessengerProfile(params?: Record<string, any>): Promise<any>;
    getMessengerProfile(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createMessengerProfile(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    createNlpConfig(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getNotificationMessageTokens(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createNotificationMessagesDevSupport(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getPageBackedInstagramAccounts(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createPageBackedInstagramAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<InstagramUser>;
    createPageWhatsappNumberVerification(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    createPassThreadControl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    createPassThreadMetadatum(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getPersonas(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPersona(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Persona>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPicture(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ProfilePictureSource>;
    getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPublishedPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRatings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReleaseThreadControl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    createRequestThreadControl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRtbDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getScheduledPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSecondaryReceivers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSetting(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getShopSetupStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
    getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSubscribedApp(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getTabs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTagged(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTakeThreadControl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getThreadOwner(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getThreads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUnlinkAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Page>;
    getVideoCopyrightRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideoCopyrightRule(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<VideoCopyrightRule>;
    createVideoCopyright(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<VideoCopyright>;
    getVideoLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideoReels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideoReel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdVideo>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdVideo>;
    getVisitorPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Page>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Page>;
}
