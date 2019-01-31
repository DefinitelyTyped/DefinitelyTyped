import Comment from './Comment';
import Listing from './Listing';
import MultiReddit from './MultiReddit';
import RedditContent from './RedditContent';
import Submission from './Submission';
import Subreddit from './Subreddit';

export default class RedditUser extends RedditContent<RedditUser> {
  /** Number of Reddit coins, only returned for your own user */
  coins?: number;
  comment_karma: number;
  /** Only returned for your own user */
  features?: Features;
  /** Only returned for your own user */
  force_password_reset?: boolean;
  /** Only returned for your own user */
  gold_creddits?: number;
  /** Only returned for your own user */
  gold_expiration?: number | null;
  /** Only returned for your own user */
  has_android_subscription?: boolean;
  /** Only returned for your own user */
  has_external_account?: boolean;
  /** Only returned for your own user */
  has_ios_subscription?: boolean;
  /** Only returned for your own user */
  has_mail?: boolean;
  has_mod_mail: boolean;
  /** Only returned for your own user */
  has_paypal_subscription?: boolean;
  /** Only returned for your own user */
  has_stripe_subscription?: boolean;
  has_subscribed: boolean;
  /** Only returned for your own user */
  has_subscribed_to_premium?: boolean;
  has_verified_mail: boolean;
  /** Only returned for your own user */
  has_visited_new_profile?: boolean;
  hide_from_robots: boolean;
  /** Image URL of the user's avatar */
  icon_img: string;
  /** Only returned for your own user */
  in_beta?: boolean;
  /** Only returned for your own user */
  in_chat?: boolean;
  /** Only returned for your own user */
  in_redesign_beta?: boolean;
  /** Only returned for your own user */
  inbox_count?: number;
  is_employee: boolean;
  /** Only returned for other users, not yourself */
  is_friend?: boolean;
  is_gold: boolean;
  is_mod: boolean;
  /** Only returned for your own user */
  is_sponsor?: boolean;
  /** Only returned for your own user */
  is_suspended?: boolean;
  link_karma: number;
  modhash?: string | null;
  /** Only returned for your own user */
  new_modmail_exists?: boolean | null;
  /** Only returned for your own user */
  num_friends?: number;
  /** Only returned for your own user */
  oauth_client_id?: string;
  /** Only returned for your own user */
  over_18?: boolean;
  /** Only returned for your own user */
  pref_autoplay?: boolean;
  /** Only returned for your own user */
  pref_clickgadget?: number;
  /** Only returned for your own user */
  pref_geopopular?: string;
  /** Only returned for your own user */
  pref_nightmode?: boolean;
  /** Only returned for your own user */
  pref_no_profanity?: boolean;
  pref_show_snoovatar: boolean;
  /** Only returned for your own user */
  pref_show_trending?: boolean;
  /** Only returned for your own user */
  pref_show_twitter?: boolean;
  /** Only returned for your own user */
  pref_top_karma_subreddits?: boolean;
  /** Only returned for your own user */
  pref_video_autoplay?: boolean;
  /** Only returned for your own user */
  seen_layout_switch?: boolean;
  /** Only returned for your own user */
  seen_premium_adblock_modal?: boolean;
  /** Only returned for your own user */
  seen_redesign_modal?: boolean;
  /** Only returned for your own user */
  seen_subreddit_chat_ftux?: boolean;
  subreddit: Subreddit | null;
  /** Only returned for your own user */
  suspension_expiration_utc?: number | null;
  verified: boolean;

  assignFlair(options: any): Promise<this>;
  friend(options: any): Promise<this>;
  getComments(options?: any): Promise<Listing<Comment>>;
  getDownvotedContent(options?: any): Promise<Listing<Comment | Submission>>;
  getFriendInformation(): Promise<any>;
  getGildedContent(options?: any): Promise<Listing<Comment | Submission>>;
  getHiddenContent(options?: any): Promise<Listing<Comment | Submission>>;
  getMultireddit(name: string): MultiReddit;
  getMultireddits(): Promise<MultiReddit[]>;
  getOverview(options?: any): Promise<Listing<Comment | Submission>>;
  getSavedContent(options?: any): Promise<Listing<Comment | Submission>>;
  getSubmissions(options?: any): Promise<Listing<Submission>>;
  getTrophies(): Promise<any>;
  getUpvotedContent(options?: any): Promise<Listing<Comment | Submission>>;
  giveGold(months: string): Promise<any>;
  unfriend(): Promise<any>;
}

interface Features {
  chat: boolean;
  chat_group_rollout: boolean;
  chat_rollout: boolean;
  chat_subreddit: boolean;
  do_not_track: boolean;
  email_verification: ExperimentFeature;
  mweb_sharing_clipboard: ExperimentFeature;
  mweb_xpromo_revamp_v2: ExperimentFeature;
  show_amp_link: boolean;
  show_nps_survey: boolean;
  spez_modal: boolean;
  top_content_email_digest_v2: ExperimentFeature;
  live_happening_now: boolean;
  adserver_reporting: boolean;
  geopopular: boolean;
  legacy_search_pref: boolean;
  listing_service_rampup: boolean;
  mobile_web_targeting: boolean;
  default_srs_holdout: ExperimentFeature;
  geopopular_ie: ExperimentFeature;
  users_listing: boolean;
  show_user_sr_name: boolean;
  whitelisted_pms: boolean;
  sticky_comments: boolean;
  upgrade_cookies: boolean;
  ads_prefs: boolean;
  new_report_flow: boolean;
  block_user_by_report: boolean;
  ads_auto_refund: boolean;
  orangereds_as_emails: boolean;
  mweb_xpromo_modal_listing_click_daily_dismissible_ios: boolean;
  adzerk_do_not_track: boolean;
  expando_events: boolean;
  eu_cookie_policy: boolean;
  utm_comment_links: boolean;
  force_https: boolean;
  activity_service_write: boolean;
  pokemongo_content: ExperimentFeature;
  post_to_profile_beta: boolean;
  reddituploads_redirect: boolean;
  outbound_clicktracking: boolean;
  new_loggedin_cache_policy: boolean;
  inbox_push: boolean;
  https_redirect: boolean;
  search_dark_traffic: boolean;
  mweb_xpromo_interstitial_comments_ios: boolean;
  live_orangereds: boolean;
  programmatic_ads: boolean;
  give_hsts_grants: boolean;
  pause_ads: boolean;
  show_recommended_link: boolean;
  mweb_xpromo_interstitial_comments_android: boolean;
  ads_auction: boolean;
  screenview_events: boolean;
  new_report_dialog: boolean;
  moat_tracking: boolean;
  subreddit_rules: boolean;
  mobile_settings: boolean;
  adzerk_reporting_2: boolean;
  mobile_native_banner: boolean;
  ads_auto_extend: boolean;
  interest_targeting: boolean;
  post_embed: boolean;
  seo_comments_page_holdout: ExperimentFeature;
  scroll_events: boolean;
  mweb_xpromo_modal_listing_click_daily_dismissible_android: boolean;
  '302_to_canonicals': boolean;
  activity_service_read: boolean;
  adblock_test: boolean;
  geopopular_in: ExperimentFeature;
}

interface ExperimentFeature {
  owner: string;
  variant: string;
  experiment_id: number;
}
