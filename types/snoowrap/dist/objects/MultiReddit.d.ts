import RedditUser from './RedditUser';
import RedditContent from './RedditContent';
import Subreddit from './Subreddit';

export default class MultiReddit extends RedditContent<MultiReddit> {
  can_edit: boolean;
  copied_from: string | null;
  curator: RedditUser;
  description_html: string;
  description_md: string;
  display_name: string;
  icon_name: MultiRedditIcon;
  icon_url: string | null;
  key_color: string;
  path: string;
  subreddits: Subreddit[];
  visibility: MultiRedditVisibility;
  weighting_schema: MultiRedditWeightingSchema;

  addSubreddit(sub: Subreddit | string): Promise<this>;
  copy(options: { newName: string; }): Promise<MultiReddit>;
  delete(): Promise<this>;
  edit(options: MultiRedditProperties): Promise<this>;
  removeSubreddit(sub: Subreddit | string): Promise<this>;
  rename(options: { newName: string; }): Promise<this>;
}

export interface MultiRedditProperties {
  name?: string;
  description?: string;
  visibility?: MultiRedditVisibility;
  icon_name?: MultiRedditIcon;
  key_color?: string;
  weighting_scheme?: MultiRedditWeightingSchema;
}

type MultiRedditWeightingSchema = 'classic' | 'fresh';
type MultiRedditVisibility = 'private' | 'public' | 'hidden';
type MultiRedditIcon = 'art and design' | 'ask' | 'books' | 'business' | 'cars' | 'comics' | 'cute animals' |
  'diy' | 'entertainment' | 'food and drink' | 'funny' | 'games' | 'grooming' | 'health' | 'life advice' |
  'military' | 'models pinup' | 'music' | 'news' | 'philosophy' | 'pictures and gifs' | 'science' | 'shopping' |
  'sports' | 'style' | 'tech' | 'travel' | 'unusual stories' | 'video';
