import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdAccountBusinessConstraints from "./ad-account-business-constraints";
import AdActivity from "./ad-activity";
import AdPlacePageSet from "./ad-place-page-set";
import AdSavedKeywords from "./ad-saved-keywords";
import AdStudy from "./ad-study";
import CloudGame from "./cloud-game";
import AdCreative from "./ad-creative";
import AdImage from "./ad-image";
import AdLabel from "./ad-label";
import PlayableContent from "./playable-content";
import AdAccountAdRulesHistory from "./ad-account-ad-rules-history";
import AdRule from "./ad-rule";
import Ad from "./ad";
import AdsReportBuilderMMMReport from "./ads-report-builder-mmm-report";
import AdsReportBuilderMMMReportScheduler from "./ads-report-builder-mmm-report-scheduler";
import AdAccountAdVolume from "./ad-account-ad-volume";
import AdSet from "./ad-set";
import AdsPixel from "./ads-pixel";
import Application from "./application";
import AdVideo from "./ad-video";
import Business from "./business";
import AssignedUser from "./assigned-user";
import Campaign from "./campaign";
import AsyncRequest from "./async-request";
import AdAsyncRequestSet from "./ad-async-request-set";
import AudienceFunnel from "./audience-funnel";
import BroadTargetingCategories from "./broad-targeting-categories";
import BusinessProject from "./business-project";
import IGUser from "./ig-user";
import InstagramUser from "./instagram-user";
import AdsConversionGoal from "./ads-conversion-goal";
import BespokePartnerGuidanceLaser from "./bespoke-partner-guidance-laser";
import CustomAudience from "./custom-audience";
import CustomAudiencesTOS from "./custom-audiences-tos";
import CustomConversion from "./custom-conversion";
import AdAccountDeliveryEstimate from "./ad-account-delivery-estimate";
import AdAccountDsaRecommendations from "./ad-account-dsa-recommendations";
import AdPreview from "./ad-preview";
import AdsInsights from "./ads-insights";
import AdReportRun from "./ad-report-run";
import AdAccountIosFourteenCampaignLimits from "./ad-account-ios-fourteen-campaign-limits";
import AdAccountMatchedSearchApplicationsEdgeData from "./ad-account-matched-search-applications-edge-data";
import AdAccountMaxBid from "./ad-account-max-bid";
import MinimumBudget from "./minimum-budget";
import BusinessOwnedObjectOnBehalfOfRequest from "./business-owned-object-on-behalf-of-request";
import Page from "./page";
import PublisherBlockList from "./publisher-block-list";
import AdAccountReachEstimate from "./ad-account-reach-estimate";
import ReachFrequencyPrediction from "./reach-frequency-prediction";
import SavedAudience from "./saved-audience";
import AdAccountSubscribedApps from "./ad-account-subscribed-apps";
import AdAccountTargetingUnified from "./ad-account-targeting-unified";
import TargetingSentenceLine from "./targeting-sentence-line";
import AdAccountTrackingData from "./ad-account-tracking-data";
import AdAccountUser from "./ad-account-user";
import AdsValueAdjustmentRuleCollection from "./ads-value-adjustment-rule-collection";
import AdsValueAdjustmentRule from "./ads-value-adjustment-rule";
/**
 * AdAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccount extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_id: 'account_id',
      account_status: 'account_status',
      ad_account_promotable_objects: 'ad_account_promotable_objects',
      age: 'age',
      agency_client_declaration: 'agency_client_declaration',
      all_capabilities: 'all_capabilities',
      amount_spent: 'amount_spent',
      attribution_spec: 'attribution_spec',
      balance: 'balance',
      brand_safety_content_filter_levels: 'brand_safety_content_filter_levels',
      business: 'business',
      business_city: 'business_city',
      business_country_code: 'business_country_code',
      business_name: 'business_name',
      business_state: 'business_state',
      business_street: 'business_street',
      business_street2: 'business_street2',
      business_zip: 'business_zip',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      capabilities: 'capabilities',
      created_time: 'created_time',
      currency: 'currency',
      custom_audience_info: 'custom_audience_info',
      default_dsa_beneficiary: 'default_dsa_beneficiary',
      default_dsa_payor: 'default_dsa_payor',
      disable_reason: 'disable_reason',
      end_advertiser: 'end_advertiser',
      end_advertiser_name: 'end_advertiser_name',
      existing_customers: 'existing_customers',
      extended_credit_invoice_group: 'extended_credit_invoice_group',
      failed_delivery_checks: 'failed_delivery_checks',
      fb_entity: 'fb_entity',
      funding_source: 'funding_source',
      funding_source_details: 'funding_source_details',
      has_migrated_permissions: 'has_migrated_permissions',
      has_page_authorized_adaccount: 'has_page_authorized_adaccount',
      id: 'id',
      io_number: 'io_number',
      is_attribution_spec_system_default: 'is_attribution_spec_system_default',
      is_direct_deals_enabled: 'is_direct_deals_enabled',
      is_in_3ds_authorization_enabled_market: 'is_in_3ds_authorization_enabled_market',
      is_notifications_enabled: 'is_notifications_enabled',
      is_personal: 'is_personal',
      is_prepay_account: 'is_prepay_account',
      is_tax_id_required: 'is_tax_id_required',
      liable_address: 'liable_address',
      line_numbers: 'line_numbers',
      media_agency: 'media_agency',
      min_campaign_group_spend_cap: 'min_campaign_group_spend_cap',
      min_daily_budget: 'min_daily_budget',
      name: 'name',
      offsite_pixels_tos_accepted: 'offsite_pixels_tos_accepted',
      owner: 'owner',
      owner_business: 'owner_business',
      partner: 'partner',
      rf_spec: 'rf_spec',
      send_bill_to_address: 'send_bill_to_address',
      show_checkout_experience: 'show_checkout_experience',
      sold_to_address: 'sold_to_address',
      spend_cap: 'spend_cap',
      tax_id: 'tax_id',
      tax_id_status: 'tax_id_status',
      tax_id_type: 'tax_id_type',
      timezone_id: 'timezone_id',
      timezone_name: 'timezone_name',
      timezone_offset_hours_utc: 'timezone_offset_hours_utc',
      tos_accepted: 'tos_accepted',
      user_access_expire_time: 'user_access_expire_time',
      user_tasks: 'user_tasks',
      user_tos_accepted: 'user_tos_accepted',
      viewable_business: 'viewable_business'
    });
  }

  static get Currency() {
    return Object.freeze({
      aed: 'AED',
      ars: 'ARS',
      aud: 'AUD',
      bdt: 'BDT',
      bob: 'BOB',
      brl: 'BRL',
      cad: 'CAD',
      chf: 'CHF',
      clp: 'CLP',
      cny: 'CNY',
      cop: 'COP',
      crc: 'CRC',
      czk: 'CZK',
      dkk: 'DKK',
      dzd: 'DZD',
      egp: 'EGP',
      eur: 'EUR',
      gbp: 'GBP',
      gtq: 'GTQ',
      hkd: 'HKD',
      hnl: 'HNL',
      huf: 'HUF',
      idr: 'IDR',
      ils: 'ILS',
      inr: 'INR',
      isk: 'ISK',
      jpy: 'JPY',
      kes: 'KES',
      krw: 'KRW',
      lkr: 'LKR',
      mop: 'MOP',
      mxn: 'MXN',
      myr: 'MYR',
      ngn: 'NGN',
      nio: 'NIO',
      nok: 'NOK',
      nzd: 'NZD',
      pen: 'PEN',
      php: 'PHP',
      pkr: 'PKR',
      pln: 'PLN',
      pyg: 'PYG',
      qar: 'QAR',
      ron: 'RON',
      sar: 'SAR',
      sek: 'SEK',
      sgd: 'SGD',
      thb: 'THB',
      try: 'TRY',
      twd: 'TWD',
      uah: 'UAH',
      usd: 'USD',
      uyu: 'UYU',
      vnd: 'VND',
      zar: 'ZAR'
    });
  }

  static get PermittedTasks() {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      draft: 'DRAFT',
      manage: 'MANAGE'
    });
  }

  static get Tasks() {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      draft: 'DRAFT',
      manage: 'MANAGE'
    });
  }

  static get ClaimObjective() {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      collaborative_ads: 'COLLABORATIVE_ADS',
      home_listing: 'HOME_LISTING',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      travel: 'TRAVEL',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }

  static get ContentType() {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      generic: 'GENERIC',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      job: 'JOB',
      local_service_business: 'LOCAL_SERVICE_BUSINESS',
      media_title: 'MEDIA_TITLE',
      offline_product: 'OFFLINE_PRODUCT',
      product: 'PRODUCT',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }

  static get Subtype() {
    return Object.freeze({
      app: 'APP',
      bag_of_accounts: 'BAG_OF_ACCOUNTS',
      bidding: 'BIDDING',
      claim: 'CLAIM',
      custom: 'CUSTOM',
      engagement: 'ENGAGEMENT',
      exclusion: 'EXCLUSION',
      fox: 'FOX',
      lookalike: 'LOOKALIKE',
      managed: 'MANAGED',
      measurement: 'MEASUREMENT',
      offline_conversion: 'OFFLINE_CONVERSION',
      partner: 'PARTNER',
      primary: 'PRIMARY',
      regulated_categories_audience: 'REGULATED_CATEGORIES_AUDIENCE',
      study_rule_audience: 'STUDY_RULE_AUDIENCE',
      subscriber_segment: 'SUBSCRIBER_SEGMENT',
      video: 'VIDEO',
      website: 'WEBSITE'
    });
  }

  static get ActionSource() {
    return Object.freeze({
      physical_store: 'PHYSICAL_STORE',
      website: 'WEBSITE'
    });
  }

  getAccountControls(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountBusinessConstraints, fields, params, fetchFirstPage, '/account_controls');
  }

  createAccountControl(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccountBusinessConstraints> {
    return this.createEdge('/account_controls', fields, params, AdAccountBusinessConstraints, pathOverride);
  }

  getActivities(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdActivity, fields, params, fetchFirstPage, '/activities');
  }

  getAdPlacePageSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdPlacePageSet, fields, params, fetchFirstPage, '/ad_place_page_sets');
  }

  createAdPlacePageSet(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdPlacePageSet> {
    return this.createEdge('/ad_place_page_sets', fields, params, AdPlacePageSet, pathOverride);
  }

  createAdPlacePageSetsAsync(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdPlacePageSet> {
    return this.createEdge('/ad_place_page_sets_async', fields, params, AdPlacePageSet, pathOverride);
  }

  getAdSavedKeywords(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSavedKeywords, fields, params, fetchFirstPage, '/ad_saved_keywords');
  }

  getAdStudies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdStudy, fields, params, fetchFirstPage, '/ad_studies');
  }

  getAdCloudPlayables(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CloudGame, fields, params, fetchFirstPage, '/adcloudplayables');
  }

  getAdCreatives(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdCreative, fields, params, fetchFirstPage, '/adcreatives');
  }

  createAdCreative(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdCreative> {
    return this.createEdge('/adcreatives', fields, params, AdCreative, pathOverride);
  }

  getAdCreativesByLabels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdCreative, fields, params, fetchFirstPage, '/adcreativesbylabels');
  }

  deleteAdImages(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/adimages', params);
  }

  getAdImages(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdImage, fields, params, fetchFirstPage, '/adimages');
  }

  createAdImage(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdImage> {
    return this.createEdge('/adimages', fields, params, AdImage, pathOverride);
  }

  getAdLabels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdLabel, fields, params, fetchFirstPage, '/adlabels');
  }

  createAdLabel(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdLabel> {
    return this.createEdge('/adlabels', fields, params, AdLabel, pathOverride);
  }

  getAdPlayables(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(PlayableContent, fields, params, fetchFirstPage, '/adplayables');
  }

  createAdPlayable(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<PlayableContent> {
    return this.createEdge('/adplayables', fields, params, PlayableContent, pathOverride);
  }

  getAdRulesHistory(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountAdRulesHistory, fields, params, fetchFirstPage, '/adrules_history');
  }

  getAdRulesLibrary(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdRule, fields, params, fetchFirstPage, '/adrules_library');
  }

  createAdRulesLibrary(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdRule> {
    return this.createEdge('/adrules_library', fields, params, AdRule, pathOverride);
  }

  getAds(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Ad, fields, params, fetchFirstPage, '/ads');
  }

  createAd(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Ad> {
    return this.createEdge('/ads', fields, params, Ad, pathOverride);
  }

  getAdsReportingMmmReports(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsReportBuilderMMMReport, fields, params, fetchFirstPage, '/ads_reporting_mmm_reports');
  }

  getAdsReportingMmmSchedulers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsReportBuilderMMMReportScheduler, fields, params, fetchFirstPage, '/ads_reporting_mmm_schedulers');
  }

  getAdsVolume(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountAdVolume, fields, params, fetchFirstPage, '/ads_volume');
  }

  getAdsByLabels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Ad, fields, params, fetchFirstPage, '/adsbylabels');
  }

  getAdSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSet, fields, params, fetchFirstPage, '/adsets');
  }

  createAdSet(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdSet> {
    return this.createEdge('/adsets', fields, params, AdSet, pathOverride);
  }

  getAdSetsByLabels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSet, fields, params, fetchFirstPage, '/adsetsbylabels');
  }

  getAdsPixels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsPixel, fields, params, fetchFirstPage, '/adspixels');
  }

  createAdsPixel(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdsPixel> {
    return this.createEdge('/adspixels', fields, params, AdsPixel, pathOverride);
  }

  getAdvertisableApplications(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Application, fields, params, fetchFirstPage, '/advertisable_applications');
  }

  deleteAdVideos(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/advideos', params);
  }

  getAdVideos(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdVideo, fields, params, fetchFirstPage, '/advideos');
  }

  createAdVideo(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdVideo> {
    return this.createEdge('/advideos', fields, params, AdVideo, pathOverride);
  }

  getAffectedAdSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSet, fields, params, fetchFirstPage, '/affectedadsets');
  }

  deleteAgencies(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/agencies', params);
  }

  getAgencies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Business, fields, params, fetchFirstPage, '/agencies');
  }

  createAgency(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccount> {
    return this.createEdge('/agencies', fields, params, AdAccount, pathOverride);
  }

  getApplications(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Application, fields, params, fetchFirstPage, '/applications');
  }

  deleteAssignedUsers(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/assigned_users', params);
  }

  getAssignedUsers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AssignedUser, fields, params, fetchFirstPage, '/assigned_users');
  }

  createAssignedUser(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccount> {
    return this.createEdge('/assigned_users', fields, params, AdAccount, pathOverride);
  }

  createAsyncBatchRequest(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Campaign> {
    return this.createEdge('/async_batch_requests', fields, params, Campaign, pathOverride);
  }

  getAsyncRequests(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AsyncRequest, fields, params, fetchFirstPage, '/async_requests');
  }

  getAsyncAdRequestSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAsyncRequestSet, fields, params, fetchFirstPage, '/asyncadrequestsets');
  }

  createAsyncAdRequestSet(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAsyncRequestSet> {
    return this.createEdge('/asyncadrequestsets', fields, params, AdAsyncRequestSet, pathOverride);
  }

  getAudienceFunnel(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AudienceFunnel, fields, params, fetchFirstPage, '/audience_funnel');
  }

  createBlockListDraft(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccount> {
    return this.createEdge('/block_list_drafts', fields, params, AdAccount, pathOverride);
  }

  getBroadTargetingCategories(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BroadTargetingCategories, fields, params, fetchFirstPage, '/broadtargetingcategories');
  }

  getBusinessProjects(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BusinessProject, fields, params, fetchFirstPage, '/businessprojects');
  }

  deleteCampaigns(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/campaigns', params);
  }

  getCampaigns(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Campaign, fields, params, fetchFirstPage, '/campaigns');
  }

  createCampaign(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Campaign> {
    return this.createEdge('/campaigns', fields, params, Campaign, pathOverride);
  }

  getCampaignsByLabels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Campaign, fields, params, fetchFirstPage, '/campaignsbylabels');
  }

  getConnectedInstagramAccounts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(IGUser, fields, params, fetchFirstPage, '/connected_instagram_accounts');
  }

  getConnectedInstagramAccountsWithIabp(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramUser, fields, params, fetchFirstPage, '/connected_instagram_accounts_with_iabp');
  }

  getConversionGoals(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsConversionGoal, fields, params, fetchFirstPage, '/conversion_goals');
  }

  getCpaGuidance(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BespokePartnerGuidanceLaser, fields, params, fetchFirstPage, '/cpa_guidance');
  }

  getCustomAudiences(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomAudience, fields, params, fetchFirstPage, '/customaudiences');
  }

  createCustomAudience(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<CustomAudience> {
    return this.createEdge('/customaudiences', fields, params, CustomAudience, pathOverride);
  }

  getCustomAudiencesTos(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomAudiencesTOS, fields, params, fetchFirstPage, '/customaudiencestos');
  }

  createCustomAudiencesTo(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccount> {
    return this.createEdge('/customaudiencestos', fields, params, AdAccount, pathOverride);
  }

  getCustomConversions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomConversion, fields, params, fetchFirstPage, '/customconversions');
  }

  createCustomConversion(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<CustomConversion> {
    return this.createEdge('/customconversions', fields, params, CustomConversion, pathOverride);
  }

  getDeliveryEstimate(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountDeliveryEstimate, fields, params, fetchFirstPage, '/delivery_estimate');
  }

  getDeprecatedTargetingAdSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSet, fields, params, fetchFirstPage, '/deprecatedtargetingadsets');
  }

  getDsaRecommendations(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountDsaRecommendations, fields, params, fetchFirstPage, '/dsa_recommendations');
  }

  getGeneratePreviews(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdPreview, fields, params, fetchFirstPage, '/generatepreviews');
  }

  getImpactingAdStudies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdStudy, fields, params, fetchFirstPage, '/impacting_ad_studies');
  }

  getInsights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsInsights, fields, params, fetchFirstPage, '/insights');
  }

  getInsightsAsync(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdReportRun> {
    return this.createEdge('/insights', fields, params, AdReportRun, pathOverride);
  }

  getInstagramAccounts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(InstagramUser, fields, params, fetchFirstPage, '/instagram_accounts');
  }

  getIosFourteenCampaignLimits(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountIosFourteenCampaignLimits, fields, params, fetchFirstPage, '/ios_fourteen_campaign_limits');
  }

  createMAnAgeDPartnerAd(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/managed_partner_ads', fields, params, null, pathOverride);
  }

  getMatchedSearchApplications(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountMatchedSearchApplicationsEdgeData, fields, params, fetchFirstPage, '/matched_search_applications');
  }

  getMaxBid(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountMaxBid, fields, params, fetchFirstPage, '/max_bid');
  }

  getMinimumBudgets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(MinimumBudget, fields, params, fetchFirstPage, '/minimum_budgets');
  }

  getOnBehalfRequests(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BusinessOwnedObjectOnBehalfOfRequest, fields, params, fetchFirstPage, '/onbehalf_requests');
  }

  createProductAudience(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<CustomAudience> {
    return this.createEdge('/product_audiences', fields, params, CustomAudience, pathOverride);
  }

  getPromotePages(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Page, fields, params, fetchFirstPage, '/promote_pages');
  }

  getPublisherBlockLists(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(PublisherBlockList, fields, params, fetchFirstPage, '/publisher_block_lists');
  }

  createPublisherBlockList(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<PublisherBlockList> {
    return this.createEdge('/publisher_block_lists', fields, params, PublisherBlockList, pathOverride);
  }

  getReachEstimate(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountReachEstimate, fields, params, fetchFirstPage, '/reachestimate');
  }

  getReachFrequencyPredictions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ReachFrequencyPrediction, fields, params, fetchFirstPage, '/reachfrequencypredictions');
  }

  createReachFrequencyPrediction(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ReachFrequencyPrediction> {
    return this.createEdge('/reachfrequencypredictions', fields, params, ReachFrequencyPrediction, pathOverride);
  }

  getSavedAudiences(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(SavedAudience, fields, params, fetchFirstPage, '/saved_audiences');
  }

  deleteSubscribedApps(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/subscribed_apps', params);
  }

  getSubscribedApps(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountSubscribedApps, fields, params, fetchFirstPage, '/subscribed_apps');
  }

  createSubscribedApp(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccountSubscribedApps> {
    return this.createEdge('/subscribed_apps', fields, params, AdAccountSubscribedApps, pathOverride);
  }

  getTargetingBrowse(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountTargetingUnified, fields, params, fetchFirstPage, '/targetingbrowse');
  }

  getTargetingSearch(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountTargetingUnified, fields, params, fetchFirstPage, '/targetingsearch');
  }

  getTargetingSentenceLines(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(TargetingSentenceLine, fields, params, fetchFirstPage, '/targetingsentencelines');
  }

  getTargetingSuggestions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountTargetingUnified, fields, params, fetchFirstPage, '/targetingsuggestions');
  }

  getTargetingValidATIOn(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountTargetingUnified, fields, params, fetchFirstPage, '/targetingvalidation');
  }

  getTracking(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountTrackingData, fields, params, fetchFirstPage, '/tracking');
  }

  createTracking(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdAccount> {
    return this.createEdge('/tracking', fields, params, AdAccount, pathOverride);
  }

  getUsers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccountUser, fields, params, fetchFirstPage, '/users');
  }

  deleteUsersOfAnyAudience(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/usersofanyaudience', params);
  }

  getValueAdjustmentRuleCollections(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsValueAdjustmentRuleCollection, fields, params, fetchFirstPage, '/value_adjustment_rule_collections');
  }

  getValueAdjustmentRules(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsValueAdjustmentRule, fields, params, fetchFirstPage, '/value_adjustment_rules');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): AdAccount {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}