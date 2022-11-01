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
    createAccessToken(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Page>;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdStudy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAlbums(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createApplication(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getAppRequestFormerRecipients(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAppRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAssignedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAvatars(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getBusinessUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteBusinesses(params?: Record<string, any>): Promise<any>;
    getBusinesses(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createBusiness(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Business>;
    getConversations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomLabels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFeed(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getFriends(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getFundraisers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createFundraiser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<FundraiserPersonToCharity>;
    createGameItem(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<GameItem>;
    createGameTime(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForApps(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForBusiness(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getIdsForPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLiveVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLiveVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideo>;
    getMusic(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createNotification(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getPaymentTransactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deletePermissions(params?: Record<string, any>): Promise<any>;
    getPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPersonalAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRichMediaDocuments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createStagingResource(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<User>;
    getVideos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createVideo(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdVideo>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<User>;
    update(fields: string[], params?: Record<string, any>): Promise<User>;
}
