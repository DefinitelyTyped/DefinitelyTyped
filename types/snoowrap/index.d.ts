// Type definitions for snoowrap 1.14
// Project: https://github.com/not-an-aardvark/snoowrap
// Definitions by: Vito Samson <https://github.com/vitosamson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CoreOptions as RequestOptions } from 'request';

import {
  Comment as _Comment,
  Listing as _Listing,
  ListingOptions,
  LiveThread as _LiveThread,
  LiveThreadSettings,
  MultiReddit as _MultiReddit,
  MultiRedditProperties,
  PrivateMessage as _PrivateMessage,
  RedditContent as _RedditContent,
  RedditUser as _RedditUser,
  ReplyableContent as _ReplyableContent,
  Submission as _Submission,
  Subreddit as _Subreddit,
  SubredditSettings,
  VoteableContent as _VoteableContent,
  WikiPage as _WikiPage,
} from './dist/objects';

export = Snoowrap;

declare class Snoowrap {
  static getAuthUrl(options: Snoowrap.AuthUrlOptions): string;
  static fromAuthCode(options: Snoowrap.AuthCodeOptions): Snoowrap;
  static noConflict(): typeof Snoowrap;

  accessToken: string;
  clientId: string;
  clientSecret: string;
  password: string;
  ratelimitExpiration: number;
  ratelimitRemaining: number;
  refreshToken: string;
  scope: string[];
  tokenExpiration: number;
  userAgent: string;
  username: string;

  constructor(options: Snoowrap.SnoowrapOptions);
  checkCaptchaRequirement(): Promise<boolean>;
  checkUsernameAvailability(name: string): Promise<boolean>;
  composeMessage(options: Snoowrap.ComposeMessageParams): Promise<any>;
  config(opts: Snoowrap.ConfigOptions): Snoowrap.ConfigOptions;
  createLivethread(options: LiveThreadSettings): Promise<_LiveThread>;
  createMultireddit(options: MultiRedditProperties & { name: string; subreddits: _Subreddit[] | string[]}): Promise<_MultiReddit>;
  createSubreddit(options: SubredditSettings): Promise<_Subreddit>;
  credentialedClientRequest(options?: RequestOptions): Promise<any>;
  getBlockedUsers(): Promise<_RedditUser[]>;
  getCaptchaImage(identifier: string): Promise<string>;
  getComment(commentId: string): _Comment;
  getContributorSubreddits(options?: ListingOptions): _Listing<_Subreddit>;
  getControversial(subredditName?: string, options?: ListingOptions): _Listing<_Submission>;
  getDefaultSubreddits(options?: ListingOptions): _Listing<_Subreddit>;
  getFriends(): Promise<_RedditUser[]>;
  getGoldSubreddits(options?: ListingOptions): _Listing<_Subreddit>;
  getHot(subredditName?: string, options?: ListingOptions): _Listing<_Submission>;
  getInbox(options?: { filter?: string }): _Listing<_PrivateMessage | _Comment>;
  getKarma(): Promise<Array<{ sr: _Subreddit; comment_karma: number; link_karma: number; }>>;
  getLivethread(threadId: string): _LiveThread;
  getMe(): _RedditUser;
  getMessage(messageId: string): _PrivateMessage;
  getModeratedSubreddits(options?: ListingOptions): _Listing<_Subreddit>;
  getModmail(options?: ListingOptions): _Listing<_PrivateMessage>;
  getMyMultireddits(): Promise<_MultiReddit[]>;
  getMyTrophies(): Promise<Snoowrap.Trophy[]>;
  getNew(subredditName?: string, options?: ListingOptions): _Listing<_Submission>;
  getNewCaptchaIdentifier(): Promise<string>;
  getNewComments(subredditName?: string, options?: ListingOptions): _Listing<_Comment>;
  getNewSubreddits(options?: ListingOptions): _Listing<_Subreddit>;
  getOauthScopeList(): Promise<{ [key: string]: { description: string; id: string; name: string } }>;
  getPopularSubreddit(options?: ListingOptions): _Listing<_Subreddit>;
  getPreferences(): Promise<any>;
  getRandomSubmission(subredditName?: string): _Submission;
  getRising(subredditName?: string, options?: ListingOptions): _Listing<_Submission>;
  getSavedCategories(): Promise<any[]>;
  getSentMessages(options?: ListingOptions): _Listing<_PrivateMessage>;
  getStickiedLivethread(): Promise<_LiveThread | undefined>;
  getSubmission(submissionId: string): _Submission;
  getSubreddit(displayName: string): _Subreddit;
  getSubscriptions(options?: ListingOptions): _Listing<_Subreddit>;
  getTop(subredditName?: string, options?: ListingOptions): _Listing<_Submission>;
  getUnreadMessages(options?: ListingOptions): _Listing<_PrivateMessage>;
  getUser(name: string): _RedditUser;
  markAsVisited(links: _Submission[]): Promise<void>;
  markMessagesAsRead(messages: _PrivateMessage[] | string[]): Promise<void>;
  markMessagesAsUnread(messages: _PrivateMessage[] | string[]): Promise<void>;
  oauthRequest(options: RequestOptions): Promise<any>;
  rawRequest(options: RequestOptions): Promise<any>;
  readAllMessages(): Promise<void>;
  revokeRefreshToken(): Promise<void>;
  search(options: Snoowrap.SearchOptions): _Listing<_Submission>;
  searchSubredditNames(options: { query: string; exact?: boolean; includeNsfw?: boolean; }): Promise<string[]>;
  searchSubreddits(options: ListingOptions & { query: string }): _Listing<_Subreddit>;
  searchSubredditTopics(options: { filter: string; }): Promise<_Subreddit[]>;
  submitLink(options: Snoowrap.SubmitLinkOptions): Promise<_Submission>;
  submitSelfpost(options: Snoowrap.SubmitSelfPostOptions): Promise<_Submission>;
  unauthenticatedRequest(options: RequestOptions): Promise<any>; // options: https://www.npmjs.com/package/request
  updateAccessToken(): Promise<string>;
  updatePreferences(updatedPreferences: any): Promise<void>;
}

