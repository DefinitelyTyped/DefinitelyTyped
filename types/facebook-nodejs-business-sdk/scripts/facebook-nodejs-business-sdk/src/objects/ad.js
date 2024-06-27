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
import AdCreative from './ad-creative';
import AdRule from './ad-rule';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';
import Lead from './lead';
import AdPreview from './ad-preview';
import TargetingSentenceLine from './targeting-sentence-line';

/**
 * Ad
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Ad extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      ad_active_time: 'ad_active_time',
      ad_review_feedback: 'ad_review_feedback',
      ad_schedule_end_time: 'ad_schedule_end_time',
      ad_schedule_start_time: 'ad_schedule_start_time',
      adlabels: 'adlabels',
      adset: 'adset',
      adset_id: 'adset_id',
      bid_amount: 'bid_amount',
      bid_info: 'bid_info',
      bid_type: 'bid_type',
      campaign: 'campaign',
      campaign_id: 'campaign_id',
      configured_status: 'configured_status',
      conversion_domain: 'conversion_domain',
      conversion_specs: 'conversion_specs',
      created_time: 'created_time',
      creative: 'creative',
      creative_asset_groups_spec: 'creative_asset_groups_spec',
      demolink_hash: 'demolink_hash',
      display_sequence: 'display_sequence',
      effective_status: 'effective_status',
      engagement_audience: 'engagement_audience',
      failed_delivery_checks: 'failed_delivery_checks',
      id: 'id',
      issues_info: 'issues_info',
      last_updated_by_app_id: 'last_updated_by_app_id',
      name: 'name',
      preview_shareable_link: 'preview_shareable_link',
      priority: 'priority',
      recommendations: 'recommendations',
      source_ad: 'source_ad',
      source_ad_id: 'source_ad_id',
      status: 'status',
      targeting: 'targeting',
      tracking_and_conversion_with_defaults: 'tracking_and_conversion_with_defaults',
      tracking_specs: 'tracking_specs',
      updated_time: 'updated_time',
    });
  }

  static get BidType () {
    return Object.freeze({
      absolute_ocpm: 'ABSOLUTE_OCPM',
      cpa: 'CPA',
      cpc: 'CPC',
      cpm: 'CPM',
      multi_premium: 'MULTI_PREMIUM',
    });
  }
  static get ConfiguredStatus () {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED',
    });
  }
  static get EffectiveStatus () {
    return Object.freeze({
      active: 'ACTIVE',
      adset_paused: 'ADSET_PAUSED',
      archived: 'ARCHIVED',
      campaign_paused: 'CAMPAIGN_PAUSED',
      deleted: 'DELETED',
      disapproved: 'DISAPPROVED',
      in_process: 'IN_PROCESS',
      paused: 'PAUSED',
      pending_billing_info: 'PENDING_BILLING_INFO',
      pending_review: 'PENDING_REVIEW',
      preapproved: 'PREAPPROVED',
      with_issues: 'WITH_ISSUES',
    });
  }
  static get Status () {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED',
    });
  }
  static get DatePreset () {
    return Object.freeze({
      data_maximum: 'data_maximum',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_90d: 'last_90d',
      last_month: 'last_month',
      last_quarter: 'last_quarter',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_year: 'last_year',
      maximum: 'maximum',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday',
    });
  }
  static get ExecutionOptions () {
    return Object.freeze({
      include_recommendations: 'include_recommendations',
      synchronous_ad_review: 'synchronous_ad_review',
      validate_only: 'validate_only',
    });
  }
  static get Operator () {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY',
    });
  }
  static get StatusOption () {
    return Object.freeze({
      active: 'ACTIVE',
      inherited_from_source: 'INHERITED_FROM_SOURCE',
      paused: 'PAUSED',
    });
  }

  getAdCreatives (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreatives'
    );
  }

  createAdLabel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Ad> {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      Ad,
      pathOverride,
    );
  }

  getAdRulesGoverned (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_governed'
    );
  }

  getCopies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/copies'
    );
  }

  createCopy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Ad> {
    return this.createEdge(
      '/copies',
      fields,
      params,
      Ad,
      pathOverride,
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsInsights,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsAsync (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdReportRun> {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdReportRun,
      pathOverride,
    );
  }

  getLeads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Lead,
      fields,
      params,
      fetchFirstPage,
      '/leads'
    );
  }

  getPreviews (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/previews'
    );
  }

  getTargetingSentenceLines (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      TargetingSentenceLine,
      fields,
      params,
      fetchFirstPage,
      '/targetingsentencelines'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): Ad {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Ad {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
