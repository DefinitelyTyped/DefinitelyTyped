import * as Snoowrap from '../..';

export default class Listing<T> extends Array<T> {
  constructor(options: any, _r: Snoowrap);
  isFinished: boolean;
  is_finished: boolean;
  fetchMore(options: FetchMoreOptions): Listing<T>;
  fetchAll(options?: FetchMoreOptions): Listing<T>;
  /* @deprecated */ fetchUntil(options?: FetchMoreOptions): Listing<T>;
  toJSON(): T[];
}

export interface ListingOptions {
  limit?: number;
  after?: string;
  before?: string;
  show?: string;
  count?: number;
}

export interface SortedListingOptions extends ListingOptions {
  time?: 'all' | 'hour' | 'day' | 'week' | 'month' | 'year';
}

interface FetchMoreOptions {
  amount: number;
  skipReplies?: boolean;
  skip_replies?: boolean;
  append?: boolean;
}
