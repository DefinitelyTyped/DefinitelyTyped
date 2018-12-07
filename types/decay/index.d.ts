// Type definitions for decay 1.0
// Project: https://github.com/clux/decay
// Definitions by: Eric Naeseth <https://github.com/enaeseth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Creates a function to rank posts using Reddit's "hot" algorithm.
 * @param decay controls how quickly rankings drop with time
 * @return calculator function
 */
export function redditHot(decay?: number): RedditHotFunction;

/**
 * Creates a function to rank posts using the Hacker News "hot" algorithm.
 * @param gravity controls how quickly rankings drop with time
 * @return calculator function
 */
export function hackerHot(gravity?: number): HackerNewsHotFunction;

/**
 * Creates a function to rank posts using the Wilson score interval sort (Reddit's "best"
 * algorithm).
 * @param confidence statistical confidence
 * @return calculator function
 * @see {@link https://redditblog.com/2009/10/15/reddits-new-comment-sorting-system/ Reddit's writeup}
 */
export function wilsonScore(confidence?: number): WilsonScoreFunction;

/**
 * Computes a ranking using Reddit's "hot" algorithm.
 * @param upvotes number of upvotes the post has received
 * @param downvotes number of upvotes the post has received
 * @param date when the post was posted
 * @return ranking
 */
export type RedditHotFunction = (upvotes: number, downvotes: number, date: Date) => number;

/**
 * Computes a ranking using the Hacker News "hot" algorithm.
 * @param votes number of upvotes the post has received
 * @param date when the post was posted
 * @return ranking
 */
export type HackerNewsHotFunction = (votes: number, date: Date) => number;

/**
 * Computes a ranking using the Wilson score (Reddit's "best" algorithm).
 * @param upvotes number of upvotes the post has received
 * @param downvotes number of upvotes the post has received
 * @return ranking
 */
export type WilsonScoreFunction = (upvotes: number, downvotes: number) => number;
