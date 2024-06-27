 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Page from './page';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import Album from './album';
import AppRequestFormerRecipient from './app-request-former-recipient';
import AppRequest from './app-request';
import Application from './application';
import BusinessAssetGroup from './business-asset-group';
import ProductCatalog from './product-catalog';
import Avatar from './avatar';
import BusinessUser from './business-user';
import Business from './business';
import UnifiedThread from './unified-thread';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Event from './event';
import Post from './post';
import FundraiserPersonToCharity from './fundraiser-person-to-charity';
import Group from './group';
import UserIDForApp from './user-id-for-app';
import UserIDForPage from './user-id-for-page';
import LiveVideo from './live-video';
import PaymentEnginePayment from './payment-engine-payment';
import Permission from './permission';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import Canvas from './canvas';
import AdVideo from './ad-video';

/**
 * User
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class User extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      age_range: 'age_range',
      avatar_2d_profile_picture: 'avatar_2d_profile_picture',
      birthday: 'birthday',
      community: 'community',
      cover: 'cover',
      currency: 'currency',
      education: 'education',
      email: 'email',
      favorite_athletes: 'favorite_athletes',
      favorite_teams: 'favorite_teams',
      first_name: 'first_name',
      gender: 'gender',
      hometown: 'hometown',
      id: 'id',
      id_for_avatars: 'id_for_avatars',
      inspirational_people: 'inspirational_people',
      install_type: 'install_type',
      installed: 'installed',
      is_guest_user: 'is_guest_user',
      is_work_account: 'is_work_account',
      languages: 'languages',
      last_name: 'last_name',
      link: 'link',
      local_news_megaphone_dismiss_status: 'local_news_megaphone_dismiss_status',
      local_news_subscription_status: 'local_news_subscription_status',
      locale: 'locale',
      location: 'location',
      meeting_for: 'meeting_for',
      middle_name: 'middle_name',
      name: 'name',
      name_format: 'name_format',
      payment_pricepoints: 'payment_pricepoints',
      political: 'political',
      profile_pic: 'profile_pic',
      quotes: 'quotes',
      relationship_status: 'relationship_status',
      shared_login_upgrade_required_by: 'shared_login_upgrade_required_by',
      short_name: 'short_name',
      significant_other: 'significant_other',
      sports: 'sports',
      supports_donate_button_in_live_video: 'supports_donate_button_in_live_video',
      third_party_id: 'third_party_id',
      timezone: 'timezone',
      token_for_business: 'token_for_business',
      updated_time: 'updated_time',
      verified: 'verified',
      video_upload_limits: 'video_upload_limits',
      website: 'website',
    });
  }

  static get LocalNewsMegaphoneDismissStatus () {
    return Object.freeze({
      no: 'NO',
      yes: 'YES',
    });
  }
  static get LocalNewsSubscriptionStatus () {
    return Object.freeze({
      status_off: 'STATUS_OFF',
      status_on: 'STATUS_ON',
    });
  }
  static get Filtering () {
    return Object.freeze({
      ema: 'ema',
      groups: 'groups',
      groups_social: 'groups_social',
    });
  }
  static get Type () {
    return Object.freeze({
      content_update: 'content_update',
      generic: 'generic',
    });
  }

  deleteAccessTokens (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/access_tokens',
      params
    );
  }

  createAccessToken (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<User> {
    return this.createEdge(
      '/access_tokens',
      fields,
      params,
      User,
      pathOverride,
    );
  }

  getAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/accounts',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getAdStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  createAdStudy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdStudy> {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy,
      pathOverride,
    );
  }

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  getAlbums (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createApplication (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<User> {
    return this.createEdge(
      '/applications',
      fields,
      params,
      User,
      pathOverride,
    );
  }

  getAppRequestFormerRecipients (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AppRequestFormerRecipient,
      fields,
      params,
      fetchFirstPage,
      '/apprequestformerrecipients'
    );
  }

  getAppRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AppRequest,
      fields,
      params,
      fetchFirstPage,
      '/apprequests'
    );
  }

  getAssignedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/assigned_applications'
    );
  }

  getAssignedBusinessAssetGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetGroup,
      fields,
      params,
      fetchFirstPage,
      '/assigned_business_asset_groups'
    );
  }

  getAssignedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getAvatars (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Avatar,
      fields,
      params,
      fetchFirstPage,
      '/avatars'
    );
  }

  getBusinessUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/business_users'
    );
  }

  deleteBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/businesses',
      params
    );
  }

  getBusinesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/businesses'
    );
  }

  createBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/businesses',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getConversations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/conversations'
    );
  }

  getCustomLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageUserMessageThreadLabel,
      fields,
      params,
      fetchFirstPage,
      '/custom_labels'
    );
  }

  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Post> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      Post,
      pathOverride,
    );
  }

  getFriends (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/friends'
    );
  }

  getFundraisers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      FundraiserPersonToCharity,
      fields,
      params,
      fetchFirstPage,
      '/fundraisers'
    );
  }

  createFundraiser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<FundraiserPersonToCharity> {
    return this.createEdge(
      '/fundraisers',
      fields,
      params,
      FundraiserPersonToCharity,
      pathOverride,
    );
  }

  getGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  getIdsForApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_apps'
    );
  }

  getIdsForBusiness (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_business'
    );
  }

  getIdsForPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForPage,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_pages'
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo,
      pathOverride,
    );
  }

  createMessengerDesktopPerformanceTrace (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<User> {
    return this.createEdge(
      '/messenger_desktop_performance_traces',
      fields,
      params,
      User,
      pathOverride,
    );
  }

  getMusic (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/music'
    );
  }

  createNotification (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<User> {
    return this.createEdge(
      '/notifications',
      fields,
      params,
      User,
      pathOverride,
    );
  }

  getPaymentTransactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PaymentEnginePayment,
      fields,
      params,
      fetchFirstPage,
      '/payment_transactions'
    );
  }

  deletePermissions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/permissions',
      params
    );
  }

  getPermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Permission,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  getPersonalAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/personal_ad_accounts'
    );
  }

  getPhotos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo,
      pathOverride,
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getRichMediaDocuments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/rich_media_documents'
    );
  }

  createStagingResource (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<User> {
    return this.createEdge(
      '/staging_resources',
      fields,
      params,
      User,
      pathOverride,
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo,
      pathOverride,
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): User {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): User {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
