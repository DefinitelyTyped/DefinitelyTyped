import { Sort } from '../..';
import Comment from './Comment';
import Listing, { ListingOptions } from './Listing';
import { FlairTemplate } from './Subreddit';
import VoteableContent, { RichTextFlair } from './VoteableContent';

interface Media {
  oembed?: {
    /** The username of the uploader of the source media */
    author_name?: string;
    /** URL to the author's profile on the source website */
    author_url?: string;
    description?: string;
    height: number;
    html: string;
    /** Name of the source website, e.g. "gfycat", "YouTube" */
    provider_name: string;
    /** URL of the source website, e.g. "https://www.youtube.com" */
    provider_url: string;
    thumbnail_height: number;
    thumbnail_url: string;
    thumbnail_width: number;
    /** Name of the media on the content site, e.g. YouTube video title */
    title: string;
    type: 'video' | 'rich';
    version: string;
    width: number;
  };
  reddit_video?: {
    dash_url: string;
    duration: number;
    fallback_url: string;
    height: number;
    hls_url: string;
    is_gif: boolean;
    scrubber_media_url: string;
    transcoding_status: string;
  };
  type?: string;
}

interface MediaEmbed {
  /** HTML string of the media, usually an iframe */
  content?: string;
  height?: number;
  scrolling?: boolean;
  width?: number;
}

interface SecureMediaEmbed extends MediaEmbed {
  media_domain_url?: string;
}

export default class Submission extends VoteableContent<Submission> {
  clicked: boolean;
  comments: Listing<Comment>;
  /** Categories for original content, e.g. "comics", "drawing_and_painting" */
  content_categories: string[] | null;
  contest_mode: boolean;
  domain: string;
  hidden: boolean;
  hide_score: boolean;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  link_flair_background_color: string;
  link_flair_css_class: string | null;
  link_flair_richtext: RichTextFlair[];
  link_flair_template_id: string | null;
  link_flair_text: string | null;
  link_flair_text_color: 'dark' | 'light';
  link_flair_type: 'text' | 'richtext';
  locked: boolean;
  media: Media | null;
  media_embed: MediaEmbed;
  media_only: boolean;
  num_comments: number;
  num_crossposts: number;
  over_18: boolean;
  parent_whitelist_status: string;
  pinned: boolean;
  previous_visits: number[];
  pwls: number;
  post_hint: string;
  preview: { enabled: boolean; images: ImagePreview[] };
  quarantine: boolean;
  removal_reason: string | null;
  /** Same content as media, except HTTPS */
  secure_media: Media | null;
  secure_media_embed: SecureMediaEmbed;
  selftext: string;
  selftext_html: string | null;
  spam?: boolean;
  spoiler: boolean;
  subreddit_subscribers: number;
  suggested_sort: Sort | null;
  thumbnail: string;
  thumbnail_height?: number | null;
  thumbnail_width?: number | null;
  title: string;
  upvote_ratio: number;
  url: string;
  view_count: number | null;
  visited: boolean;
  whitelist_status: string;
  wls: number;

  assignFlair(options: { text: string; cssClass: string; }): Promise<this>;
  disableContestMode(): Promise<this>;
  enableContestMode(): Promise<this>;
  getDuplicates(options?: ListingOptions): Promise<Listing<Submission>>;
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
