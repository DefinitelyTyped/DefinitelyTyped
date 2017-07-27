import RedditUser from './RedditUser';
import ReplyableContent from './ReplyableContent';
import Subreddit from './Subreddit';

export default class VoteableContent<T> extends ReplyableContent<T> {
  approved_at_utc: number | null;
  approved_by: RedditUser | null;
  archived: boolean;
  author_flair_css_class: string | null;
  author_flair_text: string | null;
  author: RedditUser;
  banned_at_utc: number | null;
  banned_by: RedditUser | null;
  can_gild: boolean;
  can_mod_post: boolean;
  distinguished: string | null;
  downs: number;
  edited: number | boolean;
  gilded: number;
  likes: any; // ?
  mod_reports: string[];
  num_reports: number;
  report_reasons: string[];
  saved: boolean;
  score: number;
  stickied: boolean;
  subreddit_name_prefixed: string;
  subreddit_type: string;
  subreddit: Subreddit;
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
