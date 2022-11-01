import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Page from './page';
import AdStudy from './ad-study';
import Business from './business';
import Post from './post';
import FundraiserPersonToCharity from './fundraiser-person-to-charity';
import GameItem from './game-item';
import LiveVideo from './live-video';
import Photo from './photo';
import AdVideo from './ad-video';
export default class User extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LocalNewsMegaphoneDismissStatus(): Record<string, any>;
    static get LocalNewsSubscriptionStatus(): Record<string, any>;
    static get Filtering(): Record<string, any>;
    static get Type(): Record<string, any>;
    deleteAccessTokens(params?: Record<string, any>): Promise<any>;
    createAccessToken(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdStudy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createApplication(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getAppRequestFormerRecipients(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getAppRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedBusinessAssetGroups(
        fields: Array<string>,
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    getAssignedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAvatars(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteBusinesses(params?: Record<string, any>): Promise<any>;
    getBusinesses(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBusiness(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<Business>;
    getConversations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getFriends(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFundraisers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFundraiser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<FundraiserPersonToCharity>;
    createGameItem(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<GameItem>;
    createGameTime(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForBusiness(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<LiveVideo>;
    getMusic(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createNotification(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<User>;
    getPaymentTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deletePermissions(params?: Record<string, any>): Promise<any>;
    getPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPersonalAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRichMediaDocuments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createStagingResource(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<User>;
    getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<User>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<User>;
}
