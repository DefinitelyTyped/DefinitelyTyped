import RedditUser from './RedditUser';
import ReplyableContent from './ReplyableContent';
import Subreddit from './Subreddit';

interface RichTextFlair {
  /** The string representation of the emoji */
  a?: string;
  /** The type of the flair entry */
  e: 'text' | 'emoji';
  /** URL of the emoji image */
  u?: string;
  /** The text content of a text flair */
  t?: string;
}

interface Gildings {
  /** Number of Reddit Silver awarded */
  gid_1: number;
  /** Number of Reddit Gold awarded */
  gid_2: number;
  /** Number of Reddit Platinum awarded */
  gid_3: number;
}

export type SubredditType =
  | 'gold_restricted'
  | 'archived'
  | 'restricted'
  | 'employees_only'
  | 'gold_only'
  | 'private'
  | 'user'
  | 'public';

export default class VoteableContent<T> extends ReplyableContent<T> {
  approved_at_utc: number | null;
  approved_by: RedditUser | null;
  archived: boolean;
  author: RedditUser;
  author_flair_background_color: string | null;
  author_flair_css_class: string | null;
  author_flair_richtext: RichTextFlair[];
  author_flair_template_id: string | null;
  author_flair_text: string | null;
  author_flair_text_color: string | null;
  author_flair_type: 'text' | 'richtext';
  author_fullname: string;
  author_patreon_flair: boolean;
  banned_at_utc: number | null;
  banned_by: RedditUser | null;
  can_gild: boolean;
  can_mod_post: boolean;
  distinguished: 'admin' | 'moderator' | null;
  downs: number;
  edited: number | boolean;
  gilded: number;
  gildings: Gildings;
  /** true = upvoted, false = downvoted, null = hasn't voted */
  likes: boolean | null;
  mod_note: string;
  /** The name of the user that added the mod_note */
  mod_reason_by: string;
  mod_reason_title: string;
  mod_reports: string[];
  no_follow: boolean;
  num_reports: number;
  permalink: string;
  removal_reason: any; // ?
  report_reasons: string[];
  saved: boolean;
  score: number;
  send_replies: boolean;
  stickied: boolean;
  subreddit: Subreddit;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_type: SubredditType;
  ups: number;
  user_reports: string[];

  delete(): Promise<this>;
  disableInboxReplies(): Promise<this>;
  distinguish(options?: { status?: boolean | string; sticky?: boolean; }): Promise<this>;
  downvote(): Promise<this>;
  edit(updatedText: string): Promise<this>;
  enableInboxReplies(): Promise<this>;
  expandReplies(options?: { limit?: number; depth?: number; }): Promise<T>;
  gild(): Promise<this>;
  save(): Promise<this>;
  undistinguish(): Promise<this>;
  unsave(): Promise<this>;
  unvote(): Promise<this>;
  upvote(): Promise<this>;
}
