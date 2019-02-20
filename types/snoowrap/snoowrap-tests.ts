import Snoowrap = require('snoowrap');
import {
  Comment,
  Listing,
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

export function topSubmissions(name: string): Promise<Listing<Submission>> {
  return r.getTop(name, { time: 'all' });
}

export function wiki(subreddit: string, page: string): WikiPage {
  return r.getSubreddit(subreddit).getWikiPage(page);
}

export function getNewComments(subreddit: string): Promise<Listing<Comment>> {
  return r.getNewComments(subreddit);
}

export function thenable(): Promise<string> {
  return r.getMe().then(me => me.name);
}

export function getConfig(): Snoowrap.ConfigOptions {
  return r.config();
}

export function setConfig(options: Snoowrap.ConfigOptions): Snoowrap.ConfigOptions {
  return r.config(options);
}

export function oauthRequest(method: string, uri: string): Promise<any> {
  return r.oauthRequest({
    method,
    uri,
  });
}

export function submissionSearch(query: string, subreddit: string): Promise<Listing<Submission>> {
  return r.search({ query, subreddit });
}

export function subredditSearch(query: string): Promise<Listing<Subreddit>> {
  return r.searchSubreddits({ query });
}

export function getHotFromSubreddit(subreddit: string): Promise<Listing<Submission>> {
  return r.getSubreddit(subreddit).getHot({ limit: 10 });
}
