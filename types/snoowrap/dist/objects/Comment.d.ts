import Listing from './Listing';
import RedditUser from './RedditUser';
import Subreddit from './Subreddit';
import VoteableContent from './VoteableContent';

export default class Comment extends VoteableContent<Comment> {
  approved: boolean;
  body_html: string;
  body: string;
  collapsed_reason: any; // ?
  collapsed: boolean;
  controversiality: number;
  ignore_reports: boolean;
  link_id: string;
  parent_id: string;
  removed: boolean;
  replies: Listing<Comment>;
  score_hidden: boolean;
  spam: boolean;
}
