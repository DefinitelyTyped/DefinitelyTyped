import Comment from './Comment';
import Listing from './Listing';
import MultiReddit from './MultiReddit';
import RedditContent from './RedditContent';
import Submission from './Submission';
import Subreddit from './Subreddit';

export default class RedditUser extends RedditContent<RedditUser> {
  comment_karma: number;
  features?: Features; // this seems to only be returned for your own user
  gold_creddits: number;
  gold_expiration: number | null;
  has_mail: boolean;
  has_mod_mail: boolean;
  has_subscribed: boolean;
  has_verified_email: boolean;
  hide_from_robots: boolean;
  in_beta: boolean;
  inbox_count: number;
  is_employee: boolean;
  is_friend: boolean;
  is_gold: boolean;
  is_mod: boolean;
  is_sponsor: boolean;
  is_suspended: boolean;
  link_karma: number;
  modhash: string | null;
  new_modmail_exists: boolean;
  over_18: boolean;
  pref_no_profanity: boolean;
  pref_show_snoovatar: boolean;
  pref_top_karma_subreddits: any; // ?
  subreddit: Subreddit | null;
  suspension_expiration_utc: number | null;
  verified: boolean;

  assignFlair(options: any): Promise<this>;
  friend(options: any): Promise<this>;
  getComments(options?: any): Listing<Comment>;
  getDownvotedContent(options?: any): Listing<Comment | Submission>;
  getFriendInformation(): Promise<any>;
  getGildedContent(options?: any): Listing<Comment | Submission>;
  getHiddenContent(options?: any): Listing<Comment | Submission>;
  getMultireddit(name: string): MultiReddit;
  getMultireddits(): Promise<MultiReddit[]>;
  getOverview(options?: any): Listing<Comment | Submission>;
  getSavedContent(options?: any): Listing<Comment | Submission>;
  getSubmissions(options?: any): Listing<Submission>;
  getTrophies(): Promise<any>;
  getUpvotedContent(options?: any): Listing<Comment | Submission>;
  giveGold(months: string): Promise<any>;
  unfriend(): Promise<any>;
}

interface Features {
  do_not_track: boolean;
  show_amp_link: boolean;
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
