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
import PagePostExperiment from './page-post-experiment';
import PagePost from './page-post';
import Business from './business';
import Album from './album';
import ArAdsDataContainer from './ar-ads-data-container';
import AssignedUser from './assigned-user';
import Profile from './profile';
import BusinessProject from './business-project';
import PageCallToAction from './page-call-to-action';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import ChatPlugin from './chat-plugin';
import CommerceMerchantSettings from './commerce-merchant-settings';
import CommerceOrder from './commerce-order';
import CommercePayout from './commerce-payout';
import CommerceOrderTransactionDetail from './commerce-order-transaction-detail';
import UnifiedThread from './unified-thread';
import VideoCopyrightMatch from './video-copyright-match';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import CustomUserSettings from './custom-user-settings';
import AdsPixel from './ads-pixel';
import Event from './event';
import FantasyGame from './fantasy-game';
import Group from './group';
import ImageCopyright from './image-copyright';
import AdVideo from './ad-video';
import InsightsResult from './insights-result';
import InstagramUser from './instagram-user';
import LeadgenForm from './leadgen-form';
import LiveVideo from './live-video';
import MediaFingerprint from './media-fingerprint';
import MessagingFeatureReview from './messaging-feature-review';
import MessengerCallSettings from './messenger-call-settings';
import MessengerAdsPartialAutomatedStepList from './messenger-ads-partial-automated-step-list';
import MessengerProfile from './messenger-profile';
import UserPageOneTimeOptInTokenSettings from './user-page-one-time-opt-in-token-settings';
import Persona from './persona';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import ProductCatalog from './product-catalog';
import Recommendation from './recommendation';
import User from './user';
import RTBDynamicPost from './rtb-dynamic-post';
import Application from './application';
import PageSettings from './page-settings';
import CommerceMerchantSettingsSetupStatus from './commerce-merchant-settings-setup-status';
import Stories from './stories';
import Tab from './tab';
import PageThreadOwner from './page-thread-owner';
import VideoCopyrightRule from './video-copyright-rule';
import VideoCopyright from './video-copyright';
import VideoList from './video-list';
import CTXPartnerAppWelcomeMessageFlow from './ctx-partner-app-welcome-message-flow';

