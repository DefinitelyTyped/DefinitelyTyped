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
import AssignedUser from './assigned-user';
import AdAccount from './ad-account';
import Application from './application';
import CustomConversion from './custom-conversion';
import InstagramUser from './instagram-user';
import Page from './page';
import AdsPixel from './ads-pixel';
import ProductCatalog from './product-catalog';

/**
 * BusinessAssetGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      owner_business: 'owner_business',
    });
  }

  static get AdaccountTasks () {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      draft: 'DRAFT',
      manage: 'MANAGE',
    });
  }
  static get OfflineConversionDataSetTasks () {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      manage: 'MANAGE',
      upload: 'UPLOAD',
      view: 'VIEW',
    });
  }
  static get PageTasks () {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      cashier_role: 'CASHIER_ROLE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      messaging: 'MESSAGING',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      profile_plus_advertise: 'PROFILE_PLUS_ADVERTISE',
      profile_plus_analyze: 'PROFILE_PLUS_ANALYZE',
      profile_plus_create_content: 'PROFILE_PLUS_CREATE_CONTENT',
      profile_plus_facebook_access: 'PROFILE_PLUS_FACEBOOK_ACCESS',
      profile_plus_full_control: 'PROFILE_PLUS_FULL_CONTROL',
      profile_plus_manage: 'PROFILE_PLUS_MANAGE',
      profile_plus_manage_leads: 'PROFILE_PLUS_MANAGE_LEADS',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get PixelTasks () {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      edit: 'EDIT',
      upload: 'UPLOAD',
    });
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_adaccounts',
      params
    );
  }

  getContainedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/contained_adaccounts'
    );
  }

  createContainedAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_adaccounts',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedApplications (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_applications',
      params
    );
  }

  getContainedApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/contained_applications'
    );
  }

  createContainedApplication (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_applications',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedCustomConversions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_custom_conversions',
      params
    );
  }

  getContainedCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/contained_custom_conversions'
    );
  }

  createContainedCustomConversion (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_custom_conversions',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedInstagramAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_instagram_accounts',
      params
    );
  }

  getContainedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/contained_instagram_accounts'
    );
  }

  createContainedInstagramAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_instagram_accounts',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedPages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_pages',
      params
    );
  }

  getContainedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/contained_pages'
    );
  }

  createContainedPage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_pages',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedPixels (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_pixels',
      params
    );
  }

  getContainedPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/contained_pixels'
    );
  }

  createContainedPixel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_pixels',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }

  deleteContainedProductCatalogs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_product_catalogs',
      params
    );
  }

  getContainedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/contained_product_catalogs'
    );
  }

  createContainedProductCatalog (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_product_catalogs',
      fields,
      params,
      BusinessAssetGroup,
      pathOverride,
    );
  }


  get (fields: Array<string>, params: Object = {}): BusinessAssetGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessAssetGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
