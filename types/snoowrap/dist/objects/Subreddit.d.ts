import { BaseSearchOptions, ModAction, Sort, SubmitLinkOptions, SubmitSelfPostOptions } from '../..';
import Comment from './Comment';
import Listing, { ListingOptions } from './Listing';
import PrivateMessage from './PrivateMessage';
import RedditContent from './RedditContent';
import RedditUser from './RedditUser';
import Submission from './Submission';
import { RichTextFlair } from './VoteableContent';
import WikiPage, { WikiPageRevision } from './WikiPage';

export default class Subreddit extends RedditContent<Subreddit> {
  accounts_active_is_fuzzed: boolean;
  accounts_active: number;
  active_user_count: number;
  advertiser_category: string | null;
  all_original_content: boolean;
  allow_discovery: boolean;
  allow_images: boolean;
  allow_videogifs: boolean;
  allow_videos: boolean;
  /** HEX color code */
  banner_background_color: string;
  /** URL of the banner image used on desktop Reddit */
  banner_background_image: string;
  /** URL of the banner image used on the mobile Reddit app */
  banner_img: string;
  banner_size: [number, number] | null;
  can_assign_link_flair: boolean;
  can_assign_user_flair: boolean;
  collapse_deleted_comments: boolean;
  comment_score_hide_mins: number;
  /** Image URL of the subreddit icon */
  community_icon: string;
  description_html: string;
  description: string;
  display_name: string;
  display_name_prefixed: string;
  emojis_custom_size: [number, number] | null;
  emojis_enabled: boolean;
  has_menu_widget: boolean;
  header_img: string | null;
  header_size: [number, number] | null;
  header_title: string | null;
  hide_ads: boolean;
  icon_img: string;
  icon_size: [number, number] | null;
  is_enrolled_in_new_modmail: boolean | null;
  key_color: string;
  lang: string;
  link_flair_enabled: boolean;
  link_flair_position: '' | 'left' | 'right';
  /** Will be null if user is not subscribed to this subreddit */
  notification_level: string | null;
  over18: boolean;
  /** HEX color code */
  primary_color: string;
  public_description_html: string;
  public_description: string;
  public_traffic: boolean;
  quarantine: boolean;
  show_media_preview: boolean;
  show_media: boolean;
  spoilers_enabled: boolean;
  submission_type: LinkType;
  submit_link_label: string | null;
  submit_text_html: string;
  submit_text_label: string | null;
  submit_text: string;
  subreddit_type: SubredditType;
  subscribers: number;
  suggested_comment_sort: Sort | null;
  title: string;
  url: string;
  user_can_flair_in_sr: boolean;
  user_flair_background_color: string | null;
  user_flair_css_class: string | null;
  user_flair_enabled_in_sr: boolean;
  user_flair_position: '' | 'left' | 'right';
  user_flair_richtext: RichTextFlair[];
  user_flair_template_id: string | null;
  user_flair_text: string | null;
  user_flair_text_color: 'dark' | 'light' | null;
  user_has_favorited: boolean;
  user_is_banned: boolean;
  user_is_contributor: boolean;
  user_is_moderator: boolean;
  user_is_muted: boolean;
  user_is_subscriber: boolean;
  user_sr_flair_enabled: boolean;
  user_sr_theme_enabled: boolean;
  whitelist_status: string;
  wiki_enabled: boolean;
  wls: number;

