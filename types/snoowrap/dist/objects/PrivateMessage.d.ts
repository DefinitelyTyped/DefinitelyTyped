import Listing from './Listing';
import RedditUser from './RedditUser';
import ReplyableContent from './ReplyableContent';
import Subreddit from './Subreddit';

export default class PrivateMessage extends ReplyableContent<PrivateMessage> {
  author: RedditUser;
  body_html: string;
  body: string;
  context: string;
  dest: string;
  distinguished: string | null;
  first_message_name: string;
  first_message: number;
  likes: any; // ?
  new: boolean;
  num_comments: number;
  parent_id: string;
  replies: Listing<PrivateMessage>;
  score: number;
  subject: string;
  subreddit_name_prefixed: string;
  subreddit: Subreddit;
  was_comment: boolean;

  deleteFromInbox(): Promise<this>;
  markAsRead(): Promise<this>;
  markAsUnread(): Promise<this>;
  muteAuthor(): Promise<this>;
  unmuteAuthor(): Promise<this>;
}
