import * as Snoowrap from 'snoowrap';
import {
  Comment,
  LiveThread,
  MultiReddit,
  PrivateMessage,
  RedditUser,
  Submission,
  Subreddit,
  WikiPage,
} from 'snoowrap';

const r = new Snoowrap({
  userAgent: 'foo',
});

export function comment(id: string): Comment {
  return r.getComment(id);
}

export function liveThread(id: string): LiveThread {
  return r.getLivethread(id);
}

export function multireddits(username: string): Promise<MultiReddit[]> {
  return r.getUser(username).getMultireddits();
}

export function pm(id: string): PrivateMessage {
  return r.getMessage(id);
}

export function user(username: string): RedditUser {
  return r.getUser(username);
}

export function submission(id: string): Promise<Submission> {
  return r.getSubmission(id).fetch();
}

export function subreddit(name: string): Subreddit {
  return r.getSubreddit(name);
}

export function wiki(subreddit: string, page: string): WikiPage {
  return r.getSubreddit(subreddit).getWikiPage(page);
}