  acceptModeratorInvite(): Promise<this>;
  addContributor(options: { name: string; }): Promise<this>;
  addWikiContributor(options: { name: string; }): Promise<this>;
  banUser(options: BanOptions): Promise<this>;
  configureFlair(options: FlairConfig): Promise<this>;
  createLinkFlairTemplate(options: FlairParams): Promise<this>;
  createUserFlairTemplate(options: FlairParams): Promise<this>;
  deleteAllLinkFlairTemplates(): Promise<this>;
  deleteAllUserFlairTemplates(): Promise<this>;
  deleteBanner(): Promise<this>;
  deleteFlairTemplate(options: { flair_template_id: string; }): Promise<this>;
  deleteHeader(): Promise<this>;
  deleteIcon(): Promise<this>;
  deleteImage(options: { imageName: string; }): Promise<this>;
  deleteUserFlair(name: string): Promise<this>;
  editSettings(options: SubredditSettings): Promise<this>;
  getBannedUsers(options?: ListingOptions & { name?: string }): Promise<Listing<BannedUser>>;
  getContributors(options?: ListingOptions & { name?: string }): Promise<Listing<Contributor>>;
  getControversial(options?: ListingOptions & { time?: string }): Promise<Listing<Submission>>;
  getEdited(options?: ListingOptions & { only?: 'links' | 'comments' }): Promise<Listing<Submission | Comment>>;
  getHot(options?: ListingOptions): Promise<Listing<Submission>>;
  getLinkFlairTemplates(linkId: string): Promise<FlairTemplate[]>;
  getModerationLog(opts?: ListingOptions & { mods?: string[]; type?: ModActionType}): Promise<Listing<ModAction>>;
  getModerators(options?: ListingOptions & { name?: string }): RedditUser[];
  getModmail(options?: ListingOptions): Promise<Listing<PrivateMessage>>;
  getModqueue(options?: ListingOptions & { only?: 'links' | 'comments' }): Promise<Listing<Submission | Comment>>;
  getMutedUsers(options?: ListingOptions & { name?: string }): Promise<Listing<MutedUser>>;
  getMyFlair(): Promise<FlairTemplate>;
  getNew(options?: ListingOptions): Promise<Listing<Submission>>;
  getNewComments(options?: ListingOptions): Promise<Listing<Comment>>;
  getRandomSubmission(): Promise<Submission>;
  getRecommendedSubreddits(options?: { omit?: string[]; }): Promise<Subreddit[]>;
  getReports(options?: ListingOptions & { only?: 'links' | 'comments' }): Promise<Listing<Submission | Comment>>;
  getRising(options?: ListingOptions): Promise<Listing<Submission>>;
  getRules(): Promise<{ rules: Rule[]; site_rules: string[] }>;
  getSettings(): Promise<SubredditSettings>;
  getSpam(options?: ListingOptions & { only?: 'links' | 'comments' }): Promise<Listing<Submission | Comment>>;
  getSticky(options?: { num?: number }): Promise<Submission>;
  getStylesheet(): Promise<string>;
  getSubmitText(): Promise<string>;
  getTop(options?: ListingOptions & { time?: Timespan }): Promise<Listing<Submission>>;
  getUnmoderated(options?: ListingOptions & { only?: 'links' | 'comments' }): Promise<Listing<Submission | Comment>>;
  getUserFlair(name: string): Promise<FlairTemplate>;
  getUserFlairList(options?: ListingOptions & { name?: string; }): Promise<Listing<UserFlair>>;
  getUserFlairTemplates(): Promise<FlairTemplate[]>;
  getWikiBannedUsers(options?: ListingOptions & { name?: string }): Promise<Listing<BannedUser>>;
  getWikiContributors(options?: ListingOptions & { name?: string }): Promise<Listing<Contributor>>;
  getWikiPage(name: string): WikiPage;
  getWikiPages(): Promise<WikiPage[]>;
  getWikiRevisions(options?: ListingOptions): Promise<Listing<WikiPageRevision>>;
  hideMyFlair(): Promise<this>;
  inviteModerator(options: { name: string; permissions?: ModeratorPermission[]; }): Promise<this>;
  leaveContributor(): Promise<this>;
  leaveModerator(): Promise<this>;
  muteUser(options: { name: string; }): Promise<this>;
  removeContributor(options: { name: string; }): Promise<this>;
  removeModerator(options: { name: string; }): Promise<this>;
  removeWikiContributor(options: { name: string; }): Promise<this>;
  revokeModeratorInvite(options: { name: string; }): Promise<this>;
  search(options: BaseSearchOptions): Promise<Listing<Submission>>;
  selectMyFlair(options: { flair_template_id: string; text?: string; }): Promise<this>;
  setModeratorPermissions(options: { name: string; permissions: ModeratorPermission; }): Promise<this>;
  setMultipleUserFlairs(flairs: Array<{
    name: string;
    text: string;
    cssClass: string;
  }>): Promise<this>;
  showMyFlair(): Promise<this>;
  submitLink(options: SubmitLinkOptions): Promise<Submission>;
  submitSelfPost(options: SubmitSelfPostOptions): Promise<Submission>;
  subscribe(): Promise<this>;
  unbanUser(options: { name: string; }): Promise<this>;
  unmuteUser(options: { name: string; }): Promise<this>;
  unsubscribe(): Promise<this>;
  unwikibanUser(options: { name: string; }): Promise<this>;
  updateStylesheet(options: { css: string; reason?: string; }): Promise<this>;
  uploadBannerImage(options: ImageUploadOptions): Promise<this>;
  uploadHeaderImage(options: ImageUploadOptions): Promise<this>;
  uploadIcon(options: ImageUploadOptions): Promise<this>;
  uploadStylesheetImage(options: ImageUploadOptions & { name: string; }): Promise<this>;
  wikibanUser(options: { name: string; }): Promise<this>;
}