/**
 * Page
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Page extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      access_token: 'access_token',
      ad_campaign: 'ad_campaign',
      affiliation: 'affiliation',
      app_id: 'app_id',
      artists_we_like: 'artists_we_like',
      attire: 'attire',
      available_promo_offer_ids: 'available_promo_offer_ids',
      awards: 'awards',
      band_interests: 'band_interests',
      band_members: 'band_members',
      best_page: 'best_page',
      bio: 'bio',
      birthday: 'birthday',
      booking_agent: 'booking_agent',
      breaking_news_usage: 'breaking_news_usage',
      built: 'built',
      business: 'business',
      can_checkin: 'can_checkin',
      can_post: 'can_post',
      category: 'category',
      category_list: 'category_list',
      checkins: 'checkins',
      company_overview: 'company_overview',
      connected_instagram_account: 'connected_instagram_account',
      connected_page_backed_instagram_account: 'connected_page_backed_instagram_account',
      contact_address: 'contact_address',
      copyright_whitelisted_ig_partners: 'copyright_whitelisted_ig_partners',
      country_page_likes: 'country_page_likes',
      cover: 'cover',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      delivery_and_pickup_option_info: 'delivery_and_pickup_option_info',
      description: 'description',
      description_html: 'description_html',
      differently_open_offerings: 'differently_open_offerings',
      directed_by: 'directed_by',
      display_subtext: 'display_subtext',
      displayed_message_response_time: 'displayed_message_response_time',
      does_viewer_have_page_permission_link_ig: 'does_viewer_have_page_permission_link_ig',
      emails: 'emails',
      engagement: 'engagement',
      fan_count: 'fan_count',
      featured_video: 'featured_video',
      features: 'features',
      followers_count: 'followers_count',
      food_styles: 'food_styles',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      genre: 'genre',
      global_brand_page_name: 'global_brand_page_name',
      global_brand_root_id: 'global_brand_root_id',
      has_added_app: 'has_added_app',
      has_lead_access: 'has_lead_access',
      has_transitioned_to_new_page_experience: 'has_transitioned_to_new_page_experience',
      has_whatsapp_business_number: 'has_whatsapp_business_number',
      has_whatsapp_number: 'has_whatsapp_number',
      hometown: 'hometown',
      hours: 'hours',
      id: 'id',
      impressum: 'impressum',
      influences: 'influences',
      instagram_business_account: 'instagram_business_account',
      is_always_open: 'is_always_open',
      is_calling_eligible: 'is_calling_eligible',
      is_chain: 'is_chain',
      is_community_page: 'is_community_page',
      is_eligible_for_branded_content: 'is_eligible_for_branded_content',
      is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web: 'is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web',
      is_messenger_bot_get_started_enabled: 'is_messenger_bot_get_started_enabled',
      is_messenger_platform_bot: 'is_messenger_platform_bot',
      is_owned: 'is_owned',
      is_permanently_closed: 'is_permanently_closed',
      is_published: 'is_published',
      is_unclaimed: 'is_unclaimed',
      is_verified: 'is_verified',
      is_webhooks_subscribed: 'is_webhooks_subscribed',
      keywords: 'keywords',
      leadgen_tos_acceptance_time: 'leadgen_tos_acceptance_time',
      leadgen_tos_accepted: 'leadgen_tos_accepted',
      leadgen_tos_accepting_user: 'leadgen_tos_accepting_user',
      link: 'link',
      location: 'location',
      members: 'members',
      merchant_id: 'merchant_id',
      merchant_review_status: 'merchant_review_status',
      messaging_feature_status: 'messaging_feature_status',
      messenger_ads_default_icebreakers: 'messenger_ads_default_icebreakers',
      messenger_ads_default_quick_replies: 'messenger_ads_default_quick_replies',
      messenger_ads_quick_replies_type: 'messenger_ads_quick_replies_type',
      mini_shop_storefront: 'mini_shop_storefront',
      mission: 'mission',
      mpg: 'mpg',
      name: 'name',
      name_with_location_descriptor: 'name_with_location_descriptor',
      network: 'network',
      new_like_count: 'new_like_count',
      offer_eligible: 'offer_eligible',
      overall_star_rating: 'overall_star_rating',
      owner_business: 'owner_business',
      page_token: 'page_token',
      parent_page: 'parent_page',
      parking: 'parking',
      payment_options: 'payment_options',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      pharma_safety_info: 'pharma_safety_info',
      phone: 'phone',
      pickup_options: 'pickup_options',
      place_type: 'place_type',
      plot_outline: 'plot_outline',
      preferred_audience: 'preferred_audience',
      press_contact: 'press_contact',
      price_range: 'price_range',
      privacy_info_url: 'privacy_info_url',
      produced_by: 'produced_by',
      products: 'products',
      promotion_eligible: 'promotion_eligible',
      promotion_ineligible_reason: 'promotion_ineligible_reason',
      public_transit: 'public_transit',
      rating_count: 'rating_count',
      recipient: 'recipient',
      record_label: 'record_label',
      release_date: 'release_date',
      restaurant_services: 'restaurant_services',
      restaurant_specialties: 'restaurant_specialties',
      schedule: 'schedule',
      screenplay_by: 'screenplay_by',
      season: 'season',
      single_line_address: 'single_line_address',
      starring: 'starring',
      start_info: 'start_info',
      store_code: 'store_code',
      store_location_descriptor: 'store_location_descriptor',
      store_number: 'store_number',
      studio: 'studio',
      supports_donate_button_in_live_video: 'supports_donate_button_in_live_video',
      talking_about_count: 'talking_about_count',
      temporary_status: 'temporary_status',
      unread_message_count: 'unread_message_count',
      unread_notif_count: 'unread_notif_count',
      unseen_message_count: 'unseen_message_count',
      user_access_expire_time: 'user_access_expire_time',
      username: 'username',
      verification_status: 'verification_status',
      voip_info: 'voip_info',
      website: 'website',
      were_here_count: 'were_here_count',
      whatsapp_number: 'whatsapp_number',
      written_by: 'written_by',
    });
  }

  static get Attire () {
    return Object.freeze({
      casual: 'Casual',
      dressy: 'Dressy',
      unspecified: 'Unspecified',
    });
  }
  static get FoodStyles () {
    return Object.freeze({
      afghani: 'Afghani',
      american_new_: 'American (New)',
      american_traditional_: 'American (Traditional)',
      asian_fusion: 'Asian Fusion',
      barbeque: 'Barbeque',
      brazilian: 'Brazilian',
      breakfast: 'Breakfast',
      british: 'British',
      brunch: 'Brunch',
      buffets: 'Buffets',
      burgers: 'Burgers',
      burmese: 'Burmese',
      cajun_creole: 'Cajun/Creole',
      caribbean: 'Caribbean',
      chinese: 'Chinese',
      creperies: 'Creperies',
      cuban: 'Cuban',
      delis: 'Delis',
      diners: 'Diners',
      ethiopian: 'Ethiopian',
      fast_food: 'Fast Food',
      filipino: 'Filipino',
      fondue: 'Fondue',
      food_stands: 'Food Stands',
      french: 'French',
      german: 'German',
      greek_and_mediterranean: 'Greek and Mediterranean',
      hawaiian: 'Hawaiian',
      himalayan_nepalese: 'Himalayan/Nepalese',
      hot_dogs: 'Hot Dogs',
      indian_pakistani: 'Indian/Pakistani',
      irish: 'Irish',
      italian: 'Italian',
      japanese: 'Japanese',
      korean: 'Korean',
      latin_american: 'Latin American',
      mexican: 'Mexican',
      middle_eastern: 'Middle Eastern',
      moroccan: 'Moroccan',
      pizza: 'Pizza',
      russian: 'Russian',
      sandwiches: 'Sandwiches',
      seafood: 'Seafood',
      singaporean: 'Singaporean',
      soul_food: 'Soul Food',
      southern: 'Southern',
      spanish_basque: 'Spanish/Basque',
      steakhouses: 'Steakhouses',
      sushi_bars: 'Sushi Bars',
      taiwanese: 'Taiwanese',
      tapas_bars: 'Tapas Bars',
      tex_mex: 'Tex-Mex',
      thai: 'Thai',
      turkish: 'Turkish',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      vietnamese: 'Vietnamese',
    });
  }
  static get PickupOptions () {
    return Object.freeze({
      curbside: 'CURBSIDE',
      in_store: 'IN_STORE',
      other: 'OTHER',
    });
  }
  static get TemporaryStatus () {
    return Object.freeze({
      differently_open: 'DIFFERENTLY_OPEN',
      no_data: 'NO_DATA',
      operating_as_usual: 'OPERATING_AS_USUAL',
      temporarily_closed: 'TEMPORARILY_CLOSED',
    });
  }
  static get PermittedTasks () {
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
  static get Tasks () {
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
  static get Alignment () {
    return Object.freeze({
      left: 'LEFT',
      right: 'RIGHT',
    });
  }
  static get EntryPointIcon () {
    return Object.freeze({
      chat_angular_icon: 'CHAT_ANGULAR_ICON',
      chat_round_icon: 'CHAT_ROUND_ICON',
      messenger_icon: 'MESSENGER_ICON',
      none: 'NONE',
    });
  }
  static get EntryPointLabel () {
    return Object.freeze({
      ask_us: 'ASK_US',
      chat: 'CHAT',
      help: 'HELP',
      none: 'NONE',
    });
  }
  static get GreetingDialogDisplay () {
    return Object.freeze({
      hide: 'HIDE',
      show: 'SHOW',
      welcome_message: 'WELCOME_MESSAGE',
    });
  }
  static get GuestChatMode () {
    return Object.freeze({
      disabled: 'DISABLED',
      enabled: 'ENABLED',
    });
  }
  static get MobileChatDisplay () {
    return Object.freeze({
      app_switch: 'APP_SWITCH',
      chat_tab: 'CHAT_TAB',
    });
  }
  static get BackdatedTimeGranularity () {
    return Object.freeze({
      day: 'day',
      hour: 'hour',
      min: 'min',
      month: 'month',
      none: 'none',
      year: 'year',
    });
  }
  static get Formatting () {
    return Object.freeze({
      markdown: 'MARKDOWN',
      plaintext: 'PLAINTEXT',
    });
  }
  static get PlaceAttachmentSetting () {
    return Object.freeze({
      value_1: '1',
      value_2: '2',
    });
  }
  static get PostSurfacesBlacklist () {
    return Object.freeze({
      value_1: '1',
      value_2: '2',
      value_3: '3',
      value_4: '4',
      value_5: '5',
    });
  }
  static get PostingToRedspace () {
    return Object.freeze({
      disabled: 'disabled',
      enabled: 'enabled',
    });
  }
  static get TargetSurface () {
    return Object.freeze({
      story: 'STORY',
      timeline: 'TIMELINE',
    });
  }
  static get UnpublishedContentType () {
    return Object.freeze({
      ads_post: 'ADS_POST',
      draft: 'DRAFT',
      inline_created: 'INLINE_CREATED',
      published: 'PUBLISHED',
      reviewable_branded_content: 'REVIEWABLE_BRANDED_CONTENT',
      scheduled: 'SCHEDULED',
      scheduled_recurring: 'SCHEDULED_RECURRING',
    });
  }
  static get MessagingType () {
    return Object.freeze({
      message_tag: 'MESSAGE_TAG',
      response: 'RESPONSE',
      update: 'UPDATE',
    });
  }
  static get NotificationType () {
    return Object.freeze({
      no_push: 'NO_PUSH',
      regular: 'REGULAR',
      silent_push: 'SILENT_PUSH',
    });
  }
  static get SenderAction () {
    return Object.freeze({
      mark_seen: 'MARK_SEEN',
      react: 'REACT',
      typing_off: 'TYPING_OFF',
      typing_on: 'TYPING_ON',
      unreact: 'UNREACT',
    });
  }
  static get SuggestionAction () {
    return Object.freeze({
      accept: 'ACCEPT',
      dismiss: 'DISMISS',
      impression: 'IMPRESSION',
    });
  }
  static get Platform () {
    return Object.freeze({
      instagram: 'INSTAGRAM',
      messenger: 'MESSENGER',
    });
  }
  static get Model () {
    return Object.freeze({
      arabic: 'ARABIC',
      chinese: 'CHINESE',
      croatian: 'CROATIAN',
      custom: 'CUSTOM',
      danish: 'DANISH',
      dutch: 'DUTCH',
      english: 'ENGLISH',
      french_standard: 'FRENCH_STANDARD',
      georgian: 'GEORGIAN',
      german_standard: 'GERMAN_STANDARD',
      greek: 'GREEK',
      hebrew: 'HEBREW',
      hungarian: 'HUNGARIAN',
      irish: 'IRISH',
      italian_standard: 'ITALIAN_STANDARD',
      korean: 'KOREAN',
      norwegian_bokmal: 'NORWEGIAN_BOKMAL',
      polish: 'POLISH',
      portuguese: 'PORTUGUESE',
      romanian: 'ROMANIAN',
      spanish: 'SPANISH',
      swedish: 'SWEDISH',
      vietnamese: 'VIETNAMESE',
    });
  }
  static get DeveloperAction () {
    return Object.freeze({
      enable_followup_message: 'ENABLE_FOLLOWUP_MESSAGE',
    });
  }
  static get SubscribedFields () {
    return Object.freeze({
      affiliation: 'affiliation',
      attire: 'attire',
      awards: 'awards',
      bio: 'bio',
      birthday: 'birthday',
      calls: 'calls',
      category: 'category',
      checkins: 'checkins',
      company_overview: 'company_overview',
      conversations: 'conversations',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      description: 'description',
      email: 'email',
      feature_access_list: 'feature_access_list',
      feed: 'feed',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      group_feed: 'group_feed',
      hometown: 'hometown',
      hours: 'hours',
      inbox_labels: 'inbox_labels',
      invalid_topic_placeholder: 'invalid_topic_placeholder',
      invoice_access_bank_slip_events: 'invoice_access_bank_slip_events',
      invoice_access_invoice_change: 'invoice_access_invoice_change',
      invoice_access_invoice_draft_change: 'invoice_access_invoice_draft_change',
      invoice_access_onboarding_status_active: 'invoice_access_onboarding_status_active',
      leadgen: 'leadgen',
      leadgen_fat: 'leadgen_fat',
      live_videos: 'live_videos',
      local_delivery: 'local_delivery',
      location: 'location',
      mcom_invoice_change: 'mcom_invoice_change',
      members: 'members',
      mention: 'mention',
      merchant_review: 'merchant_review',
      message_context: 'message_context',
      message_deliveries: 'message_deliveries',
      message_echoes: 'message_echoes',
      message_edits: 'message_edits',
      message_mention: 'message_mention',
      message_reactions: 'message_reactions',
      message_reads: 'message_reads',
      messages: 'messages',
      messaging_account_linking: 'messaging_account_linking',
      messaging_appointments: 'messaging_appointments',
      messaging_checkout_updates: 'messaging_checkout_updates',
      messaging_customer_information: 'messaging_customer_information',
      messaging_direct_sends: 'messaging_direct_sends',
      messaging_fblogin_account_linking: 'messaging_fblogin_account_linking',
      messaging_feedback: 'messaging_feedback',
      messaging_game_plays: 'messaging_game_plays',
      messaging_handovers: 'messaging_handovers',
      messaging_in_thread_lead_form_submit: 'messaging_in_thread_lead_form_submit',
      messaging_optins: 'messaging_optins',
      messaging_optouts: 'messaging_optouts',
      messaging_payments: 'messaging_payments',
      messaging_policy_enforcement: 'messaging_policy_enforcement',
      messaging_postbacks: 'messaging_postbacks',
      messaging_pre_checkouts: 'messaging_pre_checkouts',
      messaging_referrals: 'messaging_referrals',
      mission: 'mission',
      name: 'name',
      otp_verification: 'otp_verification',
      page_about_story: 'page_about_story',
      page_change_proposal: 'page_change_proposal',
      page_upcoming_change: 'page_upcoming_change',
      parking: 'parking',
      payment_options: 'payment_options',
      payment_request_update: 'payment_request_update',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      phone: 'phone',
      picture: 'picture',
      price_range: 'price_range',
      product_review: 'product_review',
      products: 'products',
      public_transit: 'public_transit',
      publisher_subscriptions: 'publisher_subscriptions',
      ratings: 'ratings',
      registration: 'registration',
      response_feedback: 'response_feedback',
      send_cart: 'send_cart',
      standby: 'standby',
      user_action: 'user_action',
      video_text_question_responses: 'video_text_question_responses',
      videos: 'videos',
      website: 'website',
    });
  }
  static get Action () {
    return Object.freeze({
      spam: 'SPAM',
    });
  }
  static get ActionType () {
    return Object.freeze({
      report_thread: 'REPORT_THREAD',
    });
  }

  getAbTests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePostExperiment,
      fields,
      params,
      fetchFirstPage,
      '/ab_tests'
    );
  }

  createAbTest (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<PagePostExperiment> {
    return this.createEdge(
      '/ab_tests',
      fields,
      params,
      PagePostExperiment,
      pathOverride,
    );
  }

  createAcknowledgeOrder (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/acknowledge_orders',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getAdsPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/ads_posts'
    );
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      Page,
      pathOverride,
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

  getArExperience (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ArAdsDataContainer,
      fields,
      params,
      fetchFirstPage,
      '/ar_experience'
    );
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

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  deleteBlocked (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/blocked',
      params
    );
  }

  getBlocked (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/blocked'
    );
  }

  createBlocked (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/blocked',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createBusinessDatum (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/business_data',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getBusinessProjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  getCallToActions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageCallToAction,
      fields,
      params,
      fetchFirstPage,
      '/call_to_actions'
    );
  }

  createCall (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/calls',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getCanvasElements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CanvasBodyElement,
      fields,
      params,
      fetchFirstPage,
      '/canvas_elements'
    );
  }

  createCanvasElement (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CanvasBodyElement> {
    return this.createEdge(
      '/canvas_elements',
      fields,
      params,
      CanvasBodyElement,
      pathOverride,
    );
  }

  getCanvases (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/canvases'
    );
  }

  createCanvase (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Canvas> {
    return this.createEdge(
      '/canvases',
      fields,
      params,
      Canvas,
      pathOverride,
    );
  }

  getChatPlugin (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ChatPlugin,
      fields,
      params,
      fetchFirstPage,
      '/chat_plugin'
    );
  }

  createChatPlugin (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/chat_plugin',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getCommerceMerchantSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceMerchantSettings,
      fields,
      params,
      fetchFirstPage,
      '/commerce_merchant_settings'
    );
  }

  getCommerceOrders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceOrder,
      fields,
      params,
      fetchFirstPage,
      '/commerce_orders'
    );
  }

  getCommercePayouts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommercePayout,
      fields,
      params,
      fetchFirstPage,
      '/commerce_payouts'
    );
  }

  getCommerceTransactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceOrderTransactionDetail,
      fields,
      params,
      fetchFirstPage,
      '/commerce_transactions'
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

  createCopyrightManualClaim (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<VideoCopyrightMatch> {
    return this.createEdge(
      '/copyright_manual_claims',
      fields,
      params,
      VideoCopyrightMatch,
      pathOverride,
    );
  }

  getCrosspostWhitelistedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/crosspost_whitelisted_pages'
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

  createCustomLabel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<PageUserMessageThreadLabel> {
    return this.createEdge(
      '/custom_labels',
      fields,
      params,
      PageUserMessageThreadLabel,
      pathOverride,
    );
  }

  deleteCustomUserSettings (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/custom_user_settings',
      params
    );
  }

  getCustomUserSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomUserSettings,
      fields,
      params,
      fetchFirstPage,
      '/custom_user_settings'
    );
  }

  createCustomUserSetting (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/custom_user_settings',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getDataSet (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/dataset'
    );
  }

  createDataSet (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsPixel> {
    return this.createEdge(
      '/dataset',
      fields,
      params,
      AdsPixel,
      pathOverride,
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

  createExtendThreadControl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/extend_thread_control',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getFantasyGames (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      FantasyGame,
      fields,
      params,
      fetchFirstPage,
      '/fantasy_games'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getGlobalBrandChildren (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/global_brand_children'
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

  getImageCopyrights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ImageCopyright,
      fields,
      params,
      fetchFirstPage,
      '/image_copyrights'
    );
  }

  createImageCopyright (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ImageCopyright> {
    return this.createEdge(
      '/image_copyrights',
      fields,
      params,
      ImageCopyright,
      pathOverride,
    );
  }

  getIndexedVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/indexed_videos'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getLeadGenForms (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
    );
  }

  createLeadGenForm (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<LeadgenForm> {
    return this.createEdge(
      '/leadgen_forms',
      fields,
      params,
      LeadgenForm,
      pathOverride,
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

  deleteLocations (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/locations',
      params
    );
  }

  getLocations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/locations'
    );
  }

  createLocation (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/locations',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getMediaFingerprints (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MediaFingerprint,
      fields,
      params,
      fetchFirstPage,
      '/media_fingerprints'
    );
  }

  createMediaFingerprint (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<MediaFingerprint> {
    return this.createEdge(
      '/media_fingerprints',
      fields,
      params,
      MediaFingerprint,
      pathOverride,
    );
  }

  createMessageAttachMEnt (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/message_attachments',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createMessage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/messages',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getMessagingFeatureReview (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessagingFeatureReview,
      fields,
      params,
      fetchFirstPage,
      '/messaging_feature_review'
    );
  }

  getMessengerCallSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessengerCallSettings,
      fields,
      params,
      fetchFirstPage,
      '/messenger_call_settings'
    );
  }

  createMessengerCallSetting (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/messenger_call_settings',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getMessengerLeadForMs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessengerAdsPartialAutomatedStepList,
      fields,
      params,
      fetchFirstPage,
      '/messenger_lead_forms'
    );
  }

  createMessengerLeadForM (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/messenger_lead_forms',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  deleteMessengerProfile (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/messenger_profile',
      params
    );
  }

  getMessengerProfile (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessengerProfile,
      fields,
      params,
      fetchFirstPage,
      '/messenger_profile'
    );
  }

  createMessengerProfile (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/messenger_profile',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  createNlpConfig (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/nlp_configs',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getNotificationMessageTokens (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserPageOneTimeOptInTokenSettings,
      fields,
      params,
      fetchFirstPage,
      '/notification_message_tokens'
    );
  }

  createNotificationMessagesDevSupport (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/notification_messages_dev_support',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getPageBackedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/page_backed_instagram_accounts'
    );
  }

  createPageBackedInstagramAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<InstagramUser> {
    return this.createEdge(
      '/page_backed_instagram_accounts',
      fields,
      params,
      InstagramUser,
      pathOverride,
    );
  }

  createPageWhatsAppNumberVerification (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/page_whatsapp_number_verification',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  createPassThreadControl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/pass_thread_control',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  createPassThreadMetadatum (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/pass_thread_metadata',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getPersonas (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Persona,
      fields,
      params,
      fetchFirstPage,
      '/personas'
    );
  }

  createPersona (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Persona> {
    return this.createEdge(
      '/personas',
      fields,
      params,
      Persona,
      pathOverride,
    );
  }

  createPhotoStory (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/photo_stories',
      fields,
      params,
      Page,
      pathOverride,
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

  createPicture (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProfilePictureSource> {
    return this.createEdge(
      '/picture',
      fields,
      params,
      ProfilePictureSource,
      pathOverride,
    );
  }

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  getPublishedPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/published_posts'
    );
  }

  getRatings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Recommendation,
      fields,
      params,
      fetchFirstPage,
      '/ratings'
    );
  }

  createReleaseThreadControl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/release_thread_control',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  createRequestThreadControl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/request_thread_control',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getRtbDynamicPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      RTBDynamicPost,
      fields,
      params,
      fetchFirstPage,
      '/rtb_dynamic_posts'
    );
  }

  getScheduleDPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_posts'
    );
  }

  getSecondaryReceivers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/secondary_receivers'
    );
  }

  getSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageSettings,
      fields,
      params,
      fetchFirstPage,
      '/settings'
    );
  }

  createSetting (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/settings',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getShopSetupStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceMerchantSettingsSetupStatus,
      fields,
      params,
      fetchFirstPage,
      '/shop_setup_status'
    );
  }

  getStories (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Stories,
      fields,
      params,
      fetchFirstPage,
      '/stories'
    );
  }

  deleteSubscribedApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getTabs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Tab,
      fields,
      params,
      fetchFirstPage,
      '/tabs'
    );
  }

  getTagged (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/tagged'
    );
  }

  createTakeThreadControl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/take_thread_control',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  createThreadAction (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/thread_action',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getThreadOwner (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageThreadOwner,
      fields,
      params,
      fetchFirstPage,
      '/thread_owner'
    );
  }

  getThreads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/threads'
    );
  }

  createUnlinkAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Page> {
    return this.createEdge(
      '/unlink_accounts',
      fields,
      params,
      Page,
      pathOverride,
    );
  }

  getVideoCopyrightRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VideoCopyrightRule,
      fields,
      params,
      fetchFirstPage,
      '/video_copyright_rules'
    );
  }

  createVideoCopyrightRule (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<VideoCopyrightRule> {
    return this.createEdge(
      '/video_copyright_rules',
      fields,
      params,
      VideoCopyrightRule,
      pathOverride,
    );
  }

  createVideoCopyright (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<VideoCopyright> {
    return this.createEdge(
      '/video_copyrights',
      fields,
      params,
      VideoCopyright,
      pathOverride,
    );
  }

  getVideoLists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/video_lists'
    );
  }

  getVideoReels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/video_reels'
    );
  }

  createVideoReel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/video_reels',
      fields,
      params,
      AdVideo,
      pathOverride,
    );
  }

  createVideoStory (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/video_stories',
      fields,
      params,
      null,
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

  getVisitorPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/visitor_posts'
    );
  }

  deleteWelcomeMessageFlows (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/welcome_message_flows',
      params
    );
  }

  getWelcomeMessageFlows (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CTXPartnerAppWelcomeMessageFlow,
      fields,
      params,
      fetchFirstPage,
      '/welcome_message_flows'
    );
  }

  createWelcomeMessageFlow (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/welcome_message_flows',
      fields,
      params,
      null,
      pathOverride,
    );
  }


  get (fields: Array<string>, params: Object = {}): Page {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Page {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
