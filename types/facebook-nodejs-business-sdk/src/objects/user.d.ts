import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdStudy from "./ad-study";
import Business from "./business";
import Post from "./post";
import FundraiserPersonToCharity from "./fundraiser-person-to-charity";
import LiveVideo from "./live-video";
import Photo from "./photo";
import AdVideo from "./ad-video";
/**
 * User
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class User extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LocalNewsMegaphoneDismissStatus(): Record<string, any>;
    static get LocalNewsSubscriptionStatus(): Record<string, any>;
    static get Filtering(): Record<string, any>;
    static get Type(): Record<string, any>;
    deleteAccessTokens(params?: Record<string, any>): Promise<any>;
    createAccessToken(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<User>;
    getAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdStudy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdStudy>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createApplication(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<User>;
    getAppRequestFormerRecipients(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAppRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedBusinessAssetGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAvatars(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBusinessUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteBusinesses(params?: Record<string, any>): Promise<any>;
    getBusinesses(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBusiness(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Business>;
    getConversations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCustomLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFeed(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Post>;
    getFriends(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getFundraisers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createFundraiser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<FundraiserPersonToCharity>;
    getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getIdsForApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getIdsForBusiness(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getIdsForPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLiveVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<LiveVideo>;
    createMessengerDesktopPerformanceTrace(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<User>;
    getMusic(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createNotification(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<User>;
    getPaymentTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deletePermissions(params?: Record<string, any>): Promise<any>;
    getPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPersonalAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRichMediaDocuments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createStagingResource(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<User>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdVideo>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): User;
    update(fields: Array<string>, params?: Record<string, any>): User;
}