declare namespace Snoowrap {
  export interface SnoowrapOptions {
    userAgent: string;
    clientId?: string;
    clientSecret?: string;
    username?: string;
    password?: string;
    refreshToken?: string;
    accessToken?: string;
  }

  export interface ConfigOptions {
    endpointDomain?: string;
    requestDelay?: number;
    requestTimeout?: number;
    continueAfterRatelimitError?: boolean;
    retryErrorCodes?: number[];
    maxRetryAttempts?: number;
    warnings?: boolean;
    debug?: boolean;
    proxies?: boolean;
  }

  export interface AuthUrlOptions {
    clientId: string;
    scope: string[];
    redirectUri: string;
    permanent?: boolean; // defaults to true
    state?: string;
    endpointDomain?: string;
  }

  export interface AuthCodeOptions {
    code: string;
    userAgent: string;
    clientId: string;
    clientSecret?: string;
    redirectUri: string;
    endpointDomain?: string;
  }

  export type Sort = 'confidence' | 'top' | 'new' | 'controversial' | 'old' | 'random' | 'qa';

  export interface ModAction extends RedditContent<ModAction> {
    target_body: string;
    mod_id36: string;
    created_utc: number;
    subreddit: Subreddit;
    target_title: string | null;
    target_permalink: string;
    subreddit_name_prefixed: string;
    details: string | null;
    action: string;
    target_author: string;
    target_fullname: string;
    sr_id36: string;
    id: string;
    mod: string;
    description: string | null;
  }

  export interface SubmitSelfPostOptions {
    text?: string;
    subredditName: string;
    title: string;
    sendReplies?: boolean;
    captchaIden?: string;
    captchaResponse?: string;
  }

  export interface SubmitLinkOptions {
    url: string;
    resubmit?: boolean;
  }

  export interface ComposeMessageParams {
    to: RedditUser | Subreddit | string;
    subject: string;
    text: string;
    fromSubreddit?: Subreddit | string;
    captchaIden?: string;
    captchaResponse?: string;
  }

  export interface BaseSearchOptions {
    query: string;
    time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';
    sort?: 'relevance' | 'hot' | 'top' | 'new' | 'comments';
    syntax?: 'cloudsearch' | 'lucene' | 'plain';
  }

  export interface SearchOptions extends BaseSearchOptions {
    subreddit?: Subreddit | string;
    restrictSr?: boolean;
  }

  export interface Trophy {
    icon_70: string;
    icon_40: string;
    name: string;
    url: string;
    award_id: string;
    id: string;
    description: string;
  }

  export {
    _Comment as Comment,
    _Listing as Listing,
    _LiveThread as LiveThread,
    _MultiReddit as MultiReddit,
    _PrivateMessage as PrivateMessage,
    _RedditContent as RedditContent,
    _RedditUser as RedditUser,
    _ReplyableContent as ReplyableContent,
    _Submission as Submission,
    _Subreddit as Subreddit,
    _VoteableContent as VoteableContent,
    _WikiPage as WikiPage,
  };
}
