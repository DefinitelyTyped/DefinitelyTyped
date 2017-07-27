import Listing, { ListingOptions } from './Listing';
import RedditContent from './RedditContent';
import RedditUser from './RedditUser';
import Submission from './Submission';

export default class WikiPage extends RedditContent<WikiPage> {
  content_html: string;
  content_md: string;
  may_revise: boolean;
  revision_by: RedditUser;
  revision_date: number;

  addEditor(options: { name: string; }): Promise<this>;
  edit(options: EditOptions): Promise<this>;
  editSettings(options: Settings): Promise<this>;
  getDiscussions(options?: ListingOptions): Listing<Submission>;
  getRevisions(options?: ListingOptions): Listing<WikiPageRevision>;
  getSettings(): Promise<Settings>;
  hideRevision(options: { id: string; }): Promise<this>;
  removeEditor(options: { name: string; }): Promise<this>;
  revert(options: { id: string; }): Promise<this>;
}

interface Settings {
  listed: boolean;
  permissionLevel: 0 | 1 | 2;
}

interface EditOptions {
  text: string;
  reason?: string;
  perviousRevision?: string;
}

export interface WikiPageRevision {
  timestamp: number;
  reason: string;
  page: string;
  id: string;
  author: RedditUser;
}
