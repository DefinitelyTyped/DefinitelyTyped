import RedditContent from './RedditContent';

export default class ReplyableContent<T> extends RedditContent<T> {
  approve(): Promise<this>;
  blockAuthor(): Promise<this>;
  ignoreReports(): Promise<this>;
  remove(options?: { spam?: boolean }): Promise<this>;
  reply(text: string): Promise<ReplyableContent<T>>;
  report(options?: { reason?: string }): Promise<this>;
  unignoreReports(): Promise<this>;
}
