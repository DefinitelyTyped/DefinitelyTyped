import { Sort } from '../..';
import Comment from './Comment';
import Listing, { ListingOptions } from './Listing';
import RedditUser from './RedditUser';
import Subreddit, { FlairTemplate } from './Subreddit';
import VoteableContent from './VoteableContent';

export default class Submission extends VoteableContent<Submission> {
  brand_safe: boolean;
  clicked: boolean;
  comments: Listing<Comment>;
  domain: string;
  hidden: boolean;
  hide_score: boolean;
  is_self: boolean;
  is_video: boolean;
  link_flair_css_class: string | null;
  link_flair_text: string | null;
  locked: boolean;
  media_embed: any; // ?
  media: any; // ?
  num_comments: number;
  over_18: boolean;
  permalink: string;
  post_hint: string;
  preview: { enabled: boolean; images: ImagePreview[] };
  quarantine: boolean;
  removal_reason: string | null;
  secure_media_embed: any; // ?
  secure_media: any; // ?
  selftext_html: string;
  selftext: string;
  spoiler: boolean;
  suggested_sort: Sort;
  thumbnail_height: number | null;
  thumbnail: string;
  title: string;
  upvote_ratio: number;
  url: string;
  view_count: number | null;
  visited: boolean;

  assignFlair(options: { text: string; cssClass: string; }): Promise<this>;
  disableContestMode(): Promise<this>;
  enableContestMode(): Promise<this>;
  getDuplicates(options?: ListingOptions): Listing<Submission>;
  getLinkFlairTemplates(): Promise<FlairTemplate[]>;
  /* @deprecated */ getRelated(options?: ListingOptions): Submission;
  hide(): Promise<this>;
  lock(): Promise<this>;
  markAsRead(): Promise<this>;
  markNsfw(): Promise<this>;
  markSpoiler(): Promise<this>;
  selectFlair(options: { flair_template_id: string; text?: string; }): Promise<this>;
  setSuggestedSort(sort: Sort): Promise<this>;
  sticky(options?: { num?: number }): Promise<this>;
  unhide(): Promise<this>;
  unlock(): Promise<this>;
  unmarkNsfw(): Promise<this>;
  unmarkSpoiler(): Promise<this>;
  unsticky(): Promise<this>;
}

interface ImagePreviewSource {
  url: string;
  width: number;
  height: number;
}

interface ImagePreview {
  source: ImagePreviewSource;
  resolutions: ImagePreviewSource[];
  variants: any; // ?
  id: string;
}