// this is per-flair
interface FlairParams {
  text: string;
  cssClass?: string;
  textEditable?: boolean;
}

// this is for the entire subreddit
interface FlairConfig {
  userFlairEnabled: boolean;
  userFlairPosition: 'left' | 'right';
  userFlairSelfAssignEnabled: boolean;
  linkFlairPosition: 'left' | 'right';
  linkFlairSelfAssignEnabled: boolean;
}

export interface FlairTemplate {
  flair_css_class: string;
  flair_template_id: string;
  flair_text_editable: string;
  flair_position: string;
  flair_text: string;
}

interface UserFlair {
  flair_css_class: string;
  user: string;
  flair_text: string;
}

interface UserDetails {
  date: number;
  name: string;
  id: string;
}
type BannedUser = UserDetails & { note: string; };
type MutedUser = UserDetails;
type Contributor = UserDetails;

type SubredditType = 'public' | 'private' | 'restricted' | 'gold_restricted' | 'gold_only' | 'archived' | 'employees_only';
type LinkType = 'any' | 'link' | 'self';

type SpamLevel = 'low' | 'high' | 'all';
export interface SubredditSettings {
  name: string;
  title: string;
  public_description: string;
  description: string;
  submit_text?: string;
  hide_ads?: boolean;
  lang?: string;
  type?: SubredditType;
  link_type?: LinkType;
  submit_link_label?: string;
  submit_text_label?: string;
  wikimode?: 'modonly' | 'anyone' | 'disabled';
  wiki_edit_karma?: number;
  wiki_edit_age?: number;
  spam_links?: SpamLevel;
  spam_selfposts?: SpamLevel;
  spam_comments?: SpamLevel;
  over_18?: boolean;
  allow_top?: boolean;
  show_media?: boolean;
  exclude_banned_modqueue?: boolean;
  public_traffic?: boolean;
  collapse_deleted_comments?: boolean;
  suggested_comment_sort?: Sort; // TODO rename AvailableSorts?
  spoilers_enabled?: boolean;
}

interface ImageUploadOptions {
  file: string | ReadableStream;
  imageType?: string;
}

interface Rule {
  kind: string;
  short_name: string;
  description: string;
  violation_reason: string;
  created_utc: string;
  priority: number;
  description_html: string;
}

type ModeratorPermission = 'wiki' | 'posts' | 'access' | 'mail' | 'config' | 'flair';

interface BanOptions {
  name: string;
  banMessage?: string;
  banReason?: string;
  duration?: number;
  banNote?: string;
}

type Timespan = 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

export type ModActionType = 'banuser' |
  'unbanuser' |
  'removelink' |
  'approvelink' |
  'removecomment' |
  'approvecomment' |
  'addmoderator' |
  'invitemoderator' |
  'uninvitemoderator' |
  'acceptmoderatorinvite' |
  'removemoderator' |
  'addcontributor' |
  'removecontributor' |
  'editsettings' |
  'editflair' |
  'distinguish' |
  'marknsfw' |
  'wikibanned' |
  'wikicontributor' |
  'wikiunbanned' |
  'wikipagelisted' |
  'removewikicontributor' |
  'wikirevise' |
  'wikipermlevel' |
  'ignorereports' |
  'unignorereports' |
  'setpermissions' |
  'setsuggestedsort' |
  'sticky' |
  'unsticky' |
  'setcontestmode' |
  'unsetcontestmode' |
  'lock' |
  'unlock' |
  'muteuser' |
  'unmuteuser' |
  'createrule' |
  'editrule' |
  'deleterule' |
  'spoiler' |
  'unspoiler';
