import * as Snoowrap from '../..';

export default class RedditContent<T> {
  created_utc: number;
  created: number;
  id: string;
  name: string;

  constructor(options: any, _r: Snoowrap, _hasFetched: boolean);
  fetch(): Promise<T>;
  refresh(): Promise<T>;
  toJSON(): T;
}
